export default
class Background{
    map;
    music;
    
    constructor(){
        this.map = document.getElementById("map");
        this.music = document.getElementById("music");
    }

    draw(ctx, player){
        this.music.play();
        this.music.volume = 0.5;
        ctx.drawImage(this.map, 0, 0);
        let bgX = -player.position.x;
        let bgY = -player.position.y;
        ctx.drawImage(this.map, -500, -700);
        ctx.clearRect(0, 0, ctx.width, ctx.height);
        ctx.drawImage(this.map, bgX, bgY, 2300, 1200);
    }
}