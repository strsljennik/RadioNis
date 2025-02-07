// Funkcija za otvaranje modalnog prozora sa smajlovima
document.getElementById('smilesBtn').addEventListener('click', function() {
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

// Funkcija za dodavanje smajlova u chat
function addSmile(smile) {
    const chatInput = document.getElementById('chatInput');
    chatInput.value += smile; 
    closeSmileModal();
}

// Funkcija za dodavanje GIF-a u input (kao <img>)
function addGif(gifUrl) {
    const chatInput = document.getElementById('chatInput');
    chatInput.value += ` <img src="${gifUrl}" class="gif-smiley"> `;  
    closeSmileModal();
}

// Dodavanje HTML koda za modalni prozor sa smajlovima
const smileModalHTML = `
    <div id="smileModal" style="
        display: none; 
        position: fixed; 
        width: 400px; 
        height: 400px; 
        background: black; 
        padding: 10px; 
        border: 1px solid white; 
        z-index: 1000; 
        overflow-y: scroll; 
        border-radius: 5px;
        color: white;">
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
 <img class="gif-smiley" src="https://i.imgur.com/ZhuLqkf.gif" onclick="addGif('https://i.imgur.com/ZhuLqkf.gif')">
        <img class="gif-smiley" src="https://i.imgur.com/uQoHbdb.gif" onclick="addGif('https://i.imgur.com/uQoHbdb.gif')">
        <img class="gif-smiley" src="https://i.imgur.com/oLjyp8h.gif" onclick="addGif('https://i.imgur.com/oLjyp8h.gif')">
         <img class="gif-smiley" src="https://i.imgur.com/AUbSfW1.gif" onclick="addGif('https://i.imgur.com/AUbSfW1.gif')">
        <img class="gif-smiley" src="https://i.imgur.com/iZIrsRK.gif" onclick="addGif('https://i.imgur.com/iZIrsRK.gif')">
        <img class="gif-smiley" src="https://i.imgur.com/CFmqDlM.gif" onclick="addGif('https://i.imgur.com/CFmqDlM.gif')">
        <img class="gif-smiley" src="https://i.imgur.com/xAkycEI.gif" onclick="addGif('https://i.imgur.com/xAkycEI.gif')">
        <img class="gif-smiley" src="https://i.imgur.com/1VvkGxd.gif" onclick="addGif('https://i.imgur.com/1VvkGxd.gif')">
<img class="gif-smiley" src="https://i.imgur.com/6Atxx5u.gif" onclick="addGif('https://i.imgur.com/6Atxx5u.gif')">
<img class="gif-smiley" src="https://i.imgur.com/G1Lb1nt.gif" onclick="addGif('https://i.imgur.com/G1Lb1nt.gif')">
<img class="gif-smiley" src="https://i.imgur.com/42DOYcY.gif" onclick="addGif('https://i.imgur.com/42DOYcY.gif')">

              `;

// Umetanje modalnog HTML-a u telo stranice
document.body.insertAdjacentHTML('beforeend', smileModalHTML);
