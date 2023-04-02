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

let selectedCharacter = null;

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
monsterImage.src = '../images/mob/mob2.gif';

// 몬스터 정보를 저장하는 배열
let monsters = [];

// 몬스터 그리는 함수
function drawMonsters() {
  for (let i = 0; i < monsters.length-i; i++) {
    const monster = monsters[i];
    ctx.drawImage(monster.image, monster.position.x, monster.position.y, monster.size, monster.size);
  }
}

// 새로운 몬스터 생성 함수
function createMonster() {
    if(monsters.length <= 50) {
        const monster = new Monster();
        monsters.push(monster);
    }
  
    // 모든 몬스터 그리기
    drawMonsters();
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

// function attackImage() {
//   // 플레이어 공격 이미지 그리기
//   ctx.fillStyle = "yellow";
//   ctx.fillRect(player.position.x + player.position.y, player.position.y, 20, 20);
// }

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
      if (monster.health <= 0) {
        // 몬스터가 죽었을 때의 처리
        monsters.splice(i, 1);
      }
    }

    // 플레이어와 몬스터 충돌 시 플레이어 체력 닳기
    if (player.position.x < monster.position.x + monster.size &&
      player.position.x + 40 > monster.position.x &&
      player.position.y < monster.position.y + monster.size &&
      45 + player.position.y > monster.position.y) {

        player.health -= 5;
        
  }
}
}

setInterval(autoAttack, 1000); // 3초마다 autoAttack() 함수 실행
// setInterval(attackImage, 1000);


function move(){
  if('ArrowRight' in keysDown){
    player.position.x += 2;
  } // 오른쪽 버튼 눌림
  if('ArrowLeft' in keysDown){
    player.position.x -= 2;
  } // 왼쪽 버튼 눌림
  if('ArrowUp' in keysDown){
    player.position.y -= 2;
  } // 위쪽 버튼 눌림
  if('ArrowDown' in keysDown){
    player.position.y += 2;
  } // 아래쪽 버튼 눌림


  // 플레이어를 스테이지 안에서만 있게 하려면?(캔버스를 벗어나지 않게)
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

//스테이지1 불러오기
const citystage = new Image();
citystage.src = '../images/background/citytile1.png';

citystage.onload = () => {
    ctx.drawImage(citystage, 0, 0);
}

function render(){
  const bgX = -player.position.x;
  const bgY = -player.position.y;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(citystage, bgX, bgY, 2300, 1200);
  ctx.drawImage(selectedCharacter, player.position.x, player.position.y);
}

const player = new Player()

ch1.addEventListener('click', function() {
  // 캐릭터1을 선택했을 때
  console.log('캐릭터1을 선택했습니다.');
  selectedCharacter = ch1;
  startButton.style.display = 'block';
});

ch2.addEventListener('click', function() {
  // 캐릭터2을 선택했을 때
  console.log('캐릭터2을 선택했습니다.');
  selectedCharacter = ch2;
  startButton.style.display = 'block';
});

ch3.addEventListener('click', function() {
  // 캐릭터3을 선택했을 때
  console.log('캐릭터3을 선택했습니다.');
  selectedCharacter = ch3;
  startButton.style.display = 'block';
});

ch4.addEventListener('click', function() {
    // 캐릭터4를 선택했을 때
    console.log('캐릭터4을 선택했습니다.');
    selectedCharacter = ch4;
    startButton.style.display = 'block';
  });

ch5.addEventListener('click', function() {
    // 캐릭터5를 선택했을 때
    console.log('캐릭터5을 선택했습니다.');
    selectedCharacter = ch5;
    startButton.style.display = 'block';
  });  

//게임시작
const characterSeletion = document.getElementById('characterSelection');

function startGame() {
    //캐릭터 선택 화면 숨기기
    characterSeletion.classList.add("hidden"); 
    
    //움직이는 코드 가져옴
    setuKeyboardListener();
}

let keysDown={} // 내가 누른 버튼의 값들을 객체에 저장
function setuKeyboardListener(){
  document.addEventListener('keydown', function(event){
      keysDown[event.key] = true // 키보드 누르고 있을 때
  });
  document.addEventListener('keyup', function(event){
      delete keysDown[event.key] // 키보드 누르지 않을 때 객체 안의 값들 삭제
  })
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
});

//gameLoop
function gameLoop() {
  move(); // 움직이면서 바뀐 좌표값
  render(); // 화면에 보여 주기
  createMonster();

  // 다음 프레임에 대한 처리를 위해 루프 재귀 호출
  if(player.health <= 0) {
    alert("게임이 종료되었습니다.")
  } else {
    requestAnimationFrame(gameLoop);
  }
}