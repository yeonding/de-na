import GameCanvas from "./gameCanvas.js";

// 메인화면
const startButton = document.getElementById('start-button');
const main = document.getElementById('main')
const dream = document.getElementById("dream")
const show = document.getElementById("show")
const characterSelection = document.getElementById('characterSelection')
const info = document.getElementById('info')
info.style.display = 'none'
const mouse = document.getElementById('mouse')
const back = document.getElementById('back')
const ch1 = document.getElementById('ch1');
const ch2 = document.getElementById('ch2');
const ch3 = document.getElementById('ch3');
const gameStart = document.getElementById('game-start');
gameStart.style.display = 'none';
const album = document.getElementById('album')
const clickmusic = document.getElementById("clickmusic")

// 앨범 부분
const talk = document.getElementById('talk')
const close = document.getElementById('close')
const infomusic = document.getElementById("infomusic")
talk.style.display = 'none'
const intro1 = document.getElementById('intro1')
intro1.style.display = 'none';
const intro2 = document.getElementById('intro2')
intro2.style.display = 'none';
const intro3 = document.getElementById('intro3')
intro3.style.display = 'none';


const people1 = document.getElementById('people1')
const no1 = document.getElementById('no1')
const talk1 = document.getElementById('talk1')
const sogam1 = document.getElementById('sogam1')

const people2 = document.getElementById('people2')
const no2 = document.getElementById('no2')
const talk2 = document.getElementById('talk2')
const sogam2 = document.getElementById('sogam2')

const people3 = document.getElementById('people3')
const no3 = document.getElementById('no3')
const talk3 = document.getElementById('talk3')
const sogam3 = document.getElementById('sogam3')

const people4 = document.getElementById('people4')
const no4 = document.getElementById('no4')
const talk4 = document.getElementById('talk4')
const sogam4 = document.getElementById('sogam4')

const people5 = document.getElementById('people5')
const no5 = document.getElementById('no5')
const talk5 = document.getElementById('talk5')
const sogam5 = document.getElementById('sogam5')


// 함수 실행 부분

startButton.addEventListener('click', function () {
    main.classList.add("hidden");
    clickmusic.play()
    dream.play()
    info.style.display = 'block'
})

mouse.addEventListener('click', function () {
  main.classList.add("hidden");
  info.style.display = 'none'
  clickmusic.play()
  characterSelection.style.display = 'block';
  })

album.addEventListener('click', function () {
  clickmusic.play()
  talk.style.display = 'block';
})

back.addEventListener('click', function () {
  clickmusic.play()
  info.style.display = 'block'
  characterSelection.style.display = 'none';
})

close.addEventListener('click', function () {
  talk.style.display = 'none';
  clickmusic.play()
})

people1.addEventListener('click', function(){
  talk1.classList.add("show");
  no1.classList.add("show")
  sogam1.classList.add("show")

})

no1.addEventListener('click', function(){
  talk1.classList.remove("show");
  no1.classList.remove("show");
  sogam1.classList.remove("show")
})

people2.addEventListener('click', function(){
  talk2.classList.add("show");
  no2.classList.add("show")
  sogam2.classList.add("show")
})

no2.addEventListener('click', function(){
  talk2.classList.remove("show");
  no2.classList.remove("show");
  sogam2.classList.remove("show")
})

people3.addEventListener('click', function(){
  talk3.classList.add("show");
  no3.classList.add("show")
  sogam3.classList.add("show")
})

no3.addEventListener('click', function(){
  talk3.classList.remove("show");
  no3.classList.remove("show");
  sogam3.classList.remove("show")
})

people4.addEventListener('click', function(){
  talk4.classList.add("show");
  no4.classList.add("show")
  sogam4.classList.add("show")
})

no4.addEventListener('click', function(){
  talk4.classList.remove("show");
  no4.classList.remove("show");
  sogam4.classList.remove("show")
})

people5.addEventListener('click', function(){
  talk5.classList.add("show");
  no5.classList.add("show")
  sogam5.classList.add("show")
})

no5.addEventListener('click', function(){
  talk5.classList.remove("show");
  no5.classList.remove("show");
  sogam5.classList.remove("show")
})

let selectedCharacter = null;

ch1.addEventListener('click', function () {
    // 캐릭터1을 선택했을 때
    console.log('캐릭터1을 선택했습니다.');
    gameStart.style.display = 'block';
    selectedCharacter = 1;
    ch1.classList.add("big")
    ch2.classList.remove("big")
    ch3.classList.remove("big")
    intro1.style.display = 'block'
    ch2.style.background = 'none'
    ch3.style.background = 'none'
    intro2.style.display = 'none'
    intro3.style.display = 'none'
    show.play();
});
  
  ch2.addEventListener('click', function () {
    // 캐릭터2을 선택했을 때
    console.log('캐릭터2을 선택했습니다.')
    gameStart.style.display = 'block'
    selectedCharacter = 2
    ch2.classList.add("big")
    ch1.classList.remove("big")
    ch3.classList.remove("big")
    intro2.style.display = 'block'
    ch1.style.background = 'none'
    ch3.style.background = 'none'
    intro1.style.display =  'none'
    intro3.style.display = 'none'
    show.play()
  });
  
  ch3.addEventListener('click', function () {
    // 캐릭터3을 선택했을 때
    console.log('캐릭터3을 선택했습니다.');
    gameStart.style.display = 'block'
    selectedCharacter = 3
    ch3.classList.add("big")
    ch1.classList.remove("big")
    ch2.classList.remove("big")
    intro3.style.display = 'block'
    ch1.style.background = 'none'
    ch2.style.background = 'none'
    intro1.style.display = 'none'
    intro2.style.display = 'none'
    show.play()
  });

// 게임 캔버스 불러오기
gameStart.addEventListener('click', function () {
    console.log('게임을 시작합니다.');
    const gameCanvas = new GameCanvas(selectedCharacter)
    characterSelection.style.display = 'none';
    gameCanvas.obj.style.display = 'block';
    gameCanvas.run();
    dream.pause()
    // gameLoop();
    // update();
    // startTimer();
});
