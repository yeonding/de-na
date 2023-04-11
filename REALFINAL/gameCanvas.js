import Background from "./items/background.js"
import Monster from "./items/monster.js"
import Player from "./items/player.js"
import Timer from "./items/timer.js"
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
        this.tid = null
        
        this.background = new Background()
        this.player = new Player(this.selectedCharacter, this.ctx);
        this.selectedCharacter = selectedCharacter

        this.x = Math.floor(Math.random()*1024)
        this.y = Math.floor(Math.random()*576)
        // 몬스터 
        this.monsters = []
        this.monsterImage = null
        this.monsterShowDelay = Math.floor(Math.random() * 5 + 1);

        // 타이머
        this.timer = new Timer();

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
        if (this.monsters.length < 150) {
            this.monsters.push(new Monster(this.player, this.obj));
            this.monsterShowDelay = Math.floor(Math.random() * 5 + 1);
    }

        for (let monster of this.monsters) {
            monster.draw();
            // monster.move();
        }
    }

    collision() {
        for (let monster of this.monsters) {
            this.player.collisionMonster(monster, this.healthBar)
            console.log("충돌중" + this.healthBar.currentHealth);
            console.log("충돌중 플레이어" + this.player.health);
        }
    }

    paint() {
        this.background.draw(this.ctx, this.player);
        this.player.draw(this.selectedCharacter, this.ctx);
        this.player.drawAttack(this.selectedCharacter, this.ctx);
        this.timer.startTimer(this.ctx);
        this.healthBar.draw(this.ctx, this.player.position.x, this.player.position.y, this.selectedCharacter);
    }

    update(){
        this.popup.updateHP(this.player, this.tid, this.healthBar);
    }

    end(){
        if(this.healthBar.currentHealth ==0){
            this.popup.showEnd();
            clearInterval(this.tid); 
            cancelAnimationFrame(this.timer.timerAnimation);
        }else if(this.timer.remainingTime <= 0){
            this.popup.showVictory();
            clearInterval(this.tid); 
            cancelAnimationFrame(this.timer.timerAnimation);
        }else{
            // requestAnimationFrame(this.run())
        }
    }
      
    run() {
        this.timer.timerAnimation = null;
        this.tid = setInterval(() => {
            this.paint();
            this.update();
            this.createMonster();
            this.player.autoAttack(this.monsters);
            this.collision();
            this.end();
        }, 30);
        this.tid = setInterval(() => {
            for (let monster of this.monsters) {
                monster.move();
            }
        }, 45);

        this.popup.noButton.addEventListener('click', () => {
            this.tid = setInterval(() => {
                this.paint();
                this.update();
                this.createMonster();
                this.player.autoAttack(this.monsters);
                this.collision();
                this.end();
            }, 30);
            this.tid = setInterval(() => {
                for (let monster of this.monsters) {
                    monster.move();
                }
            }, 45);
        })

        this.popup.noButton2.addEventListener('click', () => {
            this.tid = setInterval(() => {
                this.paint();
                this.update();
                this.createMonster();
                this.player.autoAttack(this.monsters);
                this.collision();
                this.end();
            }, 30);
            this.tid = setInterval(() => {
                for (let monster of this.monsters) {
                    monster.move();
                }
            }, 45);
        })
      }
    
}

