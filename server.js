const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { connectDB } = require('./mongo');
const { register, login } = require('./prijava');
require('dotenv').config();
require('./ping');

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

const authorizedUsers = new Set(['Radio Galaksija', 'ZI ZU', '__X__']);
const bannedUsers = new Set();
let guests = {};
let assignedNumbers = new Set();

io.on('connection', (socket) => {
    const uniqueNumber = generateUniqueNumber();
    const nickname = `Gost-${uniqueNumber}`;
    guests[socket.id] = nickname;
    const guestColors = {};
    guestColors[socket.id] = '';  

    console.log(`${nickname} se povezao.`);
    socket.broadcast.emit('newGuest', nickname);
    io.emit('updateGuestList', Object.values(guests));

    socket.on('userLoggedIn', async (username) => {
        if (authorizedUsers.has(username)) {
            guests[socket.id] = `${username} (Admin)`;
            console.log(`${username} je autentifikovan kao admin.`);
        } else {
            guests[socket.id] = username;
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
            nickname: guests[socket.id],
            time: time
        };
        io.emit('chatMessage', messageToSend);
    });

    socket.on('disconnect', () => {
        console.log(`${guests[socket.id]} se odjavio.`);
        assignedNumbers.delete(parseInt(guests[socket.id].split('-')[1], 10));
        delete guests[socket.id];
        io.emit('updateGuestList', { guests: Object.values(guests), guestColors: guestColors });
    });
});

// Funkcija za generisanje jedinstvenog broja
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
