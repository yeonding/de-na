import HealthBar from "../item/healthbar.js";
import MusicSound from "../item/musicsound.js";
import Player from "../class/player.js";
import Monster from "../class/monster.js";

/**@type {HTMLCanvasElement} */

export default class GameCanvas {
  canvas;
  ctx;
  width;
  height;
  ch1;
  ch2;
  ch3;
  startButton;
  end;
  victory;
  chance;
  restartButton;
  selectedCharacter;
  player;
  monster;
  monsters;
  monsterImage;
  musicsound;
  characterSeletion;

  constructor() {
    this.canvas = document.getElementById('game1');
    this.ctx = canvas.getContext('2d');
    this.width = 1024;
    this.height = 576;
    // 캐릭터 선택
    this.ch1 = document.getElementById('ch1');
    this.ch2 = document.getElementById('ch2');
    this.ch3 = document.getElementById('ch3');

    //버튼, 승리조건, 재시작, 캐릭터 선택 모음
    this.startButton = document.getElementById('start-button');
    this.startButton.style.display = 'none'; // 시작 버튼은 처음에 보이지 않음

    this.end = document.getElementById('endScreenDefeat');
    this.end.style.display = 'none';

    this.victory = document.getElementById('victory');
    this.victory.style.display = 'none';

    this.chance = document.getElementById('chance');
    this.chance.style.display = 'none';

    this.restartButton = document.getElementById('restart-button');

    this.selectedCharacter = null;

    // 플레이어
    this.player = new Player();

    // 몬스터
    this.monsters = [];
    this.moster = new Monster(map, player);
    this.monsterImage = null;

    // 사운드
    this.musicsound = new MusicSound();

    // 게임시작
    this.characterSeletion = document.getElementById('characterSelection');


    
    
  }
}

// const canvas = document.getElementById('game1');
// const ctx = canvas.getContext('2d');

//캔버스 크기
// canvas.width = 1024;
// canvas.height = 576;

//캐릭터 선택
// const ch1 = document.getElementById('ch1');
// const ch2 = document.getElementById('ch2');
// const ch3 = document.getElementById('ch3');
// const ch4 = document.getElementById('ch4');
// const ch5 = document.getElementById('ch5');

// const startButton = document.getElementById('start-button');
// startButton.style.display = 'none'; // 시작 버튼은 처음에 보이지 않음

// const end = document.getElementById('endScreenDefeat');
// end.style.display = 'none';

// const victory = document.getElementById('victory');
// victory.style.display = 'none';

// const chance = document.getElementById('chance');
// chance.style.display = 'none';

// const restartButton = document.getElementById('restart-button');

// let selectedCharacter = null;

const ch1Front = document.getElementById("ch1Front")
const ch1Back = document.getElementById("ch1Back")
const ch1Left = document.getElementById("ch1Left")
const ch1Right = document.getElementById("ch1Right")
const ch1Stop = document.getElementById("ch1Stop")

const ch2Front = document.getElementById("ch2Front")
const ch2Back = document.getElementById("ch2Back")
const ch2Left = document.getElementById("ch2Left")
const ch2Right = document.getElementById("ch2Right")
const ch2Stop = document.getElementById("ch2Stop")

const ch3Front = document.getElementById("ch3Front")
const ch3Back = document.getElementById("ch3Back")
const ch3Left = document.getElementById("ch3Left")
const ch3Right = document.getElementById("ch3Right")
const ch3Stop = document.getElementById("ch3Stop")

var characterSpeed = 1;
var characterDirection = "stop"; // 캐릭터의 초기 방향은 멈춤



// Player
// class Player{
//     position = {x:0, y:0}
//     playerImage
//     health
//     attackRange
    
//     constructor(){
//         this.playerImage = selectedCharacter
//         this.position.x = canvas.width/2;
//         this.position.y = canvas.height/2;
//         this.health = 100;
//         this.attackRange = 100;
//     }
//     // 플레이어가 몬스터를 공격하는 함수
// }

// Monster
// class Monster {
//     position = {x:0, y:0}
//     size
//     speed
//     direction
//     image
//     health
    
