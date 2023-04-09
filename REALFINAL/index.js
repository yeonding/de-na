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

startButton.addEventListener('click', function () {
    main.classList.add("hidden");
    characterSelection.style.display = 'block';
    dream.play()
})

let selectedCharacter = null;


ch1.addEventListener('click', function () {
    // 캐릭터1을 선택했을 때
    console.log('캐릭터1을 선택했습니다.');
    gameStart.style.display = 'block';
    selectedCharacter = 1;
    ch1.style.background = 'skyblue';
    ch2.style.background = 'none';
    ch3.style.background = 'none';
    show.play();
});
  
  ch2.addEventListener('click', function () {
    // 캐릭터2을 선택했을 때
    console.log('캐릭터2을 선택했습니다.');
    gameStart.style.display = 'block';
    selectedCharacter = 2;
    ch2.style.background = 'skyblue';
    ch1.style.background = 'none';
    ch3.style.background = 'none';
    show.play();
  });
  
  ch3.addEventListener('click', function () {
    // 캐릭터3을 선택했을 때
    console.log('캐릭터3을 선택했습니다.');
    gameStart.style.display = 'block';
    selectedCharacter = 3;
    ch3.style.background = 'skyblue';
    ch1.style.background = 'none';
    ch2.style.background = 'none';
    show.play();
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
