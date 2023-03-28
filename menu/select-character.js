
//const characterSelectCanvas = document.getElementById("characterSelectCanvas");
//const gameCanvas = document.getElementById("gameCanvas");
//const canvasContainer = document.getElementById("canvasContainer");

const characterSelectCtx = characterSelectCanvas.getContext("2d");
//const gameCtx = gameCanvas.getContext("2d");

// 캐릭터 이미지 배열
const characters = [
  {name: 'Character1', src: "../images/mob/ChargeAttackPreview.gif"},
  {name: 'Character2', src: "../images/mob/ChargeAttackPreview.gif"},
  {name: 'Character3', src: "../images/mob/ChargeAttackPreview.gif"}
  ]

// 캐릭터 이미지 그리기
function drawCharacters() {
  let x = 50;
  let y = 50;
  characters.forEach(character => {
    let img = new Image();
    img.src = character.src;
    img.onload = function() {
      characterSelectCtx.drawImage(img, x, y, 100, 100);
    };
    x += 150;
  });
}

// 선택한 캐릭터 그리기
function drawSelectedCharacter(character) {
  characterSelectCtx.clearRect(0, 0, characterSelectCanvas.width, characterSelectCanvas.height);
  let img = new Image();
  img.src = character.src;
  img.onload = function() {
    characterSelectCtx.drawImage(img, 50, 50, 100, 100);
  };
}

// 선택한 캐릭터 정보 저장
let selectedCharacter;

// 캐릭터 선택 클릭 이벤트
characterSelectCanvas.addEventListener("click", function(e) {
  let x = e.offsetX;
  let y = e.offsetY;
  characters.forEach(character => {
    if (x >= 50 && x <= 150 && y >= 50 && y <= 150 && character === characters[0]) {
      selectedCharacter = character;
      drawSelectedCharacter(character);
    }
    else if (x >= 200 && x <= 300 && y >= 50 && y <= 150 && character === characters[1]) {
      selectedCharacter = character;
      drawSelectedCharacter(character);
    }
    else if (x >= 350 && x <= 450 && y >= 50 && y <= 150 && character === characters[2]) {
      selectedCharacter = character;
      drawSelectedCharacter(character);
    }
  });
  if (selectedCharacter) {
    characterSelectCanvas.style.display = "none";
    gameCanvas.style.display = "block";
    startGame();
  }
});

// 게임 시작
// function startGame() {
//   // 게임 화면 그리기
//   gameCtx.fillStyle = "black";
//   gameCtx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
  
//   // 선택한 캐릭터 이미지 그리기
//   let img = new Image();
//   img.src = selectedCharacter.src;
//   img.onload = function() {
//     gameCtx.drawImage(img,



