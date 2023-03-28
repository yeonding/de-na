const canvas = document.getElementById('canvas2');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.onload = () => {
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = 'red';
    ctx.fillRect(200, 400, 100, 100);
}
image.src = 'citytileset.png';

function animate() {
    requestAnimationFrame(animate)
}