//     constructor() {
//         // 몬스터의 위치 랜덤으로 생성하기
//         this.position.x = Math.random() * map.width;
//         this.position.y = Math.random() * map.height;
//         // 몬스터의 크기 랜덤으로 생성하기
//         this.size = Math.random() * 50 + 20;
//         // 몬스터 이동 속도 랜덤으로 생성하기
//         this.speed = Math.random() * 2 + 1;
//         // 몬스터 이동 방향 랜덤으로 생성하기
//         // const direction = Math.random() * 2 * Math.PI;
//         this.direction = Math.atan2(player.position.y - this.position.y, player.position.x - this.position.x);
//         // 몬스터 정보를 객체로 저장하고 배열에 추가하기
//         this.image = monsterImage;
//         this.health = 100;
//     }
// }

// const player = new Player();
// const musicsound = new MusicSound();

// 몬스터 이미지 객체 생성
// let monsterImage = null;

// 몬스터 정보를 저장하는 배열
// let monsters = [];

// 몬스터 그리는 함수
// function drawMonsters() {
//     let frameIndex = 4; // 스프라이트 이미지에서 사용할 프레임 인덱스
//     let spriteX = 0; // 스프라이트 이미지에서 사용할 x 좌표
//     let spriteY = 0; // 스프라이트 이미지에서 사용할 y 좌표
//     frameIndex = Math.floor(Date.now() / 500) % 4;
//     spriteX = frameIndex * 40;
//     for (let i = 0; i < monsters.length-i; i++) {
//         const monster = monsters[i];
//         if(monster.position.x>player.position.x+25){
//             monsterImage = document.getElementById('monsterLeft');
//             ctx.drawImage(monsterImage, spriteX, spriteY, 40, 40, monster.position.x, monster.position.y, 40, 40);
//         }else{
//             monsterImage = document.getElementById('monsterRight');
//             ctx.drawImage(monsterImage, spriteX, spriteY, 40, 40, monster.position.x, monster.position.y, 40, 40);
//         }
//     }
//     // ctx.drawImage(monsterright, spriteX, spriteY, 48, 48, player.position.x, player.position.y, 48, 48);
// }

// 새로운 몬스터 생성 함수
// function createMonster() {
//     if(monsters.length <= 250) {
//         const monster = new Monster();
//         monsters.push(monster);
//     }
//     drawMonsters();
//     console.log(healthBar.currentHealth);
//   }
  

// 몬스터 움직임 구현
// function moveMonsters() {
//   for (let i = 0; i < monsters.length; i++) {
//     const monster = monsters[i];

//     // 몬스터의 위치 변경
//     monster.position.x += monster.speed * Math.cos(monster.direction);
//     monster.position.y += monster.speed * Math.sin(monster.direction);

//     // 화면 밖으로 나갔을 경우 위치 초기화
//     if (monster.position.x < -monster.size) {
//       monster.position.x = canvas.width + monster.size;
//     } else if (monster.position.x > canvas.width + monster.size) {
//       monster.position.x = -monster.size;
//     }
    
//     if (monster.position.y < -monster.size) {
//       monster.position.y = canvas.height + monster.size;
//     } else if (monster.position.y > canvas.height + monster.size) {
//       monster.position.y = -monster.size;
//     }
    
//     monster.direction = Math.atan2(player.position.y - monster.position.y, player.position.x - monster.position.x);
//   }
// }

// 일정 주기로 몬스터 움직이기
setInterval(this.monster.move(), 100);

// function getDistance(point1, point2) {
//   const dx = point1.x - point2.x;
//   const dy = point1.y - point2.y;
//   return Math.sqrt(dx * dx + dy * dy);
// }

// function autoAttack() {
//   for (let i = 0; i < monsters.length; i++) {
//     const monster = monsters[i];

//     // 플레이어와 몬스터의 거리가 공격 범위 이내에 있다면
//     if (getDistance(player.position, monster.position) < player.attackRange) {
//       monster.health -= 100;
//       musicsound.hitmusic.play();
      
//       if (monster.health <= 0) {
//         // 몬스터가 죽었을 때의 처리
//         monsters.splice(i, 1);
//         i--; // 삭제된 요소 이후의 요소들의 인덱스를 감소시킴
//       }
//     }

