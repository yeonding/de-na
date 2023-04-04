const canvas = document.getElementById('game1');
const ctx = canvas.getContext('2d');

//캔버스 크기
canvas.width = 1024;
canvas.height = 576;

export class Sprite{
    constructor(width,height,shape,position){
        this.width = width
        this.height = height
        this.shape = shape
        this.position = position
    }
    draw(){
        ctx.drawImage(
            this.shape,
            this.position.x,
            this.position.y,
            this.width,
            this.height)
    }
    
}

export class Player extends Sprite{
// export class Player {
    constructor(width,height,shape,sprites){
        super(width,height,shape)
        this.position = {
            x:(canvas.width/2),
            y:(canvas.height/2)}
        this.sprites = sprites
        this.direction = 'right'
        this.moving = false
        this.frame = {
            max :0,
            val:3,
            elapsed:0
        }
        this.weapons = []
        this.skills = []
        this.stats = {
            pvMax:200,
            pv:200,
            xpMax:50,
            xp:0,
            lvl:1,  
            strenght:1,
            armor:0,
        }
        this.speed = 1
        this.touched = false
        // this.playerImage = selectedCharacter

    }
    // constructor(){
    //     this.position = {
    //         x:(canvas.width/2),
    //         y:(canvas.height/2)
    //     }
        
    // }
    
    // move(){
    //     if (this.direction === 'right'){
    //         if(this.touched){
    //             this.shape = this.sprites.touchedRight
    //         }
    //         this.shape = this.sprites.right
    //         ctx.drawImage(
    //             this.shape,
    //             this.shape.width / 9 * this.frame.val,
    //             0,
    //             this.shape.width / 9,
    //             this.shape.height,
    //             this.position.x,
    //             this.position.y,
    //             this.width,
    //             this.height,)
    //         this.frame.elapsed ++
    //         if (!this.moving){
    //             this.frame.val = 3
    //         }else{
    //             if (this.frame.elapsed % 10 === 0){
    //                 if(this.frame.val < 7){
    //                     this.frame.val ++
    //                 }else{
    //                     this.frame.val = 4
    //                 }
    //             }
    //         }
    //     }else{
    //         if(this.touched){
    //             this.shape = this.sprites.touchedLeft
    //         }
    //         this.shape = this.sprites.left
    //         ctx.drawImage(
    //             this.shape,
    //             this.shape.width / 9 * this.frame.val,
    //             0,
    //             this.shape.width / 9,
    //             this.shape.height,
    //             this.position.x,
    //             this.position.y,
    //             this.width,
    //             this.height,)
    //         this.frame.elapsed ++
    //         if (!this.moving){
    //             this.frame.val = 5
    //         }else{
    //             if (this.frame.elapsed % 10 === 0){
    //                 if(this.frame.val > 1){
    //                     this.frame.val --
    //                 }else{
    //                     this.frame.val = 4
    //                 }
    //             }
    //         }
    //     }
    // }
    reset(){
        this.direction = 'right'
        this.moving = false
        this.frame = {
            max :0,
            val:3,
            elapsed:0
        }
        this.weapons = []
        this.skills = []
        this.stats = {
            pvMax:200,
            pv:200,
            xpMax:50,
            xp:0,
            lvl:1,  
            strenght:1,
            armor:0,
        }
        this.speed = 1
        this.touched = false
    }

}

export class Enemy extends Sprite{
    constructor(height,width,shape,position,pv,strenght){
        super(height,width,shape,position)
        this.pv = pv
        this.strenght = strenght
        this.animationFrame = {
            max :0,
            val:3,
            elapsed:0
        }
    }
    draw(){
        console.log("draw")
        ctx.drawImage(
            this.shape,
            this.shape.width / 8 * this.animationFrame.val,
            0,
            this.shape.width / 8,
            this.shape.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height)
        this.animationFrame.elapsed ++    
        if (this.animationFrame.elapsed % 10 === 0){
            if(this.animationFrame.val < 7){
                this.animationFrame.val ++
            }else{
                this.animationFrame.val = 3
            }
        }
    }

    move(){
        // if (this.position.x > character.position.x){
        //     this.position.x -= 1
        // }else if(this.position.x < character.position.x){
        //     this.position.x += 1}
        // if (this.position.y > (character.position.y + character.height / 2)-character.height / 4){
        //     this.position.y -= 1
        // }else if(this.position.y < (character.position.y + character.height / 2)-character.height / 4){
        //     this.position.y += 1}
    }

    getPushed(directionX,directionY){
        if(directionX === 'right'){
            this.position.x += 40
        }else{
            this.position.x -= 40
        }
        if(directionY==='up'){
            this.position.y -= 40
        }else{
            this.position.y += 40
        }
    }
}