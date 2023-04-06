
export default
class Character {
    front
    back
    left
    right
    stop

    characterSpeed
    characterDirection

  constructor(selectedCharacter){ 
    this.characterSpeed = 1
    this.characterDirection = 'stop' // 캐릭터의 초기 방향은 멈춤
    
    if(selectedCharacter = ch1)
    this.front = document.getElementById("ch1Front"),
    this.back = document.getElementById("ch1Back"),
    this.left =  document.getElementById("ch1Left"),
    this.right = document.getElementById("ch1Right"),
    this.stop = document.getElementById("ch1Stop")
    

    }

    draw(ctx) {
        var frameIndex = 4; // 스프라이트 이미지에서 사용할 프레임 인덱스
        var spriteX = 0; // 스프라이트 이미지에서 사용할 x 좌표
        var spriteY = 0; // 스프라이트 이미지에서 사용할 y 좌표      

        if (characterDirection === "stop") {
            frameIndex = Math.floor(Date.now() / 500) % 2;
            spriteX = frameIndex*48;}
        if (characterDirection === "left") {
            frameIndex = Math.floor(Date.now() / 100) % 4;
            //spriteX = 0
            spriteX = frameIndex * 48;
            player.position.x -= characterSpeed;}
        if (characterDirection === "up") {
            frameIndex = Math.floor(Date.now() / 100) % 4;
            //spriteX = 0
            spriteX = frameIndex * 48;
            player.position.y -= characterSpeed;}
        if (characterDirection === "down") {
            frameIndex = Math.floor(Date.now() / 100) % 4;
            //spriteX = 0
            spriteX = frameIndex * 48;
            player.position.y += characterSpeed;}
         else if (characterDirection === "right") {
            frameIndex = Math.floor(Date.now() / 100) % 4;
            //spriteX = 0
            spriteX = frameIndex * 48;
            player.position.x+= characterSpeed;} 

        if (characterDirection === "stop") {
            frameIndex = Math.floor(Date.now() / 500) % 2;
            spriteX = frameIndex*48;}
        if (characterDirection === "left") {
            frameIndex = Math.floor(Date.now() / 100) % 4;
            //spriteX = 0
            spriteX = frameIndex * 48;
            player.position.x -= characterSpeed;}
        if (characterDirection === "up") {
            frameIndex = Math.floor(Date.now() / 100) % 4;
            //spriteX = 0
            spriteX = frameIndex * 48;
            player.position.y -= characterSpeed;}
        if (characterDirection === "down") {
            frameIndex = Math.floor(Date.now() / 100) % 4;
            //spriteX = 0
            spriteX = frameIndex * 48;
            player.position.y += characterSpeed;}
         else if (characterDirection === "right") {
            frameIndex = Math.floor(Date.now() / 100) % 4;
            //spriteX = 0
            spriteX = frameIndex * 48;
            player.position.x+= characterSpeed;} 

        if (characterDirection == 'stop')
            ctx.drawImage(ch1Stop, spriteX, spriteY, 48, 48, player.position.x, player.position.y, 48, 48);
        if (characterDirection == 'up')
            ctx.drawImage(ch1Back, spriteX, spriteY, 48, 48, player.position.x, player.position.y, 48, 48);
        if (characterDirection == 'down')
            ctx.drawImage(ch1Front, spriteX, spriteY, 48, 48, player.position.x, player.position.y, 48, 48);
        if (characterDirection === "left") {
            ctx.drawImage(ch1Left, spriteX, spriteY, 48, 48, player.position.x, player.position.y, 48, 48);
        }
        if (characterDirection === "right") {
            ctx.drawImage(ch1Right, spriteX, spriteY, 48, 48, player.position.x, player.position.y, 48, 48);
        }
    }
}