//     // 플레이어와 몬스터 충돌 시 플레이어 체력 닳기
//     if (player.position.x < monster.position.x + monster.size &&
//       player.position.x + 20 > monster.position.x &&
//       player.position.y < monster.position.y + monster.size &&
//       25 + player.position.y > monster.position.y) {

//       player.health -= 10;
//       healthBar.currentHealth -= 5;
//     }
//   }
// }

function drawAttack() {
  const attackImage1 = new Image();
  attackImage1.src = '../images/attackeffect/attack1.png'
  const attackImage3 = new Image();
  attackImage3.src = '../images/attackeffect/attack3.png'
  const attackImage33 = new Image()
  attackImage33.src = '../images/attackeffect/attack33.png'
  let spriteX = 0;
  let spriteY = 0;
  let frameIndex = 0;
  frameIndex = Math.floor(Date.now() / 500) % 4;
  spriteX = frameIndex*32;
  if(selectedCharacter== ch1)
    ctx.drawImage(attackImage1, spriteX, spriteY, 32, 32, player.position.x-70, player.position.y-70, 180, 180);
 
  if(selectedCharacter == ch2){
    ctx.drawImage(attackImage33, spriteX, spriteY, 32, 48, player.position.x+10, player.position.y+5, 32, 48);
    ctx.drawImage(attackImage33, spriteX, spriteY, 32, 48, player.position.x-10, player.position.y-5, 32, 48);
    ctx.drawImage(attackImage33, spriteX, spriteY, 32, 48, player.position.x-20, player.position.y-20, 32, 48);
  }
  
  if(selectedCharacter == ch3){
    ctx.drawImage(attackImage3, spriteX, spriteY, 32, 48, player.position.x+10, player.position.y+5, 32, 48);
    ctx.drawImage(attackImage3, spriteX, spriteY, 32, 48, player.position.x-10, player.position.y-5, 32, 48);
    ctx.drawImage(attackImage3, spriteX, spriteY, 32, 48, player.position.x-20, player.position.y-20, 32, 48);
  }
}

