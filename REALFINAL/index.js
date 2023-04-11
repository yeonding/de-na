import GameCanvas from "./gameCanvas.js";

// 메인화면
const startButton = document.getElementById('start-button');
const main = document.getElementById('main')
const dream = document.getElementById("dream")
const show = document.getElementById("show")
const characterSelection = document.getElementById('characterSelection')
const ch1 = document.getElementById('ch1');
const ch2 = document.getElementById('ch2');
const ch3 = document.getElementById('ch3');
const gameStart = document.getElementById('game-start');
gameStart.style.display = 'none';
const album = document.getElementById('album')
const talk = document.getElementById('talk')
const close = document.getElementById('close')
talk.style.display = 'none'
const intro1 = document.getElementById('intro1')
intro1.style.display = 'none';
const intro2 = document.getElementById('intro2')
intro2.style.display = 'none';
const intro3 = document.getElementById('intro3')
intro3.style.display = 'none';
const info = document.getElementById('info')
info.style.display = 'none'
const mouse = document.getElementById('mouse')
const clickmusic = document.getElementById("clickmusic")


startButton.addEventListener('click', function () {
    main.classList.add("hidden");
    clickmusic.play()
    info.style.display = 'block'
})

mouse.addEventListener('click', function () {
  main.classList.add("hidden");
  clickmusic.play()
  info.style.display = 'none'
  characterSelection.style.display = 'block';
  dream.play()
})

album.addEventListener('click', function () {
  clickmusic.play()
  talk.style.display = 'block';
})

close.addEventListener('click', function () {
  talk.style.display = 'none';
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
