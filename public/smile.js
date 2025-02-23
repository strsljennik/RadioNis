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

// Funkcija za dodavanje smajlova i slika u chat
function addSmile(smile) {
    const chatInput = document.getElementById('chatInput');
    chatInput.value += smile; 
    closeSmileModal();
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

            <!-- GIF slike -->
            <img src="emoji.gif/dance.gif" onclick="addSmile('<img src=&quot;emoji.gif/dance.gif&quot; />')" alt="dance" style="width: 50px; height: 50px; cursor: pointer;"/>
            <img src="emoji.gif/dance1.gif" onclick="addSmile('<img src=&quot;emoji.gif/dance1.gif&quot; />')" alt="dance1" style="width: 50px; height: 50px; cursor: pointer;"/>
            <img src="emoji.gif/dance2.gif" onclick="addSmile('<img src=&quot;emoji.gif/dance2.gif&quot; />')" alt="dance2" style="width: 50px; height: 50px; cursor: pointer;"/>
            <img src="emoji.gif/dance3.gif" onclick="addSmile('<img src=&quot;emoji.gif/dance3.gif&quot; />')" alt="dance3" style="width: 50px; height: 50px; cursor: pointer;"/>
            <img src="emoji.gif/ily1.gif" onclick="addSmile('<img src=&quot;emoji.gif/ily1.gif&quot; />')" alt="ily1" style="width: 50px; height: 50px; cursor: pointer;"/>
            <img src="emoji.gif/ily2.gif" onclick="addSmile('<img src=&quot;emoji.gif/ily2.gif&quot; />')" alt="ily2" style="width: 50px; height: 50px; cursor: pointer;"/>
            <img src="emoji.gif/man.gif" onclick="addSmile('<img src=&quot;emoji.gif/man.gif&quot; />')" alt="man" style="width: 50px; height: 50px; cursor: pointer;"/>
            <img src="emoji.gif/mira.gif" onclick="addSmile('<img src=&quot;emoji.gif/mira.gif&quot; />')" alt="mira" style="width: 50px; height: 50px; cursor: pointer;"/>
            <img src="emoji.gif/mira1.gif" onclick="addSmile('<img src=&quot;emoji.gif/mira1.gif&quot; />')" alt="mira1" style="width: 50px; height: 50px; cursor: pointer;"/>
            <img src="emoji.gif/rg.gif" onclick="addSmile('<img src=&quot;emoji.gif/rg.gif&quot; />')" alt="rg" style="width: 50px; height: 50px; cursor: pointer;"/>
            <img src="emoji.gif/srce.gif" onclick="addSmile('<img src=&quot;emoji.gif/srce.gif&quot; />')" alt="srce" style="width: 50px; height: 50px; cursor: pointer;"/>
           <img src="emoji.gif/srce2.gif" onclick="addSmile('<img src=&quot;emoji.gif/srce2.gif&quot; />')" alt="srce2" style="width: 50px; height: 50px; cursor: pointer;"/>
            <img src="emoji.gif/srce3.gif" onclick="addSmile('<img src=&quot;emoji.gif/srce3.gif&quot; />')" alt="srce3" style="width: 50px; height: 50px; cursor: pointer;"/>
            <img src="emoji.gif/srce4.gif" onclick="addSmile('<img src=&quot;emoji.gif/srce4.gif&quot; />')" alt="srce4" style="width: 50px; height: 50px; cursor: pointer;"/>
        </div>
    </div>
`;

// Umetanje modalnog HTML-a u telo stranice
document.body.insertAdjacentHTML('beforeend', smileModalHTML);
