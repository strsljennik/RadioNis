// Proveravamo da li korisnik već ima UUID
let userUUID = localStorage.getItem('userUUID');

// Ako nemamo UUID, kreiramo novi i čuvamo ga u localStorage
if (!userUUID) {
    userUUID = generateUUID();
    localStorage.setItem('userUUID', userUUID);
}

// Funkcija za generisanje UUID
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Funkcija za slanje podataka serveru
async function sendGuestData() {
    try {
        const uniqueNumber = Math.floor(1000 + Math.random() * 9000); // Generišemo nasumičan broj
        const nickname = `Gost-${uniqueNumber} se odjavio.`; // Novi format nickname-a

        const response = await fetch('/guests', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nickname, uuid: userUUID }) // Slanje podataka sa novim formatom
        });

        const result = await response.text();  // Umesto response.json()
        console.log('Odgovor servera:', result);
    } catch (error) {
        console.error('Greška pri slanju podataka:', error);
    }
}

// Na primer, poziv funkcije za slanje podataka
sendGuestData();
