const authorizedUsers = new Set(['Radio Galaksija', 'ZI ZU', '*__X__*']);

// Event listener za dugme koje otvara modal
document.getElementById('openModal').addEventListener('click', function () {
    if (authorizedUsers.has(currentUser)) {
        // Ako je korisnik u listi ovlašćenih, otvara modal
        document.getElementById('functionModal').style.display = "block";
    } else {
        // Ako korisnik nije ovlašćen
        alert('Nemate dozvolu da otvorite ovaj panel.');
    }
});

// Zatvaranje modala
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('functionModal').style.display = "none";
});


// Brisanje sadržaja chata
document.getElementById('clearChat').addEventListener('click', function() {
    const chatWindow = document.getElementById('messageArea');
    chatWindow.innerHTML = ""; // Briše sve unutar chata
    console.log("Chat je obrisan.");

    // Emituj događaj serveru za brisanje chata
    socket.emit('clear-chat'); 
});

// Slušanje na 'chat-cleared' događaj
socket.on('chat-cleared', function() {
    console.log('Chat je obrisan sa servera.');
    const chatWindow = document.getElementById('messageArea');
    chatWindow.innerHTML = ""; // Briše sve unutar chata
});
// ZENO PLAYER NA DUGME
document.getElementById('sound').addEventListener('click', function() {
    const iframe = document.getElementById('radioIframe');
    const cover = document.getElementById('playerCover');
    
    // Toggles između prikaza ili skrivanja playera i cover-a
    if (iframe.style.display === 'none' || iframe.style.display === '') {
        iframe.style.display = 'block';  // Prikazi player
        cover.style.display = 'block';   // Prikazi cover
        iframe.src = iframe.src;         // Automatski pokreni zvuk, ako treba
    } else {
        iframe.style.display = 'none';   // Sakrij player
        cover.style.display = 'none';    // Sakrij cover
    }
});
//  REGISTRACIJA I LOGIN TABLA
document.getElementById('NIK').addEventListener('click', function() {
    var container = document.getElementById('authContainer');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
  });
// UUID BAN MODAL
document.getElementById('govna').addEventListener('click', async function () {
    let uuidModal = document.getElementById('uuidModal');
    uuidModal.style.display = (uuidModal.style.display === "block") ? "none" : "block";

    // Prvo šaljemo podatke putem POST rute
    const response = await fetch('/guests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname: 'Gost-7966', uuid: 'aa021f56-b386-4a55-acac-b91777f199ad' }) // Primer podataka
    });

    if (response.ok) {
        // Kada su podaci uspešno poslati, pozivamo GET rutu za tog gosta
        const guestResponse = await fetch('/guests/aa021f56-b386-4a55-acac-b91777f199ad');  // Korišćenje UUID za GET rutu

        if (guestResponse.ok) {
            const guestData = await guestResponse.json();
            const uuidList = document.getElementById('uuidList');
            uuidList.innerHTML = `
                <p><strong>UUID:</strong> ${guestData.uuid}</p>
                <p><strong>Nickname:</strong> ${guestData.nickname}</p>
                <p><strong>IP Adresa:</strong> ${guestData.ipAddress}</p>
                <hr />
            `;
        }
    } else {
        console.log('Greška pri slanju podataka.');
    }
});
