export default class Background {
    map

    constructor() {
        this.map = new Image();
        this.map.src = '../images/background/map.png';
    }

    draw(player, ctx, canvas) {
        const bgX = -player.position.x;
        const bgY = -player.position.y;
        ctx.drawImage(this.map, -500, -700);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(this.map, bgX, bgY, 2300, 1200);
    }
}