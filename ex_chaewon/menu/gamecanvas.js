import HealthBar from "../item/healthbar.js";
import MusicSound from "../item/musicsound.js";
import Player from "../class/player.js";
import Monster from "../class/monster.js";
import Background from "../class/background.js";

/**@type {HTMLCanvasElement} */

// 캔버스 설정
const canvas = document.getElementById('game1');
const ctx = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;

// 사운드 객체 생성
const musicsound = new MusicSound();

// html: 캐릭터 선택(게임 시작 시, 캐릭터 선택하는 화면에서 나오는 캐릭터 선택 이미지)
const ch1 = document.getElementById('ch1');
const ch2 = document.getElementById('ch2');
const ch3 = document.getElementById('ch3');

ch1.addEventListener('click', function () {
  // 캐릭터1을 선택했을 때
  console.log('캐릭터1을 선택했습니다.');
  selectedCharacter = ch1;
  startButton.style.display = 'block';
  ch1.style.background = 'skyblue';
  ch2.style.background = 'none';
  ch3.style.background = 'none';
  musicsound.show.play();
});

ch2.addEventListener('click', function () {
  // 캐릭터2을 선택했을 때
  console.log('캐릭터2을 선택했습니다.');
  selectedCharacter = ch2;
  startButton.style.display = 'block';
  ch2.style.background = 'skyblue';
  ch1.style.background = 'none';
  ch3.style.background = 'none';
  musicsound.show.play();
});

ch3.addEventListener('click', function () {
  // 캐릭터3을 선택했을 때
  console.log('캐릭터3을 선택했습니다.');
  selectedCharacter = ch3;
  startButton.style.display = 'block';
  ch3.style.background = 'skyblue';
  ch1.style.background = 'none';
  ch2.style.background = 'none';
  musicsound.show.play();
});

let selectedCharacter = null;
let characterDirection = "stop"; // 캐릭터의 초기 방향은 멈춤

// 버튼 모음
const startButton = document.getElementById('start-button');
startButton.style.display = 'none'; // 시작 버튼은 처음에 보이지 않음

const end = document.getElementById('endScreenDefeat');
end.style.display = 'none';

const victory = document.getElementById('victory');
victory.style.display = 'none';

const chance = document.getElementById('chance');
chance.style.display = 'none';

const restartButton = document.getElementById('restart-button');

// 스테이지 불러오기
const background = new Background();
const citystage = new Image();
citystage.src = '../images/background/citytile1.png';

citystage.onload = () => {
  musicsound.bgmusic.play();
  ctx.drawImage(citystage, 0, 0);
}

function draw() {
  background.draw(player, ctx, canvas);
  player.draw(selectedCharacter, characterDirection, ctx, canvas);
}

const healthBar = new HealthBar();
const player = new Player(selectedCharacter, canvas);
let monsters = [];
const monster = new Monster(player);

// 방향키 조절
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 37) { // 왼쪽 방향키를 눌렀을 때
    characterDirection = "left";
  } else if (event.keyCode === 39) { // 오른쪽 방향키를 눌렀을 때
    characterDirection = "right";
  }
  else if (event.keyCode === 38) { // 위 방향키를 눌렀을 때
    characterDirection = "up";
  }
  else if (event.keyCode === 40) { // 아래 방향키를 눌렀을 때
    characterDirection = "down";
  }
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 37 || event.keyCode === 39 || event.keyCode === 38 || event.keyCode === 40) { // 왼쪽 또는 오른쪽 방향키를 떼었을 때
    characterDirection = "stop";
  }
});

// 게임 시작
const characterSeletion = document.getElementById('characterSelection');
let remainingTime = 180000;

