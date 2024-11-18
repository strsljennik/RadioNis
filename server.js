const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { connectDB } = require('./mongo');
const { register, login } = require('./prijava');
const { loadUserData, saveUserData, updateUserColor } = require('./userData');  // Importovanje userData.js
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

connectDB();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.post('/register', (req, res) => register(req, res, io));
app.post('/login', (req, res) => login(req, res, io));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Niz sa ovlašćenim korisnicima
const authorizedUsers = new Set(['Radio Galaksija', 'ZI ZU', '__X__']);
const bannedUsers = new Set(); // Banovani korisnici
let guests = {};  // Držimo korisnike u memoriji
let assignedNumbers = new Set();

io.on('connection', (socket) => {
    const users = loadUserData();  // Učitaj podatke o korisnicima iz users.json
    const uniqueNumber = generateUniqueNumber();
    const username = `Gost-${uniqueNumber}`;
    const userColor = '#FF0000';  // Početna boja (možeš promeniti)

    guests[socket.id] = { username, color: userColor };
    saveUserData(username, userColor);  // Sačuvaj novog korisnika u JSON fajl

    console.log(`${username} se povezao.`);

    socket.broadcast.emit('newGuest', username);
    io.emit('updateGuestList', Object.values(guests));

    // Provera da li je korisnik ovlašćen
    socket.on('userLoggedIn', (username) => {
        if (authorizedUsers.has(username)) {
            guests[socket.id] = { username: `${username} (Admin)`, color: guests[socket.id].color };
            console.log(`${username} je autentifikovan kao admin.`);
        } else {
            guests[socket.id].username = username;
            console.log(`${username} se prijavio kao gost.`);
        }
        io.emit('updateGuestList', Object.values(guests));
    });

    socket.on('chatMessage', (msgData) => {
        const time = new Date().toLocaleTimeString();
        const messageToSend = {
            text: msgData.text,
            bold: msgData.bold,
            italic: msgData.italic,
            color: msgData.color,
            nickname: guests[socket.id].username,
            time: time
        };
        io.emit('chatMessage', messageToSend);
    });

    socket.on('changeColor', (newColor) => {
        guests[socket.id].color = newColor;
        updateUserColor(guests[socket.id].username, newColor);  // Ažuriraj boju u JSON fajlu
        io.emit('updateGuestList', Object.values(guests));
    });

    socket.on('disconnect', () => {
        console.log(`${guests[socket.id].username} se odjavio.`);
        assignedNumbers.delete(parseInt(guests[socket.id].username.split('-')[1], 10));
        delete guests[socket.id];
        io.emit('updateGuestList', Object.values(guests));
    });

    // Događaj za banovanje korisnika
    socket.on('banUser', (userIdToBan) => {
        if (!authorizedUsers.has(guests[socket.id].username.split(' ')[0])) {
            socket.emit('error', 'Nemate ovlašćenje za banovanje korisnika.');
            return;
        }
        if (!bannedUsers.has(userIdToBan)) {
            bannedUsers.add(userIdToBan);
            io.emit('userBanned', userIdToBan);
            console.log(`Korisnik ${userIdToBan} je banovan od strane ${guests[socket.id].username}.`);
        }
    });

    // Događaj za odbanovanje korisnika
    socket.on('unbanUser', (userIdToUnban) => {
        if (!authorizedUsers.has(guests[socket.id].username.split(' ')[0])) {
            socket.emit('error', 'Nemate ovlašćenje za odbanovanje korisnika.');
            return;
        }
        if (bannedUsers.has(userIdToUnban)) {
            bannedUsers.delete(userIdToUnban);
            io.emit('userUnbanned', userIdToUnban);
            console.log(`Korisnik ${userIdToUnban} je oslobođen od strane ${guests[socket.id].username}.`);
        }
    });
});

function generateUniqueNumber() {
    let number;
    do {
        number = Math.floor(Math.random() * 8889) + 1111;
    } while (assignedNumbers.has(number));
    assignedNumbers.add(number);
    return number;
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server je pokrenut na portu ${PORT}`);
});
