
/**@type {HTMLCanvasElement} */

const canvas = document.getElementById('game1');
const ctx = canvas.getContext('2d');

//캔버스 크기
canvas.width = 1024;
canvas.height = 576;

//캐릭터 선택
const ch1 = document.getElementById('ch1');
const ch2 = document.getElementById('ch2');
const ch3 = document.getElementById('ch3');
const ch4 = document.getElementById('ch4');
const ch5 = document.getElementById('ch5');

const startButton = document.getElementById('start-button');
startButton.style.display = 'none'; // 시작 버튼은 처음에 보이지 않음

const end = document.getElementById('endScreenDefeat');
end.style.display = 'none';

const victory = document.getElementById('victory');
victory.style.display = 'none';

const chance = document.getElementById('chance');
chance.style.display = 'none';

const restartButton = document.getElementById('restart-button');

let selectedCharacter = null;

const ch1Front = new Image();
ch1Front.src = "../images/player/ch1/spriteFront.png";
const ch1Back = new Image();
ch1Back.src = "../images/player/ch1/spriteBack.png";
const ch1Left = new Image();
ch1Left.src = "../images/player/ch1/spriteLeft.png";
const ch1Right = new Image();
ch1Right.src = "../images/player/ch1/spriteRight.png"; 
const ch1Stop = new Image();
ch1Stop.src = "../images/player/ch1/spriteStop.png"

const ch2Front = new Image();
ch2Front.src = "../images/player/ch5/spriteFront.png";
const ch2Back = new Image();
ch2Back.src = "../images/player/ch5/spriteBack.png";
const ch2Left = new Image();
ch2Left.src = "../images/player/ch5/spriteLeft.png";
const ch2Right = new Image();
ch2Right.src = "../images/player/ch5/spriteRight.png"; 
const ch2Stop = new Image();
ch2Stop.src = "../images/player/ch5/spriteStop.png"

const ch3Front = new Image();
ch3Front.src = "../images/player/ch2/spriteFront.png";
const ch3Back = new Image();
ch3Back.src = "../images/player/ch2/spriteBack.png";
const ch3Left = new Image();
ch3Left.src = "../images/player/ch2/spriteLeft.png";
const ch3Right = new Image();
ch3Right.src = "../images/player/ch2/spriteRight.png"; 
const ch3Stop = new Image();
ch3Stop.src = "../images/player/ch2/spriteStop.png"

var characterSpeed = 1;
var characterDirection = "stop"; // 캐릭터의 초기 방향은 멈춤

const music = new Audio;
music.src = '../sounds/music.mp3';
music.volume = 0.25;

const bgmusic = new Audio;
bgmusic.src = '../sounds/music2.mp3';
bgmusic.volume = 1;

const hitmusic = new Audio;
hitmusic.src = '../sounds/slash.mp3';
hitmusic.volume = 1;

const deathmusic = new Audio;
deathmusic.src = '../sounds/dead.mp3';
deathmusic.volume = 1;


// Player
class Player{
    position = {x:0, y:0}
    playerImage
    health
    attackRange
    
    constructor(){
        this.playerImage = selectedCharacter
        this.position.x = canvas.width/2;
        this.position.y = canvas.height/2;
        this.health = 100;
        this.attackRange = 100;
    }
    // 플레이어가 몬스터를 공격하는 함수
}

// Monster
class Monster {
    position = {x:0, y:0}
    size
    speed
    direction
    image
    health
    
    constructor() {
        // 몬스터의 위치 랜덤으로 생성하기
        this.position.x = Math.random() * canvas.width;
        this.position.y = Math.random() * canvas.height;
        // 몬스터의 크기 랜덤으로 생성하기
        this.size = Math.random() * 50 + 20;
        // 몬스터 이동 속도 랜덤으로 생성하기
        this.speed = Math.random() * 2 + 1;
        // 몬스터 이동 방향 랜덤으로 생성하기
        // const direction = Math.random() * 2 * Math.PI;
        this.direction = Math.atan2(player.position.y - this.position.y, player.position.x - this.position.x);
        // 몬스터 정보를 객체로 저장하고 배열에 추가하기
        this.image = monsterImage;
        this.health = 100;
    }
}


// 몬스터 이미지 객체 생성
const monsterImage = new Image();


const leftSrc= '../images/mob/frogleft.png';
const rightSrc = '../images/mob/frogright.png'

