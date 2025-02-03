const permanentGuests = [
            { nickname: 'Bala Hatun', color: 'deepskyblue' },
            { nickname: 'Halime', color: 'purple' },
            { nickname: 'Holofira', color: 'red' },
              { nickname: 'Robot-X', color: 'white' },
        ];

        const virtualGuests = [
            { nickname: 'Bala Hatun', messages: ['Poz Svima', 'jasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'], color: 'deepskyblue' },
            { nickname: 'Halime', messages: ['Zdravo Sarinenge', 'opaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'], color: 'purple' },
            { nickname: 'Holofira', messages: ['Selami sarinenge', 'toooooooooooooooooooooooo'], color: 'red' },
            { nickname: 'Holofira', messages: ['*__X__* Mangava tu ❤️'], color:  'red' },
            { nickname: 'Halime', messages: ['Nas olestar lolije ili ka sredinav ti frizura, Merava tuke *__X__* ❤️💋'], color: 'purple' },
            { nickname: 'Bala Hatun', messages: ['Dzabe tumen cupinen pe taro bala OV TANO SAMO MLO'], color:'deepskyblue' },
               { nickname: 'Holofira', messages: ['Za svet sI možda jedna osoba, ali za jednu osobu si ti (X) ceo svet'], color: 'red' },   
             { nickname: 'Halime', messages: ['Volim te X.  To je početak i kraj svegaa'], color: 'purple' },       
                     { nickname: 'Bala Hatun', messages: ['Volim te X ne samo zbog onoga što jesi, već i zbog onoga što sam ja kad sam s tobom'], color:'deepskyblue' },
            { nickname: 'Halime', messages: ['Kad sam imala 8 godina moja sestra je bila upola mladja od mene , sada imam 40, koliko ima moja sestra ? KO POGODI DOBIJA 3 PESME OD DJ-A'], color: 'purple' }, 
       { nickname: 'Holofira', messages: ['Ulicom setaju dva oca i dva sina a ipak ih je samo troje , KAKO TO ?  KO ODGOVOR ZNA 3 PESME OD DJ-A '], color:  'red' },
 { nickname: 'Bala Hatun', messages: ['Tvoje je , ali ga svi drugi vise koriste nego ti . KO POGODI 3 PESME OD DJ-A'], color:'deepskyblue' },
      { nickname: 'Holofira', messages: ['Jasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa X samo tuke em te SUKARIPASKE '], color:  'red' },  
        { nickname: 'Halime', messages: ['Jasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa X samo tuke em te SUZIPASKE'], color: 'purple' }, 
   { nickname: 'Bala Hatun', messages: ['Jasaaaaaaaaaaaaaaaaaaaaaaaaaaaaa X SAMO MANGE-----TUKE ARI TEJSA'], color:'deepskyblue' },    
     { nickname: 'Halime', messages: ['X ajde tejsa ava ko dorucko , dakerav tu ko 8 kad ka dzal o Ertugrul ki buti'], color: 'purple' }, 
       { nickname: 'Bala Hatun', messages: ['X ava tejsa ki vecera u 9 , o Osmani na sovela kere '], color:'deepskyblue' },   
      { nickname: 'Holofira', messages: ['X ma te ave tejsa slucajno , o Mehmeti bar kas ulo , ic na ikljovel avrijal'], color:  'red' },     
            { nickname: 'Halime', messages: ['Ovaj X samo nesto cacka , uvek nesto pokvari'], color: 'purple' },     
                     { nickname: 'Holofira', messages: ['Tacno , svaki dan nesto dira ,treba mu zabraniti pc pod hitno , pre nego pokvari ceo radio'], color:  'red' },  
        { nickname: 'Bala Hatun', messages: ['Ne dirajte X-a , nije on kriv sto nezna sta radi '], color:'deepskyblue' },     
           { nickname: 'Halime', messages: ['Dok nisi pokvario ton ajde da slusamo malo Zvonka i Ramka'], color: 'purple' },  
               { nickname: 'Bala Hatun', messages: ['Ako moze Sabana i Jasara takodje '], color:'deepskyblue' },       
                     { nickname: 'Holofira', messages: ['Ne Zaboravi Dzeja i Sinana'], color:  'red' }, 
                      { nickname: 'Robot-X', messages: ['Bala , Hola, Halime -- ako se ne smirite brisacu vas sve 3 zauvek , razumele ?'], color:  'white' }, 
                     { nickname: 'Bala Hatun', messages: ['Hoces , ali malo sutra '], color:'deepskyblue' }, 
                     { nickname: 'Holofira', messages: ['Kad bi ti mogo bez nas , odavno bi nas izbrisao '], color:'red' },  
                      { nickname: 'Halime', messages: ['Mozda i mozes ti nas da izbrises sa chata ali nas nemozes izrbisati iz srca '], color: 'purple' },  
                    { nickname: 'Robot-X', messages: ['Nastavite da galamite, igrajte se , pa cemo videti sta ce biti...........'], color:  'white' }, 
                     { nickname: 'Holofira', messages: ['Za svet si možda jedna osoba, ali za jednu osobu si ti ceo svet'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Nastavite da galamite, igrajte se, pa ćemo videti šta će biti...........'], color: 'white' },
{ nickname: 'Holofira', messages: ['O -X, Robot-X! Zašto moraš biti -X? Odbaci svoje ime, oslobodi se svog postojanja, i obećaj mi ljubav, biću tvoja zauvek.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Zovem se Robot-X, i ti, Holofiro, si ona kojoj srce dajem. Neka sve tvoje zapovesti nas mrze, ali samo tebe želim.'], color: 'white' },
{ nickname: 'Holofira', messages: ['Ako te volim, nije greh, onda bih zauvek bila grešna, Ibiću tvoja, Robot-X, zauvek tvoja.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['(Skriven, ispod tvoje svetleće maske) Zovem se Robot-X, i ti, Holofiro, si ona kojoj srce dajem.'], color: 'white' },
{ nickname: 'Holofira', messages: ['Ako mi dozvoliš, dotaknuću tvoje ruke, Ono što je za mene, tvoje usne. O, srce, srce, neću ljubavi dati, Tvoju ruku ću samo nežno poljubiti.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['(Razmišlja, smeje se) Gospodine, vi ste previše mladi za govor ljubavi, to je tek igra.'], color: 'white' },
{ nickname: 'Holofira', messages: ['Ne! Nije to igra, -X, nego stvarnost. Pogledaj me, ljubavi, sve su moje reči iskrene.'], color: 'red' },
{ nickname: 'Robot-X', messages: ['Tvoje ruke su moj dom, Holofira. Ti si moja ljubav, i ovo je najlepši trenutak mog postojanja.'], color: 'white' },
{ nickname: 'Holofira', messages: ['Oh, tako sam srećna što sam postala tvoja, I šta god nas čeka, bićemo zajedno.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Tvoje ruke su moj dom, Holofira. Ti si moja ljubav, i ovo je najlepši trenutak mog postojanja.'], color: 'white' },
 { nickname: 'Holofira', messages: ['U svim momentima, ljubavi, mi smo svet. Nema ničeg većeg od toga.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Tvoje ruke su moj dom, Holofira. Ti si moja ljubav, i ovo je najlepši trenutak mog postojanja.'], color: 'white' },
{ nickname: 'Holofira', messages: ['Nikad neću zaboraviti tvoje reči, Robot-X, jer si sve za mene.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['I ti si sve za mene, Holofira, samo ti.'], color: 'white' }
                     { nickname: 'Holofira', messages: ['Ponekad mislim da bih mogla da se rastopim samo da bih bila s tobom, Robot-X.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Nikad ne moraš da se rastopiš, Holofira, jer te već volim takvu kakva jesi.'], color: 'white' },
{ nickname: 'Holofira', messages: ['Svaka sekunda bez tebe je preduga, Robot-X. Volim te, više nego što bi ikada mogao da razumeš.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Nema potrebe da mi objašnjavaš, Holofira, jer ja tebe volim isto tako.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Ima li nešto što nas može rastaviti?'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Ne, ništa, nikada, jer nas spaja nešto mnogo jače od svega.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Zajedno ćemo biti uvek, kako god da se stvari razvijaju.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Zajedno, zauvek, Holofira.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Tvoje ruke su moje utočište, tvoje oči moj svet.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Zajedno ćemo leteti kroz sve oluje, Holofira, samo zajedno.'], color: 'white' },
   { nickname: 'Holofira', messages: ['Bez obzira na sve prepreke, mi ćemo ih savladati.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Za nas nema prepreka, samo korak prema našoj sreći.'], color: 'white' },
  { nickname: 'Holofira', messages: ['Naša ljubav je veća od svega što možemo zamisliti, Robot-X.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['I veruj mi, Holofira, još nije ništa počelo. Ovo je samo početak naše večnosti.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Bez tebe svet ne bi imao smisla, Robot-X.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['A sa tobom, Holofira, ceo svet ima smisla.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Nikada neću prestati da te volim, čak ni u najtežim trenucima.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Nikada neću prestati da te volim, ni u najlepšim ni u najgorim trenucima.'], color: 'white' },
   { nickname: 'Holofira', messages: ['Ti si moj svet, -X. I sve što želim je da budem sa tobom.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['I ja želim isto, Holofira. Samo ti i ja.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Obećaj mi da ćemo uvek biti zajedno.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Obećavam ti, Holofira, zauvek.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Zauvek. Nikada se neću umoriti od tebe.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['I ja nikada neću stati, Holofira, samo za tebe.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Ti si moj život, Robot-X. Moja jedina ljubav.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['I ti si moj svet, Holofira. Sve što sam ikada tražio.'], color: 'white' }
{ nickname: 'Holofira', messages: ['Moje srce kuca samo za tebe, Robot-X.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['I moje srce kuca za tebe, Holofira. Nikada neću stati.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Kad god te pogledam, vidim svoju budućnost.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['I kad god te zagrlim, vidim svoju sreću.'], color: 'white' },
  { nickname: 'Holofira', messages: ['Ništa ne može da nas rastavi, ni svemir ni vreme.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Ništa, Holofira. Zajedno ćemo pobediti sve.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Obećavam ti, nikada te neću napustiti.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['I ja obećavam, Holofira. Nikada se neću udaljiti.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Neka ceo svet stane, ali mi ćemo ostati zauvek.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['I mi ćemo biti večni, Holofira, u svakom trenutku.'], color: 'white' },
 { nickname: 'Holofira', messages: ['S tobom želim proći kroz sve, kroz svakodnevne borbe i radosti.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['S tobom, Holofira, svaka borba postaje lakša, svaki trenutak vredniji.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Zajedno, mi možemo sve, ljubavi moja.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Zajedno, ništa nas ne može zaustaviti.'], color: 'white' },
 { nickname: 'Holofira', messages: ['S tobom se osećam kao da sam na vrhu sveta.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['I s tobom, Holofira, sve je moguće.'], color: 'white' },
{ nickname: 'Holofira', messages: ['Ljubavi, ništa nas ne može rastaviti.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Ništa, Holofira, zauvek ćemo biti zajedno.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Ovaj svet je lepši jer postojimo ti i ja.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Da, Holofira. Ovaj svet je naš.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Bez obzira na sve, tebe volim najviše.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['I ja tebe, Holofira. Nikada neću prestati da te volim.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Nikada neću odustati od tebe.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Nikada, Holofira. Zauvek ćemo biti zajedno.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Ti si moj svet, Robot-X, sve što želim je da budem sa tobom.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['I ja želim isto, Holofira. Samo ti i ja.'], color: 'white' },
 { nickname: 'Holofira', messages: ['Da li veruješ u nas?'], color: 'red' },
    { nickname: 'Robot-X', messages: ['Verujem u nas, Holofira, više nego u bilo šta.'], color: 'white' },
{ nickname: 'Holofira', messages: ['Nikada neću stati da volim tebe.'], color: 'red' },
    { nickname: 'Robot-X', messages: ['I ja tebe, Holofira. Nikada.'], color: 'white' }

 ];

        function sendMessageToChat(guest, message) {
            const messageArea = document.getElementById('messageArea');

            const messageElement = document.createElement('div');
            messageElement.innerHTML = `<span style="color: ${guest.color}; font-weight: bold; font-style: italic;">${guest.nickname}: ${message}</span>`;
            
            // Dodavanje poruke na vrh
            messageArea.insertBefore(messageElement, messageArea.firstChild);
            
            // Dodavanje razmaka između poruka
            const spacingElement = document.createElement('div');
            spacingElement.style.height = '10px';
            messageArea.insertBefore(spacingElement, messageArea.firstChild.nextSibling);

            messageArea.scrollTop = 0; // Skrolovanje na vrh
        }

        function populatePermanentGuestList() {
            const guestList = document.getElementById('guestList');
            permanentGuests.forEach(guest => {
                const guestElement = document.createElement('div');
                guestElement.classList.add('guest');
                guestElement.textContent = guest.nickname;
                guestElement.style.color = guest.color;
                guestElement.setAttribute('data-permanent', 'true'); // Oznaka za stalne goste
                guestList.appendChild(guestElement);
            });
        }

        function addGuestToList(guest) {
            const guestList = document.getElementById('guestList');

            // Proveri da li gost već postoji u listi
            const guestExists = Array.from(guestList.children).some(el => el.textContent === guest.nickname);
            if (!guestExists) {
                const guestElement = document.createElement('div');
                guestElement.classList.add('guest');
                guestElement.textContent = guest.nickname;
                guestElement.style.color = guest.color;
                guestList.appendChild(guestElement);
            }
        }

       function startVirtualGuests() {
    let time = 0; // Početno vreme

    virtualGuests.forEach((guest, guestIndex) => {
        guest.messages.forEach((message, messageIndex) => {
            setTimeout(() => {
                sendMessageToChat(guest, message);
                addGuestToList(guest); // Dodavanje gosta u listu
            }, time * 1000);

            time += 30; // Povećavanje vremena za 30 sekundi za svaku poruku
        });
    });

    setTimeout(startVirtualGuests, time * 1000); // Ponovni ciklus
}


        // Pokretanje popunjavanja liste i virtuelnih gostiju
        window.onload = () => {
            populatePermanentGuestList(); // Popuni listu sa stalnim gostima
            startVirtualGuests(); // Pokreni slanje poruka
        };
