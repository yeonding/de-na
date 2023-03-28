const canvas = document.getElementById('canvas2');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height)

const citystage = new Image()
//image.src = '../'
citystage.onload = () => {
    ctx.drawImage(citystage, 0, 0);
}
citystage.src = 'citytileset.png';

function animate() {
    requestAnimationFrame(animate)
}
