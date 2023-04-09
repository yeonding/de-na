export default
class Background{
    map
    
    constructor(){
        this.map = document.getElementById("map")
    }

    draw(ctx, player){
        ctx.drawImage(this.map, 0, 0)
        let bgX = -player.position.x;
        let bgY = -player.position.y;
        ctx.drawImage(map, -500, -700);
        ctx.clearRect(0, 0, ctx.width, ctx.height);
        ctx.drawImage(map, bgX, bgY, 2300, 1200);
    }
}