// 타이머
let timerAnimation = null;
function startTimer() {
  const startTime = Date.now();

  function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    remainingTime = 180000 - elapsedTime;

    const minuteString = Math.floor(remainingTime / 60000).toString().padStart(2, '0');
    const secondString = Math.floor(remainingTime % 60000 / 1000).toString().padStart(2, '0');
    const timerString = `${minuteString}:${secondString}`;

    ctx.font = '48px sans-serif';
    ctx.fillStyle = 'white';

    //timer위치 여기서 지정 마지막 두 인자가 타이머가 시작하는 x, y 위치 
    ctx.fillText(timerString, 900, 50);

    if (elapsedTime < 180000) {
      timerAnimation = requestAnimationFrame(updateTimer);
    }
  }

  updateTimer();
}

function startGame() {
  musicsound.music.play();
  musicsound.bgmusic.pause();
  //캐릭터 선택 화면 숨기기
  characterSeletion.classList.add("hidden");
}

let chanceStep = 1;

const showChance = () => {
  if (chanceStep != 1)
    return;
  chance.style.display = "block";
}

const noButton2 = document.getElementById("no-butoon2");
noButton2.style.display = "none";
let noStep = 1;

const appearButton = () => {
  if (noStep != 1)
    return;
  noButton2.style.display = "none";
}

const video = document.getElementById('video');
video.style.display = 'none';

const comment = document.getElementById('video-comment');

function updateHP() {
  if (player.health <= 50) {
    // chance.style.display = "block";
    // gameLoop.pause();
    showChance();

    const yesButton = document.getElementById("yes-butoon");
    yesButton.addEventListener('click', () => {
      chanceStep = 2;
      chance.style.display = "none";
      video.style.display = "block";
    });

    const noButton = document.getElementById("no-butoon");
    noButton.addEventListener('click', () => {
      chanceStep = 2;
      chance.style.display = "none";
    });

    appearButton();
    // 8초 후에 실행되는 함수
    function showButton() {
      noStep = 2;
      noButton2.style.display = "block";
      noButton2.addEventListener('click', () => {
        chance.style.display = "none";
        video.style.display = "none";
        player.health = 70;
      });
      comment.style.display = "none";
    }
    setTimeout(showButton, 8000);
  }
}

// setInterval(monster.move(canvas, player), 100);
// setInterval(player.autoAttack(monsters, musicsound), 1000); // 3초마다 autoAttack() 함수 실행

startButton.addEventListener('click', function () {
  // 게임 시작 버튼을 눌렀을 때
  startGame();
  console.log('게임을 시작합니다.');
  // 게임 시작에 필요한 초기화 작업 수행

    // setInterval(monster.create(healthBar, new Monster(player)), 10000);
    // 게임 루프 실행
    gameLoop();
    // update();
    startTimer();
  });
  
  setInterval(monster.move(canvas, player, monsters), 100);
  setInterval(player.autoAttack(monster, musicsound), 1000);
// function update() {
//   monster.move(canvas, player);
//   player.autoAttack(monster, musicsound);
// }

//gameLoop
function gameLoop() {
  draw(); // 화면에 보여 주기
  // monsters.push(new Monster(player));
  monster.create(healthBar, new Monster(player));
  monster.draw(player, monster, ctx);
  player.drawAttack(selectedCharacter, ctx);
  player.collisionMonster(monster, healthBar);
  updateHP();

  healthBar.draw(ctx, player.position.x, player.position.y, selectedCharacter);

  // 다음 프레임에 대한 처리를 위해 루프 재귀 호출
  if (player.health <= 0) {
    cancelAnimationFrame(timerAnimation);

    musicsound.music.pause();
    musicsound.deathmusic.play();
    musicsound.hitmusic.volume = 0;

    end.style.display = 'block';
    restartButton.addEventListener('click', function () {
      document.location.reload();
    });
  } else if (remainingTime <= 0) {
    cancelAnimationFrame(timerAnimation);
    victory.style.display = 'block';
    musicsound.music.pause();
    musicsound.winmusic.play();
    musicsound.hitmusic.volume = 0;

  } else {
    requestAnimationFrame(gameLoop);
  }
}