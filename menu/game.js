/**@type {HTMLCanvasElement} */

// 자바스크립트 코드
const canvas = document.getElementById('game1');
const ctx = canvas.getContext('2d');


canvas.width = 1024;
canvas.height = 576;


ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height)

//스테이지1 불러오기
const citystage = new Image()
citystage.onload = () => {
    ctx.drawImage(citystage, 0, 0);
}
citystage.src = '../images/background/citytileset.png';

function animate() {
    requestAnimationFrame(animate)
}


const ch1 = document.getElementById('ch1');
const ch2 = document.getElementById('ch2');
const ch3 = document.getElementById('ch3');
const ch4 = document.getElementById('ch4');
const ch5 = document.getElementById('ch5');

const startButton = document.getElementById('start-button');
startButton.style.display = 'none'; // 시작 버튼은 처음에 보이지 않음

let selectedCharacter = null;

//게임시작
const characterSeletion = document.getElementById('characterSelection');
function startGame() {
  //캐릭터 선택 화면 숨기기
     characterSeletion.classList.add("hidden");
    //
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

startButton.addEventListener('click', function() {
  // 게임 시작 버튼을 눌렀을 때
  startGame();
  console.log('게임을 시작합니다.');
  // 게임 시작에 필요한 초기화 작업 수행
  
  // 선택한 캐릭터 그리기
  //ctx.drawImage(selectedCharacter, 0, 0);
  
  // 게임 루프 실행
  //gameLoop();
});

//function gameLoop() {
  // 게임 루프
  // 게임의 상태 업데이트
  
  // 게임 화면 그리기
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 캐릭터 등 게임 요소 그리기
  
  // 다음 프레임에 대한 처리를 위해 루프 재귀 호출
  //requestAnimationFrame(gameLoop);
//}