const monsterleft = new Image();
monsterleft.src = '../images/mob/frogleft.png'

const monsterright = new Image();
monsterright.src = '../images/mob/frogright.png'

// 몬스터 정보를 저장하는 배열
let monsters = [];

// 몬스터 그리는 함수
function drawMonsters() {
    let frameIndex = 4; // 스프라이트 이미지에서 사용할 프레임 인덱스
    let spriteX = 0; // 스프라이트 이미지에서 사용할 x 좌표
    let spriteY = 0; // 스프라이트 이미지에서 사용할 y 좌표
    frameIndex = Math.floor(Date.now() / 500) % 4;
    spriteX = frameIndex*40;
    for (let i = 0; i < monsters.length-i; i++) {
        const monster = monsters[i];
        // ctx.drawImage(monster.image, monster.position.x, monster.position.y, monster.size, monster.size);
        if(monster.position.x>player.position.x+25){
            monsterImage.src= leftSrc;
            ctx.drawImage(monsterImage, spriteX, spriteY, 40, 40, monster.position.x, monster.position.y, 40, 40);
            // ctx.drawImage(monsterleft,monster.position.x, monster.position.y, monster.size, monster.size)
        }else{
            monsterImage.src= rightSrc;
            // ctx.drawImage(monsterright,monster.position.x, monster.position.y, monster.size, monster.size)
            ctx.drawImage(monsterImage, spriteX, spriteY, 40, 40, monster.position.x, monster.position.y, 40, 40);
        }
    }
    // ctx.drawImage(monsterright, spriteX, spriteY, 48, 48, player.position.x, player.position.y, 48, 48);
}

// 새로운 몬스터 생성 함수
function createMonster() {
    if(monsters.length <= 150) {
        const monster = new Monster();
        monsters.push(monster);
    }
    drawMonsters();
    console.log(currentHealth);
  }
  

// 몬스터 움직임 구현
function moveMonsters() {
  for (let i = 0; i < monsters.length; i++) {
    const monster = monsters[i];

    // 몬스터의 위치 변경
    monster.position.x += monster.speed * Math.cos(monster.direction);
    monster.position.y += monster.speed * Math.sin(monster.direction);

    // 화면 밖으로 나갔을 경우 위치 초기화
    if (monster.position.x < -monster.size || monster.position.x > canvas.width + monster.size ||
      monster.position.y < -monster.size || monster.position.y > canvas.height + monster.size) {
      monster.position.x = Math.random() * canvas.width;
      monster.position.y = Math.random() * canvas.height;
    }
    monster.direction = Math.atan2(player.position.y - monster.position.y, player.position.x - monster.position.x);
  }
}

// 일정 주기로 몬스터 움직이기
setInterval(moveMonsters, 100);

