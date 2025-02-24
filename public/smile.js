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


            <!-- GIF slike -->
           <img src="emoji.gif/dance.gif" onclick="addSmile('<img src=&quot;emoji.gif/dance.gif&quot; />')" alt="dance" style="cursor: pointer;"/>
<img src="emoji.gif/dance1.gif" onclick="addSmile('<img src=&quot;emoji.gif/dance1.gif&quot; />')" alt="dance1" style="cursor: pointer;"/>
<img src="emoji.gif/dance2.gif" onclick="addSmile('<img src=&quot;emoji.gif/dance2.gif&quot; />')" alt="dance2" style="cursor: pointer;"/>
<img src="emoji.gif/dance3.gif" onclick="addSmile('<img src=&quot;emoji.gif/dance3.gif&quot; />')" alt="dance3" style="cursor: pointer;"/>
<img src="emoji.gif/ily1.gif" onclick="addSmile('<img src=&quot;emoji.gif/ily1.gif&quot; />')" alt="ily1" style="cursor: pointer;"/>
<img src="emoji.gif/ily2.gif" onclick="addSmile('<img src=&quot;emoji.gif/ily2.gif&quot; />')" alt="ily2" style="cursor: pointer;"/>
<img src="emoji.gif/man.gif" onclick="addSmile('<img src=&quot;emoji.gif/man.gif&quot; />')" alt="man" style="cursor: pointer;"/>
<img src="emoji.gif/mira.gif" onclick="addSmile('<img src=&quot;emoji.gif/mira.gif&quot; />')" alt="mira" style="cursor: pointer;"/>
<img src="emoji.gif/mira1.gif" onclick="addSmile('<img src=&quot;emoji.gif/mira1.gif&quot; />')" alt="mira1" style="cursor: pointer;"/>
<img src="emoji.gif/rg.gif" onclick="addSmile('<img src=&quot;emoji.gif/rg.gif&quot; />')" alt="rg" style="cursor: pointer;"/>
<img src="emoji.gif/srce.gif" onclick="addSmile('<img src=&quot;emoji.gif/srce.gif&quot; />')" alt="srce" style="cursor: pointer;"/>
<img src="emoji.gif/srce2.gif" onclick="addSmile('<img src=&quot;emoji.gif/srce2.gif&quot; />')" alt="srce2" style="cursor: pointer;"/>
<img src="emoji.gif/srce3.gif" onclick="addSmile('<img src=&quot;emoji.gif/srce3.gif&quot; />')" alt="srce3" style="cursor: pointer;"/>
<img src="emoji.gif/srce4.gif" onclick="addSmile('<img src=&quot;emoji.gif/srce4.gif&quot; />')" alt="srce4" style="cursor: pointer;"/>

  <!-- Dodavanje PNG slika -->
      <img src="emoji.gif/stik1.png" onclick="addSmile('<img src=&quot;emoji.gif/stik1.png&quot; />')" alt="stik1" style="cursor: pointer;"/>
<img src="emoji.gif/stik2.png" onclick="addSmile('<img src=&quot;emoji.gif/stik2.png&quot; />')" alt="stik2" style="cursor: pointer;"/>
<img src="emoji.gif/stik3.png" onclick="addSmile('<img src=&quot;emoji.gif/stik3.png&quot; />')" alt="stik3" style="cursor: pointer;"/>
<img src="emoji.gif/stik4.png" onclick="addSmile('<img src=&quot;emoji.gif/stik4.png&quot; />')" alt="stik4" style="cursor: pointer;"/>
<img src="emoji.gif/stik5.png" onclick="addSmile('<img src=&quot;emoji.gif/stik5.png&quot; />')" alt="stik5" style="cursor: pointer;"/>
<img src="emoji.gif/stik6.png" onclick="addSmile('<img src=&quot;emoji.gif/stik6.png&quot; />')" alt="stik6" style="cursor: pointer;"/>
<img src="emoji.gif/stik7.png" onclick="addSmile('<img src=&quot;emoji.gif/stik7.png&quot; />')" alt="stik7" style="cursor: pointer;"/>
<img src="emoji.gif/stik8.png" onclick="addSmile('<img src=&quot;emoji.gif/stik8.png&quot; />')" alt="stik8" style="cursor: pointer;"/>
<img src="emoji.gif/stik9.png" onclick="addSmile('<img src=&quot;emoji.gif/stik9.png&quot; />')" alt="stik9" style="cursor: pointer;"/>
<img src="emoji.gif/stik10.png" onclick="addSmile('<img src=&quot;emoji.gif/stik10.png&quot; />')" alt="stik10" style="cursor: pointer;"/>


        </div>
    </div>
`;

// Umetanje modalnog HTML-a u telo stranice
document.body.insertAdjacentHTML('beforeend', smileModalHTML);
