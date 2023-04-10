import Background from "./items/background.js"
import Monster from "./items/monster.js"
import Player from "./items/player.js"
import Timer from "./items/timer.js"
import HealthBar from "./items/healthbar.js"

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

        // 타이머
        this.timer = new Timer();

        // 헬스바
        this.healthBar = new HealthBar();

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
        if (this.monsters.length < 100) {
            // 몬스터를 캔버스 외부에서 생성
            const canvasWidth = this.obj.width;
            const canvasHeight = this.obj.height;
            const playerX = this.player.position.x;
            const playerY = this.player.position.y;
            const monsterSize = 40;
            const borderMargin = 50;
            let monsterX, monsterY;

            // 플레이어가 중앙에 있는 경우
            if (playerX > canvasWidth / 3 && playerX < canvasWidth * 2 / 3) {
                monsterX = Math.random() > 0.5 ? -borderMargin - monsterSize : canvasWidth + borderMargin;
                monsterY = Math.random() * canvasHeight;
            }
            // 플레이어가 상단에 있는 경우
            else if (playerY < canvasHeight / 3) {
                monsterX = Math.random() * canvasWidth;
                monsterY = Math.random() > 0.5 ? canvasHeight + borderMargin : -borderMargin - monsterSize;
            }
            // 플레이어가 하단에 있는 경우
            else {
                monsterX = Math.random() * canvasWidth;
                monsterY = Math.random() > 0.5 ? -borderMargin - monsterSize : canvasHeight + borderMargin;
            }
            const monster = {
                position: { x: monsterX, y: monsterY },
                direction: 0,
                speed: 1,
                size: 40,
            };
            this.monsters.push(new Monster(this.player, this.obj, monster));
        }
        for (let monster of this.monsters) {
            monster.draw();
            monster.move();
           
        }
    }
    
    collision(){
        for ( let monster of this.monsters) {
            this.player.collisionMonster(monster,this.healthBar)
        }
    }

    paint() {
        this.background.draw(this.ctx, this.player);
        this.player.draw(this.selectedCharacter, this.ctx);
        this.player.drawAttack(this.selectedCharacter, this.ctx);
        this.timer.startTimer(this.ctx);
        this.healthBar.draw(this.ctx, this.player.position.x, this.player.position.y, this.selectedCharacter);
    }
      
    run() {
        //this.timer.timerAnimation = null;
        this.tid = setInterval(() => {
            this.paint();
            this.createMonster();
            this.player.autoAttack(this.monsters);
            this.collision();
            console.log(this.healthBar.currentHealth);

            
        }, 30);
      }
    
}