function getDistance(point1, point2) {
  const dx = point1.x - point2.x;
  const dy = point1.y - point2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function autoAttack() {
  for (let i = 0; i < monsters.length; i++) {
    const monster = monsters[i];

    // 플레이어와 몬스터의 거리가 공격 범위 이내에 있다면
    if (getDistance(player.position, monster.position) < player.attackRange) {
      monster.health -= 100;
      hitmusic.play();
      
      if (monster.health <= 0) {
        // 몬스터가 죽었을 때의 처리
        monsters.splice(i, 1);
        i--; // 삭제된 요소 이후의 요소들의 인덱스를 감소시킴
      }
    }

    // 플레이어와 몬스터 충돌 시 플레이어 체력 닳기
    if (player.position.x < monster.position.x + monster.size &&
      player.position.x + 20 > monster.position.x &&
      player.position.y < monster.position.y + monster.size &&
      25 + player.position.y > monster.position.y) {

      player.health -= 10;
      currentHealth -= 10*2;
    }
  }
}

function drawAttack() {
  const attackImage = new Image();
  attackImage.src = '../images/attackeffect/attack3.png';
  let spriteX = 0;
  let spriteY = 0;
  let frameIndex = 0;
  frameIndex = Math.floor(Date.now() / 500) % 2;
  spriteX = frameIndex*32;
  if(selectedCharacter== ch1)
    ctx.drawImage(attackImage, spriteX, spriteY, 32, 48, player.position.x+10, player.position.y+5, 32, 48);
 
  if(selectedCharacter == ch2){
    ctx.drawImage(attackImage, spriteX, spriteY, 32, 48, player.position.x+10, player.position.y+5, 32, 48);
    ctx.drawImage(attackImage, spriteX, spriteY, 32, 48, player.position.x-10, player.position.y-5, 32, 48);
    ctx.drawImage(attackImage, spriteX, spriteY, 32, 48, player.position.x-20, player.position.y-20, 32, 48);
  }
  
  if(selectedCharacter == ch3){
    ctx.drawImage(attackImage, spriteX, spriteY, 32, 48, player.position.x+10, player.position.y+5, 32, 48);
    ctx.drawImage(attackImage, spriteX, spriteY, 32, 48, player.position.x-10, player.position.y-5, 32, 48);
    ctx.drawImage(attackImage, spriteX, spriteY, 32, 48, player.position.x-20, player.position.y-20, 32, 48);
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
  bgmusic.play();
  ctx.drawImage(citystage, 0, 0);
}

const map = new Image();
map.src = '../images/background/map.png'

function render(){
  const bgX = -player.position.x;
  const bgY = -player.position.y;
  ctx.drawImage(map, -500, -700);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(map, bgX, bgY, 2300, 1200);
  drawCharacter();
}

const player = new Player();
const show = new Audio;
show.src = '../sounds/show.mp3';
show.volume = 1;

// hp바 구현
const barWidth = 200;
const barHeight = 20;
const barX = 20;
const barY = 30;

let maxHealth = 200;
let currentHealth = 200;

function drawHealthBar() {
  ctx.fillStyle = "gray";
  ctx.fillRect(barX, barY, barWidth, barHeight);

  if(currentHealth >= 0) {
  ctx.fillStyle = "skyblue";
  const currentHealthWidth = (currentHealth / maxHealth) * barWidth;
  ctx.fillRect(barX, barY, currentHealthWidth, barHeight);
  }
}

ch1.addEventListener('click', function() {
  // 캐릭터1을 선택했을 때
  console.log('캐릭터1을 선택했습니다.');
  selectedCharacter = ch1;
  startButton.style.display = 'block';
  ch1.style.background = 'skyblue';
  ch2.style.background =  'none';
  ch3.style.background =  'none';
  show.play();
});

ch2.addEventListener('click', function() {
  // 캐릭터2을 선택했을 때
  console.log('캐릭터2을 선택했습니다.');
  selectedCharacter = ch2;
  startButton.style.display = 'block';
  ch2.style.background = 'skyblue';
  ch1.style.background =  'none';
  ch3.style.background =  'none';
  show.play();
});

ch3.addEventListener('click', function() {
  // 캐릭터3을 선택했을 때
  console.log('캐릭터3을 선택했습니다.');
  selectedCharacter = ch3;
  startButton.style.display = 'block';
  ch3.style.background = 'skyblue';
  ch1.style.background =  'none';
  ch2.style.background =  'none';
  show.play();
});

//게임시작
const characterSeletion = document.getElementById('characterSelection');
let remainingTime = 10000;

//타이머
let timerAnimation = null;
function startTimer() {
  const startTime = Date.now();

  function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    remainingTime = 10000 - elapsedTime;

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
    music.play();
    bgmusic.pause();
    //캐릭터 선택 화면 숨기기
    characterSeletion.classList.add("hidden");
}

startButton.addEventListener('click', function() {
  // 게임 시작 버튼을 눌렀을 때
  startGame();
  console.log('게임을 시작합니다.');
  // 게임 시작에 필요한 초기화 작업 수행

  if(monsters.length <= 10) {
    setInterval(createMonster, 10000);
    }
  // 게임 루프 실행
  gameLoop();
  startTimer();
});

//gameLoop
function gameLoop() {
  render(); // 화면에 보여 주기
  createMonster();
  drawAttack();
  drawHealthBar();

  // 다음 프레임에 대한 처리를 위해 루프 재귀 호출
  if(player.health <= 0) {
    cancelAnimationFrame(timerAnimation);

    music.pause();
    deathmusic.play();
    hitmusic.volume = 0;
    
    end.style.display = 'block';
    restartButton.addEventListener('click', function() {
      document.location.reload();
    });
  } else if (remainingTime < 0){
    cancelAnimationFrame(timerAnimation);
    victory.style.display = 'block';

  }else {
    requestAnimationFrame(gameLoop);
  }
}