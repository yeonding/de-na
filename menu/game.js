import { Player } from "../class/model.js";
/**@type {HTMLCanvasElement} */

const canvas = document.getElementById('game1');
const ctx = canvas.getContext('2d');



//캔버스 크기
canvas.width = 1024;
canvas.height = 576;


// ctx.fillStyle = 'white';
// ctx.fillRect(0, 0, canvas.width, canvas.height)

//스테이지1 불러오기
const citystage = new Image()
citystage.onload = () => {
    ctx.drawImage(citystage, 0, 0);
}
citystage.src = '../images/background/citytile1.png';

function animate() {
    requestAnimationFrame(animate)
    // clearRect(0, 0, canvas.width, canvas.height)
}

//타이머
let gameInterval;



//캐릭터 선택
const ch1 = document.getElementById('ch1');
const ch2 = document.getElementById('ch2');
const ch3 = document.getElementById('ch3');
const ch4 = document.getElementById('ch4');
const ch5 = document.getElementById('ch5');

const startButton = document.getElementById('start-button');
startButton.style.display = 'none'; // 시작 버튼은 처음에 보이지 않음

let selectedCharacter = ch1;
// selectedCharacter.width=50;
// selectedCharacter.height=50;


//게임시작
const characterSeletion = document.getElementById('characterSelection');
function startGame() {

    //캐릭터 선택 화면 숨기기
    characterSeletion.classList.add("hidden"); 
    

     //움직이는 코드 가져옴
   setuKeyboardListener();
 main();
  }

// class Player{
//   //position이랑 velocity
//   playerX
//   playerY
//   playerImage

//   constructor(){
//   this.playerImage = selectedCharacter
//   this.playerX = canvas.width/2;
//   this.playerY = canvas.height/2;
//   }
// }

const player = new Player(32,56,selectedCharacter,{right:selectedCharacter,
  left:selectedCharacter,
  touchedLeft: selectedCharacter,
  touchedRight: selectedCharacter})
// player.playerImage=selectedCharacter;

function render(){
  const bgX = -player.position.x;
  // console.log(bgX);
  const bgY = -player.position.y;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(citystage, bgX, bgY, 2300, 1200);
<<<<<<< HEAD
  ctx.drawImage(selectedCharacter, player.position.x, player.position.y);
=======
  ctx.drawImage(selectedCharacter, player.playerX, player.playerY);
  
>>>>>>> 8c4c269302da93fa532a1ec5c44984ee7c6e617a
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

function main(){
  move(); // 움직이면서 바뀐 좌표값
  render(); // 화면에 보여 주기
  createMonster();
  requestAnimationFrame(main);
}

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

// 몬스터 이미지 객체 생성
const monsterImage = new Image();
monsterImage.src = '../images/mob/mob2.gif';

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
    monster.x += monster.speed * Math.cos(monster.direction);
    monster.y += monster.speed * Math.sin(monster.direction);

    // 화면 밖으로 나갔을 경우 위치 초기화
    if (monster.x < -monster.size || monster.x > canvas.width + monster.size ||
      monster.y < -monster.size || monster.y > canvas.height + monster.size) {
      monster.x = Math.random() * canvas.width;
      monster.y = Math.random() * canvas.height;
    }
    monster.direction = Math.atan2(player.playerY - monster.y, player.playerX - monster.x);
  }
}

// 일정 주기로 몬스터 움직이기
setInterval(moveMonsters, 100);

startButton.addEventListener('click', function() {
  // 게임 시작 버튼을 눌렀을 때
  startGame();
  console.log('게임을 시작합니다.');
  // 게임 시작에 필요한 초기화 작업 수행

  if(monsters.length <= 10) {
    setInterval(createMonster, 10000);
    }
  
  // 선택한 캐릭터 그리기
  //ctx.drawImage(selectedCharacter, 500, 500);
  
  // 게임 루프 실행
  gameLoop();
});

function gameLoop() {
  // 게임 루프
  // 게임의 상태 업데이트

  createMonster();
  // 게임 화면 그리기
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
   //타이머 시작하기
   clearInterval(gameInterval);

   const startTime = Date.now();
   const endTime = startTime + (3 * 60 * 1000)+2000;

   let timerInterval = setInterval(() => {
     const remainingTime = endTime - Date.now();

     if (remainingTime <= 0) {
       clearInterval(timerInterval);
       alert("Time's up!");
     } else {
       const seconds = Math.floor(remainingTime / 1000) % 60;
       const minutes = Math.floor(remainingTime / 1000 / 60);


       ctx.clearRect(5, 10, 200, 50);
       //ctx.drawImage(citystage, 0, 0);
       ctx.font = "30px Arial";
       ctx.fillText(`Time ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`, 10, 50);
     }
   }, 1000);
  
   //타이머를 멈추는 function
   function stopTimer() {
     clearInterval(timerInterval);
     alert("Timer stopped.");

  // 캐릭터 등 게임 요소 그리기
  ctx.drawImage(selectedCharacter, 500, 500);

  // 다음 프레임에 대한 처리를 위해 루프 재귀 호출
  requestAnimationFrame(gameLoop);
}


}
