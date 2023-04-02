class Sprite{
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

class Player extends Sprite{
    constructor(width,height,shape,sprites){
        super(width,height,shape)
        this.position = {x:(canvas.width/2 - this.shape.width/9),
        y:(canvas.height/2-this.shape.height /2)},
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
    }
    move(){
        if (this.direction === 'right'){
            if(this.touched){
                this.shape = this.sprites.touchedRight
            }
            this.shape = this.sprites.right
            ctx.drawImage(
                this.shape,
                this.shape.width / 9 * this.frame.val,
                0,
                this.shape.width / 9,
                this.shape.height,
                this.position.x,
                this.position.y,
                this.width,
                this.height,)
            this.frame.elapsed ++
            if (!this.moving){
                this.frame.val = 3
            }else{
                if (this.frame.elapsed % 10 === 0){
                    if(this.frame.val < 7){
                        this.frame.val ++
                    }else{
                        this.frame.val = 4
                    }
                }
            }
        }else{
            if(this.touched){
                this.shape = this.sprites.touchedLeft
            }
            this.shape = this.sprites.left
            ctx.drawImage(
                this.shape,
                this.shape.width / 9 * this.frame.val,
                0,
                this.shape.width / 9,
                this.shape.height,
                this.position.x,
                this.position.y,
                this.width,
                this.height,)
            this.frame.elapsed ++
            if (!this.moving){
                this.frame.val = 5
            }else{
                if (this.frame.elapsed % 10 === 0){
                    if(this.frame.val > 1){
                        this.frame.val --
                    }else{
                        this.frame.val = 4
                    }
                }
            }
        }
    }
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

class Enemy extends Sprite{
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
        if (this.position.x > character.position.x){
            this.position.x -= 1
        }else if(this.position.x < character.position.x){
            this.position.x += 1}
        if (this.position.y > (character.position.y + character.height / 2)-character.height / 4){
            this.position.y -= 1
        }else if(this.position.y < (character.position.y + character.height / 2)-character.height / 4){
            this.position.y += 1}
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

class Item extends Sprite{
    constructor(height,width,shape,position,type='xp'){
        super(height,width,shape,position)
        this.type = type
    }

    heal(player){
        player.stats.pv += 30
        if (player.stats.pv > player.stats.pvMax){
            player.stats.pv = player.stats.pvMax
        }
    }

    pex(player){
        player.stats.xp += 10
        if (player.stats.xp >= player.stats.xpMax){
            player.stats.lvl +=1
            player.stats.strenght += 0.1
            player.stats.xp -= player.stats.xpMax
            player.stats.xpMax = Math.floor(player.stats.xpMax*1.5)
            return true
        }
        return false
    }
    
}

class Weapon extends Sprite{
    constructor(width,height,shape,sprites,position,name,description){
    super(width,height,shape,position)
    this.sprites = sprites
    this.name = name
    this.description = description
    this.lvl = 1
    }
}

class Sword extends Weapon{
    constructor(width,height,shape,sprites,damage){
        super(width,height,shape,sprites)
        this.position = {x:(character.position.x),
        y:(character.position.y + character.height / 2)-character.height / 4}
        this.damage = damage
        this.frame = 100
        this.animation = false
        this.animationStart = 0
        this.animationEnd = this.animationStart + 20
        this.animationFrame = {
            max :0,
            right:4,
            left:0,
            elapsed:0
        }

    }
    attack(){
        if(this.animation){
            if (character.direction === 'right'){
                this.position.x = (character.position.x + character.width)
                this.shape = this.sprites.right
                ctx.drawImage(
                    this.shape,
                    this.shape.width / 5 * this.animationFrame.right,
                    0,
                    this.shape.width / 5,
                    this.shape.height,
                    this.position.x,
                    this.position.y,
                    this.width,
                    this.height,)
                this.animationFrame.elapsed ++
                if (this.animationFrame.elapsed % 3 === 0){                   
                    if(this.animationFrame.right > 1){
                        this.animationFrame.right --
                    }else{
                        this.animationFrame.right = 4
                    }
                }

            }else{
                this.position.x = (character.position.x - this.width)
                this.shape = this.sprites.left
                ctx.drawImage(
                    this.shape,
                    this.shape.width / 5 * this.animationFrame.left,
                    0,
                    this.shape.width / 5,
                    this.shape.height,
                    this.position.x,
                    this.position.y,
                    this.width,
                    this.height,)
                this.animationFrame.elapsed ++
                if (this.animationFrame.elapsed % 3 === 0){   
                    if(this.animationFrame.left < 4){
                        this.animationFrame.left ++
                    }else{
                        this.animationFrame.left = 0
                    }
                }
            }    
        }
    }                    
}

class Skills{
    constructor(name,image){
        this.name = name
        this.image = image
        this.maxLvl = 9
    }  
}

class DamagesBuff extends Skills{
    constructor(name,image){
        super(name,image)
        this.lvl = 1
        this.value = 5
        this.description = `Increases weapon damages by ${this.value} per rank`
    }
    applyBuff(player){
        for (let attack of player.weapons){
            attack.damage += this.value
        } 
    }
}

class RangeBuff extends Skills{
    constructor(name,image){
        super(name,image)
        this.lvl = 1
        this.value = 2
        this.description = `Increases weapon range by ${this.value} per rank`
    }
    applyBuff(player){
        for (let attack of player.weapons){
            attack.width += this.value
            attack.height += this.value
        }
    }
}

class CoolDownBuff extends Skills{
    constructor(name,image){
        super(name,image)
        this.lvl = 1
        this.value = 10
        this.description = `Reduces weapon cooldown by ${this.value} frame per rank`
    }
    applyBuff(player){
        for (let attack of player.weapons){
            attack.frame -= this.value
        }
    }
}

class ArmorBuff extends Skills{
    constructor(name,image){
        super(name,image)
        this.lvl = 1
        this.value = 2
        this.description = `Reduces enemies damages by 2% per rank`
    }
    applyBuff(player){
        player.stats.armor += this.value
    }
}

class SpeedBuff extends Skills{
    constructor(name,image){
        super(name,image)
        this.lvl = 1
        this.value = 0.1
        this.description = `Increase character speed by ${this.value} per rank`
    }
    applyBuff(player){
        player.speed += this.value
    }
}

class HealthBuff extends Skills{
    constructor(name,image){
        super(name,image)
        this.lvl = 1
        this.value = 0.1
        this.description = `Increase character health by 10% per rank`
    }
    applyBuff(player){
        player.stats.pvMax += player.stats.pvMax*this.value
    }
}

