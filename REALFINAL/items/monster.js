export default
class Monster{
    position = {x:0, y:0}
    size
    speed
    direction
    monsterImage
    health
    player
    obj
    ctx
    constructor(player,obj) {
        this.position.x = Math.floor(Math.random()*1024);
        this.position.y = Math.floor(Math.random()*576);
        this.size = Math.random() * 50 + 20;
        this.speed = Math.random() * 2 + 1;
        this.direction = Math.atan2(player.position.y - this.position.y, player.position.x - this.position.x);
        this.monsterImage = null;
        this.health = 100;
        this.player = player;
        this.obj = obj;
        this.ctx = obj.getContext('2d')
    }

    // 몬스터 그리는 함수
    draw(){
        let frameIndex = 4; 
        let spriteX = 0; 
        let spriteY = 0; 
        frameIndex = Math.floor(Date.now() / 500) % 4;
        spriteX = frameIndex * 40;

            if(this.position.x > this.player.position.x+25){
                this.monsterImage = document.getElementById('monsterLeft');
                this.ctx.drawImage(this.monsterImage, spriteX, spriteY, 40, 40, this.position.x, this.position.y, 40, 40);
            }else{
                this.monsterImage = document.getElementById('monsterRight');
                this.ctx.drawImage(this.monsterImage, spriteX, spriteY, 40, 40, this.position.x, this.position.y, 40, 40);
            }
        }
    

    move() {

            this.direction = Math.atan2(this.player.position.y - this.position.y, this.player.position.x - this.position.x);
        
            // 몬스터의 위치 변경
            this.position.x += this.speed * Math.cos(this.direction);
            this.position.y += this.speed * Math.sin(this.direction);
        
            // 캔버스 안으로 들어왔을 경우, 위치 초기화
            const canvasWidth = this.obj.width;
            const canvasHeight = this.obj.height;
            if (this.position.x < -this.size || this.position.x > canvasWidth + this.size ||
                this.position.y < -this.size || this.position.y > canvasHeight + this.size) {
            const monsterX = Math.random() > 0.5 ? Math.random() * canvasWidth : Math.random() > 0.5 ? canvasWidth + 50 : -50;
            const monsterY = Math.random() > 0.5 ? Math.random() * canvasHeight : Math.random() > 0.5 ? canvasHeight + 50 : -50;
            this.position.x = monsterX;
            this.position.y = monsterY;
            }
    }
}