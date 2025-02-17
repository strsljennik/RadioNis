const mongoose = require('mongoose');

module.exports = (io) => {
    let chatContainerState = { x: 300, y: 100, width: 900, height: 600 };
    const blockedIPs = new Set(); // Lokalna lista blokiranih IP adresa

    // **Šema i model za banovane IP adrese**
    const baniraniSchema = new mongoose.Schema({
        ipAddress: { type: String, required: true, unique: true }
    });

    const Banirani = mongoose.model('Banirani', baniraniSchema);

    io.on('connection', (socket) => {
        console.log('user connected: ' + socket.id);

        socket.emit('updateChatContainer', { ...chatContainerState });

        socket.on('new_guest', () => {
            const greetingMessage = `Dobro došli , osećajte se kao kod kuće, i budite raspoloženi! Sada će vam vaša Konobarica posluziti kaficu ☕, 
                                    a naši DJ-evi će se pobrinuti da vam ispune muzičke želje. Registrovanje , Logovanje , Biranje boje , Muzika i sve ostalo 
                                    sto vam je potrebno mozete naci na tabli koja se otvara klikom na dugme G`;
            io.emit('message', {
                username: '<span class="konobarica">Konobarica</span>',
                color: 'orange',
                message: greetingMessage,
                isSystemMessage: true
            });
        });

        socket.emit('updateChatContainer', { ...chatContainerState });

        socket.on('moveChatContainer', (data) => {
            if (typeof data.x === 'number' && typeof data.y === 'number') {
                chatContainerState.x = data.x;
                chatContainerState.y = data.y;
                io.emit('updateChatContainer', { ...chatContainerState });
            }
        });

        socket.on('resizeChatContainer', (data) => {
            if (typeof data.width === 'number' && typeof data.height === 'number' && data.width > 50 && data.height > 50) {
                chatContainerState.width = data.width;
                chatContainerState.height = data.height;
                io.emit('updateChatContainer', { ...chatContainerState });
            }
        });

        socket.emit('updateChatContainer', { ...chatContainerState });

        // **BANIRANJE IP ADRESE**
        let ipAddress = socket.handshake.headers['x-forwarded-for'] || socket.handshake.address;
        if (ipAddress.includes(',')) {
            ipAddress = ipAddress.split(',')[0].trim(); // Uzimamo prvi IP ako ih ima više
        }

        console.log(`Korisnik povezan: ${ipAddress}`);

        // **Provera da li je IP banovan iz baze**
        Banirani.findOne({ ipAddress })
            .then((isBanned) => {
                if (isBanned) {
                    console.log(`Blokiran korisnik pokušao da se poveže: ${ipAddress}`);
                    socket.emit('banMessage', 'Vaša IP adresa je banovana!');
                    socket.disconnect(); // Prekidamo vezu
                }
            })
            .catch(err => console.error("❌ Greška pri proveri banovane IP adrese:", err));

        // **Banovanje korisnika**
        socket.on('banUser', (ip) => {
            if (ip) {
                Banirani.create({ ipAddress: ip })
                    .then(() => {
                        console.log(`IP adresa ${ip} je banovana!`);
                        io.emit('userBanned', ip); // Obaveštavamo klijente
                    })
                    .catch(err => {
                        if (err.code === 11000) {
                            console.error(`❌ IP ${ip} je već banovan!`);
                        } else {
                            console.error("❌ Greška pri banovanju:", err);
                        }
                    });
            }
        });

        socket.on('disconnect', () => {});
    });
};