function drawCharacter() {
  var frameIndex = 4; // 스프라이트 이미지에서 사용할 프레임 인덱스
  var spriteX = 0; // 스프라이트 이미지에서 사용할 x 좌표
  var spriteY = 0; // 스프라이트 이미지에서 사용할 y 좌표

if(selectedCharacter == ch1){
  if (characterDirection === "stop") {
      frameIndex = Math.floor(Date.now() / 500) % 2;
      spriteX = frameIndex*48;}
  if (characterDirection === "left") {
      frameIndex = Math.floor(Date.now() / 100) % 4;
      //spriteX = 0
      spriteX = frameIndex * 48;
      player.position.x -= characterSpeed;}
  if (characterDirection === "up") {
      frameIndex = Math.floor(Date.now() / 100) % 4;
      //spriteX = 0
      spriteX = frameIndex * 48;
      player.position.y -= characterSpeed;}
  if (characterDirection === "down") {
      frameIndex = Math.floor(Date.now() / 100) % 4;
      //spriteX = 0
      spriteX = frameIndex * 48;
      player.position.y += characterSpeed;}
   else if (characterDirection === "right") {
      frameIndex = Math.floor(Date.now() / 100) % 4;
      //spriteX = 0
      spriteX = frameIndex * 48;
      player.position.x+= characterSpeed;} 

  if (characterDirection == 'stop')
  ctx.drawImage(ch1Stop, spriteX, spriteY, 48, 48, player.position.x, player.position.y, 48, 48);
  if (characterDirection == 'up')
  ctx.drawImage(ch1Back, spriteX, spriteY, 48, 48, player.position.x, player.position.y, 48, 48);
  if (characterDirection == 'down')
  ctx.drawImage(ch1Front, spriteX, spriteY, 48, 48, player.position.x, player.position.y, 48, 48);
  if (characterDirection === "left") {
  ctx.drawImage(ch1Left, spriteX, spriteY, 48, 48, player.position.x, player.position.y, 48, 48);
  }
  if (characterDirection === "right") {
  ctx.drawImage(ch1Right, spriteX, spriteY, 48, 48, player.position.x, player.position.y, 48, 48);
  }
}

if(selectedCharacter == ch2){
  if (characterDirection === "stop") {
      frameIndex = Math.floor(Date.now() / 500) % 2;
      spriteX = frameIndex * 16;}
  if (characterDirection === "left") {
      frameIndex = Math.floor(Date.now() / 100) % 4;
      //spriteX = 0
      spriteY = frameIndex * 16;
      player.position.x -= characterSpeed;}
  if (characterDirection === "up") {
      frameIndex = Math.floor(Date.now() / 100) % 4;
      //spriteX = 0
      spriteY = frameIndex * 16;
      player.position.y -= characterSpeed;}
  if (characterDirection === "down") {
      frameIndex = Math.floor(Date.now() / 100) % 4;
      //spriteX = 0
      spriteY = frameIndex * 16;
      player.position.y += characterSpeed;}
   else if (characterDirection === "right") {
      frameIndex = Math.floor(Date.now() / 100) % 4;
      //spriteX = 0
      spriteY = frameIndex * 16;
      player.position.x+= characterSpeed;} 

  if (characterDirection == 'stop')
  ctx.drawImage(ch2Stop, spriteX, spriteY, 16, 16, player.position.x, player.position.y, 16, 16);
  if (characterDirection == 'up')
  ctx.drawImage(ch2Back, spriteX, spriteY, 16, 16, player.position.x, player.position.y, 16, 16);
  if (characterDirection == 'down')
  ctx.drawImage(ch2Front, spriteX, spriteY, 16, 16, player.position.x, player.position.y, 16, 16);
  if (characterDirection === "left") {
  ctx.drawImage(ch2Left, spriteX, spriteY, 16, 16, player.position.x, player.position.y, 16, 16);
  }
  if (characterDirection === "right") {
  ctx.drawImage(ch2Right, spriteX, spriteY, 16, 16, player.position.x, player.position.y, 16, 16);
  }
}

if(selectedCharacter == ch3){
  if (characterDirection === "stop") {
      frameIndex = Math.floor(Date.now() / 500) % 2;
      spriteX = frameIndex * 16;}
  if (characterDirection === "left") {
      frameIndex = Math.floor(Date.now() / 100) % 4;
      //spriteX = 0
      spriteY = frameIndex * 16;
      player.position.x -= characterSpeed;}
  if (characterDirection === "up") {
      frameIndex = Math.floor(Date.now() / 100) % 4;
      //spriteX = 0
      spriteY = frameIndex * 16;
      player.position.y -= characterSpeed;}
  if (characterDirection === "down") {
      frameIndex = Math.floor(Date.now() / 100) % 4;
      //spriteX = 0
      spriteY = frameIndex * 16;
      player.position.y += characterSpeed;}
   else if (characterDirection === "right") {
      frameIndex = Math.floor(Date.now() / 100) % 4;
      //spriteX = 0
      spriteY = frameIndex * 16;
      player.position.x+= characterSpeed;} 

  if (characterDirection == 'stop')
  ctx.drawImage(ch3Stop, spriteX, spriteY, 16, 16, player.position.x, player.position.y, 16, 16);
  if (characterDirection == 'up')
  ctx.drawImage(ch3Back, spriteX, spriteY, 16, 16, player.position.x, player.position.y, 16, 16);
  if (characterDirection == 'down')
  ctx.drawImage(ch3Front, spriteX, spriteY, 16, 16, player.position.x, player.position.y, 16, 16);
  if (characterDirection === "left") {
  ctx.drawImage(ch3Left, spriteX, spriteY, 16, 16, player.position.x, player.position.y, 16, 16);
  }
  if (characterDirection === "right") {
  ctx.drawImage(ch3Right, spriteX, spriteY, 16, 16, player.position.x, player.position.y, 16, 16);
  }
}


document.addEventListener("keydown", function(event) {
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

  document.addEventListener("keyup", function(event) {
    if (event.keyCode === 37 || event.keyCode === 39 || event.keyCode === 38 || event.keyCode === 40) { // 왼쪽 또는 오른쪽 방향키를 떼었을 때
      characterDirection = "stop";
    }
  });

  if(player.position.x <= 0){
    player.position.x = 0
  }
  if(player.position.x >= canvas.width-40){
    player.position.x = canvas.width-40
  }

  if(player.position.y <= 0){
    player.position.y = 0
  }
  if(player.position.y >= canvas.height-45){
    player.position.y = canvas.height-45
  }
}

setInterval(autoAttack, 1000); // 3초마다 autoAttack() 함수 실행

//스테이지1 불러오기
const citystage = new Image();
citystage.src = '../images/background/citytile1.png';

citystage.onload = () => {
  musicsound.bgmusic.play();
  ctx.drawImage(citystage, 0, 0);
}

const map = new Image();
map.src = '../images/background/map.png'

function render(){
  const bgX = -this.player.position.x;
  const bgY = -this.player.position.y;
  ctx.drawImage(map, -500, -700);
  ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  ctx.drawImage(map, bgX, bgY, 2300, 1200);
  drawCharacter();
}


ch1.addEventListener('click', function() {
  // 캐릭터1을 선택했을 때
  console.log('캐릭터1을 선택했습니다.');
  this.selectedCharacter = ch1;
  this.startButton.style.display = 'block';
  this.ch1.style.background = 'skyblue';
  this.ch2.style.background =  'none';
  this.ch3.style.background =  'none';
  this.musicsound.show.play();
});

ch2.addEventListener('click', function() {
  // 캐릭터2을 선택했을 때
  console.log('캐릭터2을 선택했습니다.');
  this.selectedCharacter = ch2;
  this.startButton.style.display = 'block';
  this.ch2.style.background = 'skyblue';
  this.ch1.style.background =  'none';
  this.ch3.style.background =  'none';
  this.musicsound.show.play();
});

ch3.addEventListener('click', function() {
  // 캐릭터3을 선택했을 때
  console.log('캐릭터3을 선택했습니다.');
  this.selectedCharacter = ch3;
  this.startButton.style.display = 'block';
  this.ch3.style.background = 'skyblue';
  this.ch1.style.background =  'none';
  this.ch2.style.background =  'none';
  this.musicsound.show.play();
});

//게임시작
this.characterSeletion = document.getElementById('characterSelection');
let remainingTime = 180000;

//타이머
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
    this.musicsound.music.play();
    this.musicsound.bgmusic.pause();
    //캐릭터 선택 화면 숨기기
    this.characterSeletion.classList.add("hidden");
}

let chanceStep = 1;

const showChance = () =>{
  if(chanceStep != 1)
  return;
  chance.style.display = "block";
}

const noButton2 = document.getElementById("no-butoon2");
noButton2.style.display = "none";
let noStep = 1;

const appearButton = () => {
  if(noStep != 1)
    return;
  noButton2.style.display = "none";
}

const video = document.getElementById('video');
video.style.display = 'none';

const comment = document.getElementById('video-comment');

function updateHP() {
  if (this.player.health <= 50) {
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
        this.player.health = 70;
      });
      comment.style.display = "none";
    }
    setTimeout(showButton, 8000);
  }
}


