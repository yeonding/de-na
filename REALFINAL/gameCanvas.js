import Background from "./items/background.js";
import Monster from "./items/monster.js";
import Player from "./items/player.js";
import HealthBar from "./items/healthbar.js";
import Popup from "./items/popup.js";

export default
    class GameCanvas {
    constructor(selectedCharacter) {
        this.obj = document.createElement('canvas');
        document.body.append(this.obj);
        this.obj.style.display = "none";
        this.obj.width = 1024;
        this.obj.height = 576;
        this.ctx = this.obj.getContext('2d');
        this.tid1 = null;
        this.tid2 = null;

        this.background = new Background();
        this.player = new Player(this.selectedCharacter, this.ctx);
        this.selectedCharacter = selectedCharacter;

        this.x = Math.floor(Math.random() * 1024);
        this.y = Math.floor(Math.random() * 576);
        // 몬스터 
        this.monsters = [];
        this.monsterImage = null;
        this.monsterShowDelay = Math.floor(Math.random() * 5 + 1);

        // killCount
        this.killCount = 0;
        this.countMonster = document.getElementById("countmonster");

        // 헬스바
        this.healthBar = new HealthBar();

        // 찬스바
        this.popup = new Popup();

        // 공격력 상승
        this.comment1 = document.getElementById('comment1');
        this.comment2 = document.getElementById('comment2');
        this.comment3 = document.getElementById('comment3');
        this.comment = document.getElementById('comment');

        document.addEventListener("keydown", this.handleKeyDown.bind(this));
        document.addEventListener("keyup", this.handleKeyUp.bind(this));

        //소리 조절
        this.audioplay = document.getElementById("audioplay");
        this.audioplay.addEventListener("click", this.handleClick.bind(this));
        this.audiomute = document.getElementById("audiomute");
        this.audiomute.addEventListener("click", this.handleClick.bind(this));
        this.obj.addEventListener("click", this.handleClick.bind(this));
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

    handleClick(event) {
        const x = event.offsetX;
        const y = event.offsetY;

        // 오디오 이미지를 클릭했을 경우
        if (x >= 10 && x <= 35 && y >= 10 && y <= 35) {
            if (!this.background.music.muted) {
                this.background.music.pause();
                this.player.hitmusic.pause();
                this.background.music.muted = true;
                this.player.hitmusic.muted = true;

                console.log("음악 일시정지");
            } else {
                this.background.music.play();
                this.player.hitmusic.play();
                this.background.music.muted = false;
                this.player.hitmusic.muted = false;
                console.log("음악 재생 중");
            }
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
            if (this.killCount < 250)
                monster.draw();
            else {
                monster.secondDraw();
                monster.att = 3;
                monster.speed = Math.floor((Math.random() * 4) + 1.2);
            }

            if (monster.health <= 0) {
                if (this.killCount < 250)
                    monster.drawDead();
                else{
                    monster.drawSecondDead();
                }

                if (monster.deadIndex == 20) {
                    let idxToRemove = this.monsters.indexOf(monster);
                    this.monsters.splice(idxToRemove, 1);
                    this.killCount++;
                }
            }
        }
    }
    
    drawDialog(){
        if( 248 <= this.killCount && this.killCount <= 268 ){
            this.drawAlert(this.selectedCharacter);
            this.comment.classList.add('show');
        }else{
            this.comment.classList.remove('show');
        }
    }

    drawAlert(selectedCharacter){
        this.selectedCharacter = selectedCharacter;
        switch(selectedCharacter){
            case 1:
                this.ctx.drawImage(this.comment1, this.obj.width/4-100, 400);
                break;
            case 2 :
                this.ctx.drawImage(this.comment2, this.obj.width/4-100, 400);
                break;
            case 3:
                this.ctx.drawImage(this.comment3, this.obj.width/4-100, 400);
                break;
        }
    }

    collision() {
        for (let monster of this.monsters) {
            this.player.collisionMonster(monster, this.healthBar);
        }
    }

    drawKillCount() {
        this.ctx.font = " 30px san-serif";
        this.ctx.fillStyle = "black";
        let remainingCount = (500 - this.killCount>0)?(500 - this.killCount):0;
        this.ctx.fillText(remainingCount, 885, 68);
    }

    drawCountMonster() {
        this.ctx.drawImage(this.countMonster, 800, 5, 170, 85);
        this.drawKillCount();
    }

    paint() {
        this.background.draw(this.ctx, this.player);
        this.player.draw(this.selectedCharacter, this.ctx);
        this.player.drawAttack(this.selectedCharacter, this.ctx);
        this.healthBar.draw(this.ctx, this.player.position.x, this.player.position.y, this.selectedCharacter);
        if(this.background.music.muted == false && this.player.hitmusic.muted == false)
            this.ctx.drawImage(this.audioplay, 10, 10, 25, 25);
        else
            this.ctx.drawImage(this.audiomute, 10, 10, 25, 25);
    }

    update() {
        // this.handleClick();
        this.popup.updateHP(this.tid1, this.tid2, this.healthBar, this.background, this.killCount);
        this.createMonster();
        this.player.autoAttack(this.monsters, this.ctx, this.selectedCharacter);
        this.drawDialog();
        this.collision();
    }

    end() {
        if (this.healthBar.currentHealth <= 0) {
            this.popup.showEnd();
            clearInterval(this.tid1);
            clearInterval(this.tid2);
            this.background.music.volume = 0;
            this.player.hitmusic.volume = 0;
        } else if (this.killCount >= 500) {
            this.popup.showVictory();
            clearInterval(this.tid1);
            clearInterval(this.tid2);
            this.background.music.volume = 0;
            this.player.hitmusic.volume = 0;
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

