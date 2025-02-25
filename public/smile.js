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

// Funkcija za dodavanje slike kao emotikona u chat
function addImageToChat(imgSrc) {
    const chatInput = document.getElementById('chatInput');
    chatInput.value += ` <img src="${imgSrc}"> `;
    closeSmileModal();
}

// Dodavanje HTML koda za modalni prozor
const smileModalHTML = `
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
        
        <div id="smileContainer" style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span class="smile" onclick="addSmile('☕')">☕</span>
            <span class="smile" onclick="addSmile('😀')">😀</span>
            <span class="smile" onclick="addSmile('😂')">😂</span>
            <span class="smile" onclick="addSmile('😍')">😍</span>
            <span class="smile" onclick="addSmile('😎')">😎</span>
            <span class="smile" onclick="addSmile('😢')">😢</span>
            <span class="smile" onclick="addSmile('😡')">😡</span>
            <span class="smile" onclick="addSmile('🤔')">🤔</span>
            <span class="smile" onclick="addSmile('👍')">👍</span>
            <span class="smile" onclick="addSmile('👎')">👎</span>
            <span class="smile" onclick="addSmile('😜')">😜</span>
            <span class="smile" onclick="addSmile('😝')">😝</span>
            <span class="smile" onclick="addSmile('😻')">😻</span>
            <span class="smile" onclick="addSmile('🤩')">🤩</span>
            <span class="smile" onclick="addSmile('🥳')">🥳</span>
            <span class="smile" onclick="addSmile('🤗')">🤗</span>
            <span class="smile" onclick="addSmile('🤐')">🤐</span>
            <span class="smile" onclick="addSmile('🤟')">🤟</span>
            <span class="smile" onclick="addSmile('💋')">💋</span>
            <span class="smile" onclick="addSmile('💕')">💕</span>
            <span class="smile" onclick="addSmile('💞')">💞</span>
            <span class="smile" onclick="addSmile('❤️')">❤️</span>
            <span class="smile" onclick="addSmile('💔')">💔</span>
            <span class="smile" onclick="addSmile('🖤')">🖤</span>
            <span class="smile" onclick="addSmile('💛')">💛</span>
            <span class="smile" onclick="addSmile('💚')">💚</span>
            <span class="smile" onclick="addSmile('🌧️')">🌧️</span>
            <span class="smile" onclick="addSmile('☀️')">☀️</span>
            <span class="smile" onclick="addSmile('🌷')">🌷</span>
            <span class="smile" onclick="addSmile('🚹')">🚹</span>
            <span class="smile" onclick="addSmile('🚺')">🚺</span>
            <span class="smile" onclick="addSmile('👁️‍🗨️')">👁️‍🗨️</span>
            <span class="smile" onclick="addSmile('👀')">👀</span>
        </div>
        
        <hr style="margin: 10px 0; border-color: white;">

        <div id="emojiContainer" style="display: flex; flex-wrap: wrap; gap: 8px;">
        </div>
    </div>
`;

// Umetanje modalnog HTML-a u telo stranice
document.body.insertAdjacentHTML('beforeend', smileModalHTML);

const emojiContainer = document.getElementById('emojiContainer');
const emojiFolder = 'emoji gif/';

const pngEmojis = [
    "stik1.png", "stik2.png", "stik3.png", "stik4.png", "stik5.png",
    "stik6.png", "stik7.png", "stik8.png", "stik9.png", "stik10.png"
];

pngEmojis.forEach(img => {
    const emojiImg = document.createElement('img');
    emojiImg.src = emojiFolder + img;
    emojiImg.classList.add('smile');
    emojiImg.onclick = () => addSmile(`<img src='${emojiFolder + img}' alt='emoji'>`);
    emojiContainer.appendChild(emojiImg);
});

const imageIds = [
    "dance.gif", "dance1.gif", "dance2.gif", "dance3.gif",
    "ily1.gif", "ily2.gif", "man.gif", "mira.gif", "mira1.gif",
    "rg.gif", "srce.gif", "srce2.gif", "srce3.gif", "srce4.gif"
];

imageIds.forEach(img => {
    const imgElement = document.createElement('img');
    imgElement.src = `${emojiFolder}${img}`;
    imgElement.classList.add('smile');
    imgElement.onclick = () => addSmile(`<img src='${emojiFolder + img}' alt='emoji'>`);
    emojiContainer.appendChild(imgElement);
});
