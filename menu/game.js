/**@type {HTMLCanvasElement} */

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 576;

const ch1 = document.getElementById('ch1');
const 캐릭터2 = document.getElementById('ch2');
const 캐릭터3 = document.getElementById('ch3');

function draw(){
    c.fillStyle = 'blue'
    c.fillRect (10,10,50,50)
}

ch1.addEventListener('click', function() {
  // 캐릭터1을 선택했을 때 할 일
  //macincharcter = ch1
  draw();
});

ch2.addEventListener('click', function() {
  // 캐릭터2을 선택했을 때 할 일
  console.log('캐릭터2을 선택했습니다.');
});

ch3.addEventListener('click', function() {
  // 캐릭터3을 선택했을 때 할 일
  console.log('캐릭터3을 선택했습니다.');
});

