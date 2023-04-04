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
music.volume = 1;

const bgmusic = new Audio;
bgmusic.src = '../sounds/music2.mp3';
bgmusic.volume = 1;


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
music.volume = 1;

const bgmusic = new Audio;
bgmusic.src = '../sounds/music2.mp3';
bgmusic.volume = 1;


// Player
class Player{
    position = {x:0, y:0}
    position = {x:0, y:0}
    playerImage
    health
    attackRange
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
  for (let i = 0; i < monsters.length-i; i++) {
    const monster = monsters[i];
    ctx.drawImage(monster.image, monster.x, monster.y, monster.size, monster.size);
  }
}

// 새로운 몬스터 생성 함수
function createMonster() {

  // 몬스터의 위치 랜덤으로 생성하기
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;

  // 몬스터의 크기 랜덤으로 생성하기
  const size = Math.random() * 50 + 20;

  // 몬스터 이동 속도 랜덤으로 생성하기
  const speed = Math.random() * 2 + 1;

  // 몬스터 이동 방향 랜덤으로 생성하기
  // const direction = Math.random() * 2 * Math.PI;
  const direction = Math.atan2(player.playerY - y, player.playerX - x);

  // 몬스터 정보를 객체로 저장하고 배열에 추가하기
 
  if(monsters.length <= 50) {
  monsters.push({
    x: x,
    y: y,
    size: size,
    speed: speed,
    direction: direction,
    image: monsterImage
  });
};

  // 모든 몬스터 그리기
  drawMonsters();
}

// 일정 주기로 몬스터 생성하기
// if(monsters.length <= 10) {
// setInterval(createMonster, 3000);
// }

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

function move(){
  if('ArrowRight' in keysDown){
    player.playerX += 2;
  } // 오른쪽 버튼 눌림
  if('ArrowLeft' in keysDown){
    player.playerX -= 2;
  } // 왼쪽 버튼 눌림
  if('ArrowUp' in keysDown){
    player.playerY -= 2;
  } // 위쪽 버튼 눌림
  if('ArrowDown' in keysDown){
    player.playerY += 2;
  } // 아래쪽 버튼 눌림


  // 플레이어를 스테이지 안에서만 있게 하려면?(캔버스를 벗어나지 않게)
  if(player.playerX <= 0){
    player.playerX = 0
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
  ctx.drawImage(citystage, bgX, bgY, 2300, 1200);
  ctx.drawImage(selectedCharacter, player.playerX, player.playerY);
}

const player = new Player()

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

  // 캐릭터 등 게임 요소 그리기
  ctx.drawImage(selectedCharacter, 500, 500);

  // 다음 프레임에 대한 처리를 위해 루프 재귀 호출
  requestAnimationFrame(gameLoop);
}