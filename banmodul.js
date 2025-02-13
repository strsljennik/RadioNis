let privilegedUsers = new Set(['Radio Galaksija', 'ZI ZU', '*__X__*']); // Privilegovani korisnici
let bannedUsers = new Set(); // Banovani korisnici
const userSockets = new Map(); // Mapa koja čuva socket.id → username

function setupSocketEvents(io, guests, bannedUsers) {
    io.on('connection', (socket) => {
        console.log(`[INFO] Korisnik povezan: ${socket.id}`);

        // Provera da li je korisnik banovan
        if (bannedUsers.has(socket.id)) {
            socket.emit('banned', 'Banovani ste sa servera.');
            socket.disconnect(true);
            return;
        }

        // Kada se korisnik prijavi
        socket.on('userLoggedIn', (username) => {
            console.log(`[INFO] Korisnik ${username} se prijavio.`);
            userSockets.set(socket.id, username); // Sačuvaj socket ID i username

            if (privilegedUsers.has(username)) {
                socket.emit('adminAccess', "Pristup odobren.");
                console.log(`[INFO] Korisnik ${socket.id} (${username}) je sada admin.`);
            }
        });

        // Banovanje korisnika
        socket.on('banUser', (nickname) => {
            const username = userSockets.get(socket.id); // Dobavi username iz mape
            console.log(`[INFO] Korisnik ${username} (${socket.id}) pokušava da banuje korisnika ${nickname}`);

            if (!privilegedUsers.has(username)) {
                socket.emit('error', "Nemate prava za banovanje.");
                console.log(`[WARN] Korisnik ${username} nije privilegovan za banovanje.`);
                return;
            }

            // Pronađi socket.id na osnovu nadimka iz `guests` objekta
            const targetSocketId = Object.keys(guests).find(id => guests[id] === nickname);

            if (!targetSocketId) {
                socket.emit('error', "Korisnik nije pronađen.");
                console.log(`[WARN] Korisnik ${nickname} nije pronađen u guestList.`);
                return;
            }

            bannedUsers.add(targetSocketId);
            io.to(targetSocketId).emit('banned', "Banovani ste sa servera.");
            const targetSocket = io.sockets.sockets.get(targetSocketId);
            if (targetSocket) targetSocket.disconnect(true);
            console.log(`[INFO] Korisnik ${nickname} je banovan od strane ${username}.`);

            io.emit('userBanned', nickname);
        });

        // Odbanovanje korisnika
        socket.on('unbanUser', (nickname) => {
            const username = userSockets.get(socket.id);
            console.log(`[INFO] Korisnik ${username} (${socket.id}) pokušava da odbanuje korisnika ${nickname}`);

            if (!privilegedUsers.has(username)) {
                socket.emit('error', "Nemate prava za odbanovanje.");
                console.log(`[WARN] Korisnik ${username} nije privilegovan za odbanovanje.`);
                return;
            }

            const targetSocketId = Object.keys(guests).find(id => guests[id] === nickname);

            if (targetSocketId) {
                bannedUsers.delete(targetSocketId);
                console.log(`[INFO] Korisnik ${nickname} je odbanovan od strane ${username}.`);
                io.emit('userUnbanned', nickname);
            } else {
                console.log(`[WARN] Korisnik ${nickname} nije pronađen u guests.`);
            }
        });

        // Diskonekcija korisnika
        socket.on('disconnect', () => {
            const username = userSockets.get(socket.id);
            console.log(`[INFO] Korisnik ${socket.id} (${username}) se odjavio.`);
            userSockets.delete(socket.id);
            bannedUsers.delete(socket.id);
        });
    });
}

module.exports = { setupSocketEvents };
