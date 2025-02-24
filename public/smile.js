// Funkcija za otvaranje modalnog prozora sa smajlovima
document.getElementById('smilesBtn').addEventListener('click', function() {
    const smileModal = document.getElementById('smileModal');
    const smilesBtn = document.getElementById('smilesBtn');

    const buttonRect = smilesBtn.getBoundingClientRect();
    smileModal.style.top = `${buttonRect.bottom + 5}px`; // Pozicionirano ispod dugmeta
    smileModal.style.left = `${buttonRect.left}px`;
    smileModal.style.display = 'flex';

    // Učitaj sadržaj iz localStorage kada se modal otvori
    loadModalContent();
});

// Funkcija za zatvaranje modalnog prozora
function closeSmileModal() {
    document.getElementById('smileModal').style.display = 'none';
}

// Funkcija za dodavanje smajlova i slika u chat
function addSmile(smile) {
    const chatInput = document.getElementById('chatInput');
    chatInput.value += smile; 
    closeSmileModal();

    // Spremi sadržaj modala u localStorage
    saveModalContent();
}

// Funkcija za spremanje sadržaja modala u localStorage
function saveModalContent() {
    const smileContainer = document.getElementById('smileContainer');
    const modalContent = {
        html: smileContainer.innerHTML // Spremamo HTML sadržaj celog modala
    };

    // Spremi sadržaj u localStorage
    localStorage.setItem('smileModalContent', JSON.stringify(modalContent));
}

// Funkcija za učitavanje sadržaja iz localStorage
function loadModalContent() {
    const storedContent = localStorage.getItem('smileModalContent');

    if (storedContent) {
        const modalContent = JSON.parse(storedContent);
        
        // Učitavanje sadržaja u modal
        const smileContainer = document.getElementById('smileContainer');
        smileContainer.innerHTML = modalContent.html;
    }
}

// Dodavanje HTML koda za modalni prozor sa smajlovima i GIF slikama
const smileModalHTML = `
    <div id="smileModal" style="
        display: none; 
        position: fixed; 
        width: 300px; 
        height: 300px; 
        background: black; 
        padding: 10px; 
        border: 1px solid white; 
        z-index: 1000; 
        overflow-y: scroll; 
        border-radius: 5px;
        color: white;">
        <div id="smileContainer" style="display: flex; flex-wrap: wrap; gap: 8px;">
            <!-- Smajlići -->
            <span class="smile" onclick="addSmile('☕')" style="font-size: 32px;">☕</span>
            <span class="smile" onclick="addSmile('😀')" style="font-size: 32px;">😀</span>
            <span class="smile" onclick="addSmile('😂')" style="font-size: 32px;">😂</span>
            <span class="smile" onclick="addSmile('😍')" style="font-size: 32px;">😍</span>
            <span class="smile" onclick="addSmile('😎')" style="font-size: 32px;">😎</span>
            <span class="smile" onclick="addSmile('😢')" style="font-size: 32px;">😢</span>
            <span class="smile" onclick="addSmile('😡')" style="font-size: 32px;">😡</span>
            <span class="smile" onclick="addSmile('🤔')" style="font-size: 32px;">🤔</span>
            <span class="smile" onclick="addSmile('👍')" style="font-size: 32px;">👍</span>
            <span class="smile" onclick="addSmile('👎')" style="font-size: 32px;">👎</span>
            <span class="smile" onclick="addSmile('😜')" style="font-size: 32px;">😜</span>
            <span class="smile" onclick="addSmile('😝')" style="font-size: 32px;">😝</span>
            <span class="smile" onclick="addSmile('😻')" style="font-size: 32px;">😻</span>
            <span class="smile" onclick="addSmile('🤩')" style="font-size: 32px;">🤩</span>
            <span class="smile" onclick="addSmile('🥳')" style="font-size: 32px;">🥳</span>
            <span class="smile" onclick="addSmile('🤗')" style="font-size: 32px;">🤗</span>
            <span class="smile" onclick="addSmile('🤐')" style="font-size: 32px;">🤐</span>
            <span class="smile" onclick="addSmile('🤟')" style="font-size: 32px;">🤟</span>
            <span class="smile" onclick="addSmile('💋')" style="font-size: 32px;">💋</span>
            <span class="smile" onclick="addSmile('💕')" style="font-size: 32px;">💕</span>
            <span class="smile" onclick="addSmile('💞')" style="font-size: 32px;">💞</span>
            <span class="smile" onclick="addSmile('❤️')" style="font-size: 32px;">❤️</span>
            <span class="smile" onclick="addSmile('💔')" style="font-size: 32px;">💔</span>
            <span class="smile" onclick="addSmile('🖤')" style="font-size: 32px;">🖤</span>
            <span class="smile" onclick="addSmile('💛')" style="font-size: 32px;">💛</span>
            <span class="smile" onclick="addSmile('💚')" style="font-size: 32px;">💚</span>
            <span class="smile" onclick="addSmile('🌧️')" style="font-size: 32px;">🌧️</span>
            <span class="smile" onclick="addSmile('☀️')" style="font-size: 32px;">☀️</span>
            <span class="smile" onclick="addSmile('🌷')" style="font-size: 32px;">🌷</span>
            <span class="smile" onclick="addSmile('🚹')" style="font-size: 32px;">🚹</span>
            <span class="smile" onclick="addSmile('🚺')" style="font-size: 32px;">🚺</span>
            <span class="smile" onclick="addSmile('👁️‍🗨️')" style="font-size: 32px;">👁️‍🗨️</span>
            <span class="smile" onclick="addSmile('👀')" style="font-size: 32px;">👀</span>
     
        </div>
    </div>
`;

const imageList = [
    "dance.gif", "dance1.gif", "dance2.gif", "dance3.gif",
    "ily1.gif", "ily2.gif", "man.gif", "mira.gif", "mira1.gif",
    "rg.gif", "srce.gif", "srce2.gif", "srce3.gif", "srce4.gif",
    "stik1.png", "stik2.png", "stik3.png", "stik4.png", "stik5.png",
    "stik6.png", "stik7.png", "stik8.png", "stik9.png", "stik10.png"
];

// Funkcija koja dodaje slike u modal
function loadImages() {
    const smileContainer = document.getElementById('smileContainer');

    imageList.forEach(image => {
        let imgElement = document.createElement('img');
        imgElement.src = `emoji.gif/${image}`;
        imgElement.alt = image.split('.')[0];
        imgElement.style.cursor = "pointer";
        imgElement.onclick = function() {
            addSmile(`<img src="emoji.gif/${image}" />`);
        };
        smileContainer.appendChild(imgElement);
    });
}
document.addEventListener('DOMContentLoaded', loadImages);

// Umetanje modalnog HTML-a u telo stranice
document.body.insertAdjacentHTML('beforeend', smileModalHTML);
