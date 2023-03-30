// 캔버스 세팅
let canvas;
let ctx;
canvas = document.createElement('canvas')
ctx = canvas.getContext('2d')
canvas.width = 1024;
canvas.height = 576;
document.body.appendChild(canvas)
+8
// 배경, 플레이어 로딩
let backgroundImage, playerImage;


// 플레이어 좌표(계속 바뀌는 값이라 따로 빼기)
let playerX = canvas.width/2-32;
let playerY = canvas.height/2;

// 카메라 위치
// let cameraX = backgroundImage;
// let cameraY = backgroundImage;
// ctx.fillStyle = 'white';
// ctx.fillRect(0, 0, canvas.width, canvas.height)

// 이미지 로드
function loadImage(){
    backgroundImage = new Image();
    backgroundImage.src='../images/background/citytileset.png';;
    playerImage = new Image();
    playerImage.src='../images/mob/mob1.gif';
}

// 화면에 계속 배경과 플레이어 보이도록 설정
// function render(){
    //     const bgX = -playerX + canvas.width / 2;
    //     const bgY = -playerY + canvas.height / 2;
    //     // 배경 이미지 그리기
    //     ctx.drawImage(backgroundImage, Math.floor(bgX), Math.floor(bgY));
    //     // 캐릭터 그리기
    //     ctx.drawImage(playerImage, playerX, playerY);
    // }
    
    function render(){
    const bgX = -playerX + canvas.width / 2;
    const bgY = -playerY + canvas.height / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // console.log("bgy:" + bgY);
    // console.log("bgx:" +bgX);
    ctx.drawImage(backgroundImage, bgX, bgY);
    ctx.drawImage(playerImage, playerX, playerY);
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
        playerX += 2;
    } // 오른쪽 버튼 눌림
    if('ArrowLeft' in keysDown){
        playerX -= 2;
    } // 왼쪽 버튼 눌림
    if('ArrowUp' in keysDown){
        playerY -= 2;
    } // 위쪽 버튼 눌림
    if('ArrowDown' in keysDown){
        playerY += 2;
    } // 아래쪽 버튼 눌림

    // 플레이어를 스테이지 안에서만 있게 하려면?(캔버스를 벗어나지 않게)
    if(playerX <= 0){
        playerX = 0
    }
    if(playerX >= canvas.width-32){
        playerX = canvas.width-32
    }

    if(playerY <= 0){
        playerY = 0
    }
    if(playerY >= canvas.height-32){
        playerY = canvas.height-32
    }
}

function main(){
    move(); // 움직이면서 바뀐 좌표값
    render(); // 화면에 보여 주기
    requestAnimationFrame(main);
}
loadImage();
setuKeyboardListener();
main();