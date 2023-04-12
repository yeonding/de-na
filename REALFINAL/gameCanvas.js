import Background from "./items/background.js"
import Monster from "./items/monster.js"
import Player from "./items/player.js"
import HealthBar from "./items/healthbar.js"
import Popup  from "./items/popup.js"

export default 
class GameCanvas{
    constructor(selectedCharacter){
        this.obj = document.createElement('canvas')
        document.body.append(this.obj)
        this.obj.style.display = "none"
        this.obj.width = 1024
        this.obj.height = 576
        this.ctx = this.obj.getContext('2d')
        this.tid1 = null
        this.tid2 = null
        
        this.background = new Background()
        this.player = new Player(this.selectedCharacter, this.ctx);
        this.selectedCharacter = selectedCharacter

        this.x = Math.floor(Math.random()*1024)
        this.y = Math.floor(Math.random()*576)
        // 몬스터 
        this.monsters = []
        this.monsterImage = null
        this.monsterShowDelay = Math.floor(Math.random() * 5 + 1);
        
        // killCount
        this.killCount = 0;
        this.countMonster = document.getElementById("countmonster")


        // 헬스바
        this.healthBar = new HealthBar();

        // 찬스바
        this.popup = new Popup();

        document.addEventListener("keydown", this.handleKeyDown.bind(this));
        document.addEventListener("keyup", this.handleKeyUp.bind(this));
    }

    handleKeyDown(event) {
        if (event.keyCode === 37) { // 왼쪽 방향키를 눌렀을 때
            this.player.direction = "left";
        } else if (event.keyCode === 39) { // 오른쪽 방향키를 눌렀을 때
            this.player.direction = "right";
        } else if (event.keyCode === 38) { // 위 방향키를 눌렀을 때
            this.player.direction = "up";
        } else if (event.keyCode === 40) { // 아래 방향키를 눌렀을 때
            this.player.direction = "down";
        }
    }
    
    handleKeyUp(event) {
        if (event.keyCode === 37 || event.keyCode === 39 || event.keyCode === 38 || event.keyCode === 40) { // 왼쪽 또는 오른쪽 방향키를 떼었을 때
            this.player.direction = "stop";
        }
    }
    
    handleCharacterPosition() {
        if (this.player.position.x <= 0) {
            this.player.position.x = 0;
        }
        if (this.player.position.x >= this.obj.width - 40) {
            this.player.position.x = this.obj.width - 40;
        }
        if (this.player.position.y <= 0) {
            this.player.position.y = 0;
        }
        if (this.player.position.y >= this.obj.height - 45) {
            this.player.position.y = this.obj.height - 45;
        }
    }
    
    createMonster() {

        this.monsterShowDelay--;
        if (this.monsters.length < 100) {
            this.monsters.push(new Monster(this.player, this.obj));
            this.monsterShowDelay = Math.floor(Math.random() * 5 + 1);
    }

        for (let monster of this.monsters) {
            monster.draw();
            //monster.move();

            if (monster.health <= 0) {
                monster.drawDead()

                if(monster.deadIndex == 20){
                // setTimeout(() => {
                 let idxToRemove = this.monsters.indexOf(monster)
                 this.monsters.splice(idxToRemove, 1);
                 this.killCount++;
                }
                // }, 1000);               // 몬스터가 죽었을 때의 처리
                // monsters.splice(i, 1);
                // i--; // 삭제된 요소 이후의 요소들의 인덱스를 감소시킴
            }
        }


    }

    collision() {
        for (let monster of this.monsters) {
            this.player.collisionMonster(monster, this.healthBar)
            //console.log("충돌중" + this.healthBar.currentHealth);
            //console.log("충돌중 플레이어" + this.player.health);

        }
    }

    drawKillCount() {
        if(this.killCount>499)
        return;
        this.ctx.font = " 30px san-serif"
        this.ctx.fillStyle = "black"
        let remainingCount = 500-this.killCount;
        this.ctx.fillText(remainingCount,885,60)
    }

    drawCountMonster(){
        this.ctx.drawImage(this.countMonster,800,20,170,60)
        this.drawKillCount();
    }

    paint() {
        this.background.draw(this.ctx, this.player);
        this.player.draw(this.selectedCharacter, this.ctx);
        this.player.drawAttack(this.selectedCharacter, this.ctx);
        this.healthBar.draw(this.ctx, this.player.position.x, this.player.position.y, this.selectedCharacter);
    }

    update(){
        this.popup.updateHP(this.tid1, this.tid2, this.healthBar, this.background);
        this.createMonster();
        this.player.autoAttack(this.monsters,this.ctx,this.selectedCharacter);
        this.collision();
    }

    end(){
        if(this.healthBar.currentHealth <= 0){
            this.popup.showEnd();
            clearInterval(this.tid1); 
            clearInterval(this.tid2); 
            this.background.music.volume = 0
            this.player.hitmusic.volume = 0
        }else if(this.killCount >= 500){
            this.popup.showVictory();
            clearInterval(this.tid1); 
            clearInterval(this.tid2); 
            this.background.music.volume = 0
            this.player.hitmusic.volume = 0
        }else{
            // requestAnimationFrame(this.run())
        }
    }

      
    run() {
        this.tid1 = setInterval(() => {
            this.paint();
            this.update();
            this.drawCountMonster();
            this.end();
        }, 30);
        this.tid2 = setInterval(() => {
            for (let monster of this.monsters) {
                monster.move();
            }
        }, 45);

        this.popup.noButton.addEventListener('click', () => {
            this.tid1 = setInterval(() => {
                this.paint();
                this.update();
                this.drawCountMonster();
                this.end();
            }, 30);
            this.tid2 = setInterval(() => {
                for (let monster of this.monsters) {
                    monster.move();
                }
            }, 45);
        })

        this.popup.noButton2.addEventListener('click', () => {
            this.tid1 = setInterval(() => {
                this.paint();
                this.update();
                this.drawCountMonster();
                this.end();
            }, 30);
            this.tid2 = setInterval(() => {
                for (let monster of this.monsters) {
                    monster.move();
                }
            }, 45);
        })
      }
}