startButton.addEventListener('click', function() {
  // 게임 시작 버튼을 눌렀을 때
  startGame();
  console.log('게임을 시작합니다.');
  // 게임 시작에 필요한 초기화 작업 수행

  if(this.monsters.length <= 10) {
    setInterval(this.monster.create(healthBar, this.monsters), 10000);
    }
  // 게임 루프 실행
  gameLoop();
  startTimer();
});

const healthBar = new HealthBar();

//gameLoop
function gameLoop() {
  render(); // 화면에 보여 주기
  this.monster.create(healthBar, this.monsters)
  drawAttack();
  updateHP();

  healthBar.draw(ctx, this.player.position.x, this.player.position.y, this.selectedCharacter);

  // 다음 프레임에 대한 처리를 위해 루프 재귀 호출
  if(this.player.health <= 0) {
    cancelAnimationFrame(timerAnimation);

    musicsound.music.pause();
    musicsound.deathmusic.play();
    musicsound.hitmusic.volume = 0;
    
    this.end.style.display = 'block';
    this.restartButton.addEventListener('click', function() {
      document.location.reload();
    });
  } else if (remainingTime <= 0){
    cancelAnimationFrame(timerAnimation);
    this.victory.style.display = 'block';
    musicsound.music.pause();
    musicsound.winmusic.play();
    musicsound.hitmusic.volume = 0;

  }else {
    requestAnimationFrame(gameLoop);
  }
}