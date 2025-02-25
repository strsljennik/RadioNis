// Funkcija za otvaranje modalnog prozora sa smajlovima
document.getElementById('smilesBtn').addEventListener('click', function () {
    const smileModal = document.getElementById('smileModal');
    const smilesBtn = document.getElementById('smilesBtn');

    const buttonRect = smilesBtn.getBoundingClientRect();
    smileModal.style.top = `${buttonRect.bottom + 5}px`; // Pozicionirano ispod dugmeta
    smileModal.style.left = `${buttonRect.left}px`;
    smileModal.style.display = 'flex';
});

// Funkcija za zatvaranje modalnog prozora
function closeSmileModal() {
    document.getElementById('smileModal').style.display = 'none';
}

// Funkcija za dodavanje smajlova/slika u chat
function addSmile(smile) {
    const chatInput = document.getElementById('chatInput');
    chatInput.value += smile;
    closeSmileModal();
}

// Ako modal već ne postoji, dodaj ga u DOM
if (!document.getElementById('smileModal')) {
    document.body.insertAdjacentHTML('beforeend', `
        <div id="smileModal" style="
            display: none; 
            position: fixed; 
            width: 450px; 
            height: auto; 
            background: black; 
            padding: 10px; 
            border: 1px solid white; 
            z-index: 1000; 
            overflow-y: auto; 
            border-radius: 5px;
            color: white;
            flex-wrap: wrap;">
            
            <button onclick="closeSmileModal()" style="
                background: red;
                color: white;
                border: none;
                padding: 5px 10px;
                cursor: pointer;
                float: right;
                font-size: 14px;
                border-radius: 3px;
            ">X</button>
            
            <div id="smileContainer" style="display: flex; flex-wrap: wrap; gap: 8px;"></div>
            
            <hr style="margin: 10px 0; border-color: white;">
            
            <div id="emojiContainer" style="display: flex; flex-wrap: wrap; gap: 8px;"></div>
        </div>
    `);
}

// Funkcija za dodavanje smajlova u modal (samo jednom)
function loadSmiles() {
    const smileContainer = document.getElementById('smileContainer');
    if (smileContainer.children.length > 0) return; // Ako su već dodati, prekini

    const smiles = ["☕", "😀", "😂", "😍", "😎", "😢", "😡", "🤔", "👍", "👎", "😜", "😝", "😻", "🤩", "🥳", "🤗", "🤐", "🤟", "💋", "💕", "💞", "❤️", "💔", "🖤", "💛", "💚", "🌧️", "☀️", "🌷", "🚹", "🚺", "👁️‍🗨️", "👀"];

    smiles.forEach(smile => {
        const span = document.createElement('span');
        span.classList.add('smile');
        span.innerText = smile;
        span.onclick = () => addSmile(smile);
        smileContainer.appendChild(span);
    });
}

// Funkcija za dodavanje slika u modal (samo jednom)
function loadEmojis() {
    const emojiContainer = document.getElementById('emojiContainer');
    if (emojiContainer.children.length > 0) return; // Ako su slike već dodate, prekini funkciju

    const emojiFolder = 'emoji gif/';
    const pngEmojis = ["stik1.png", "stik2.png", "stik3.png", "stik4.png", "stik5.png",
        "stik6.png", "stik7.png", "stik8.png", "stik9.png", "stik10.png"];

    const gifEmojis = ["dance.gif", "dance1.gif", "dance2.gif", "dance3.gif",
        "ily1.gif", "ily2.gif", "man.gif", "mira.gif", "mira1.gif",
        "rg.gif", "srce.gif", "srce2.gif", "srce3.gif", "srce4.gif"];

    [...pngEmojis, ...gifEmojis].forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = `${emojiFolder}${img}`;
        imgElement.classList.add('smile');
        imgElement.onclick = () => addSmile(`<img src='${emojiFolder + img}' alt='emoji'>`);
        emojiContainer.appendChild(imgElement);
    });
}

// Učitaj smajlove i slike kada se stranica učita
document.addEventListener('DOMContentLoaded', () => {
    loadSmiles();
    loadEmojis();
});
