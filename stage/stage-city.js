
// class Enemy {
//     constructor({ position = { x: 0, y: 0 } }) {
//         this.position = position;
//         this.width = 100;
//         this.height = 100;
//     }

//     draw() {
//         ctx.fillStyle = 'red';
//         ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
//     }

//     update() {
//         this.draw();
//         this.position.x += 1;

//         // const waypoint = waypoints[0];
//         // const yDistance = waypoint.y - this.position.y;
//         // const xDistance = waypoint.x - this.position.x;
//         // const angle = Math.atan2(yDistance, xDistance);
//     }
// }

// // const enemy = new Enemy({position: { x: 200, y: 400} });
// // const enemy2 = new Enemy({position: { x: 0, y: 400} });

// function animate() {
//     requestAnimationFrame(animate)
//     ctx.drawImage(image, 0, 0);
//     drawCharacter(characterX, characterY);
// }

// animate();

// const canvas = document.getElementById('canvas2');
// const ctx = canvas.getContext('2d');

// const image = new Image()
// image.onload = () => {
//     animate();
// }
// image.src = 'citytileset.png';
// character.src = '../images/mob/mob1.gif';

// function animate() {
//     requestAnimationFrame(animate)
//     ctx.drawImage(image, 0, 0);
//     ctx.drawImage(character, 0, 0);
// }

// animate();

// const character = new Image();
// character.onload = () => {
//     drawCharacter(characterX, characterY);
// };
// character.src = '../images/mob/mob1.gif';

// function drawCharacter(x, y) {
//   ctx.drawImage(character, x, y);
// }

// let characterX = 20;
// let characterY = 30;

// function moveCharacter(event) {
//   switch(event.keyCode) {
//     case 37: // 왼쪽 화살표
//       characterX -= 10;
//       break;
//     case 38: // 위쪽 화살표
//       characterY -= 10;
//       break;
//     case 39: // 오른쪽 화살표
//       characterX += 10;
//       break;
//     case 40: // 아래쪽 화살표
//       characterY += 10;
//       break;
//   }

//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawCharacter(characterX, characterY);
// }

// document.addEventListener('keydown', moveCharacter);

const canvas = document.getElementById('canvas2');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.onload = () => {
    animate();
}
image.src = 'citytileset.png';

class Enemy {
    constructor({ position = { x: 0, y: 0 } }) {
        this.position = position;
        this.width = 100;
        this.height = 100;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.x += 1;

        // const waypoint = waypoints[0];
        // const yDistance = waypoint.y - this.position.y;
        // const xDistance = waypoint.x - this.position.x;
        // const angle = Math.atan2(yDistance, xDistance);
    }
}

const enemy = new Enemy({position: { x: 200, y: 400} });
const enemy2 = new Enemy({position: { x: 0, y: 400} });

function animate() {
    requestAnimationFrame(animate)
    ctx.drawImage(image, 0, 0);
    // enemy.update();
    // enemy2.update();
}

const character = new Image();
character.src = '../images/mob/mob1.gif';
character.onload = () => {
  drawCharacter(characterX, characterY);
};

function drawCharacter(x, y) {
  ctx.drawImage(character, x, y);
}

let characterX = canvas.width / 2;
let characterY = canvas.height / 2;

function moveCharacter(event) {
  switch(event.keyCode) {
    case 37: // 왼쪽 화살표
      characterX -= 10;
      break;
    case 38: // 위쪽 화살표
      characterY -= 10;
      break;
    case 39: // 오른쪽 화살표
      characterX += 10;
      break;
    case 40: // 아래쪽 화살표
      characterY += 10;
      break;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCharacter(characterX, characterY);
}

document.addEventListener('keydown', moveCharacter);