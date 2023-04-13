export default
    class Player {
    position = { x: 0, y: 0 };
    attackRange;
    attackImage1;
    attackImage2;
    attackImage3;
    speed;
    direction;
    ctx = { width: 1024, height: 576 };
    hitmusic;

    deadIndex;
    indexDelay;

    constructor(selectedCharacter) {
        this.selectedCharacter = selectedCharacter;
        this.position.x = this.ctx.width / 2;
        this.position.y = this.ctx.height / 2;
        this.attackRange = 70;

        this.speed = 2;
        this.direction = "stop";

        this.deadIndex = 0;
        this.indexDelay = 7;


        this.attackImage1 = document.getElementById("attackImg1");
        this.attackImage2 = document.getElementById("attackImg2");
        this.attackImage3 = document.getElementById("attackImg44");
        this.attacked1 = document.getElementById("attaked1");
        this.attacked2 = document.getElementById("attaked2");

        this.ch1Front = document.getElementById("ch1Front");
        this.ch1Back = document.getElementById("ch1Back");
        this.ch1Left = document.getElementById("ch1Left");
        this.ch1Right = document.getElementById("ch1Right");
        this.ch1Stop = document.getElementById("ch1Stop");

        this.ch2Front = document.getElementById("ch2Front");
        this.ch2Back = document.getElementById("ch2Back");
        this.ch2Left = document.getElementById("ch2Left");
        this.ch2Right = document.getElementById("ch2Right");
        this.ch2Stop = document.getElementById("ch2Stop");

        this.ch3Front = document.getElementById("ch3Front");
        this.ch3Back = document.getElementById("ch3Back");
        this.ch3Left = document.getElementById("ch3Left");
        this.ch3Right = document.getElementById("ch3Right");
        this.ch3Stop = document.getElementById("ch3Stop");

        this.hitmusic = document.getElementById("hitmusic");
        this.hitmusic.volume = 0.5;
    }

    // 플레이어가 몬스터를 공격하는 함수
    autoAttack(monsters, ctx, selectedCharacter) {
        
        for (let i = 0; i < monsters.length; i++) {
            let monster = monsters[i];
            // 플레이어-몬스터간 이동 거리 계산
            let dx = this.position.x - monster.position.x;
            let dy = this.position.y - monster.position.y;
            let d = Math.sqrt(dx * dx + dy * dy);

            // 플레이어와 몬스터의 거리가 공격 범위 이내에 있다면
            if (d < this.attackRange) {
                let attacked1 = this.attacked1;
                let attacked2 = this.attacked2;
                let attackImage3 = this.attackImage3;
                let spriteX = 0;
                let spriteY = 0;
                let frameIndex = 0;
                spriteX = frameIndex * 32;
                switch (selectedCharacter) {
                    case 1:
                        frameIndex = Math.floor(Date.now() / 300) % 6;       
                        spriteX = frameIndex * 32;
                        ctx.drawImage(attacked1, spriteX, spriteY, 32, 32, monster.position.x, monster.position.y, 62, 62);
                        break
                    case 2:
                        frameIndex = Math.floor(Date.now() / 200) % 8;       
                        spriteX = frameIndex * 30;
                        ctx.drawImage(attacked2, spriteX, spriteY, 30, 28, monster.position.x, monster.position.y, 40, 38);
                        break
                    case 3:
                        frameIndex = Math.floor(Date.now() / 500) % 8;       
                        spriteX = frameIndex * 20;
                        ctx.drawImage(attackImage3, spriteX, spriteY, 20, 28, monster.position.x, monster.position.y, 70, 70);
                        break
                }
                monster.health -= 100;
                this.hitmusic.play();
            }
        }
    }
    // 플레이어와 몬스터 충돌 시 플레이어 체력 닳기
    collisionMonster(monster, healthBar) {

        const knockbackDistance = 10;
        const knockbackDirection = Math.atan2(this.position.y - monster.position.y, this.position.x - monster.position.x);
        const knockbackX = knockbackDistance * Math.cos(knockbackDirection);
        const knockbackY = knockbackDistance * Math.sin(knockbackDirection);

        const playerSize = 20; // 플레이어 이미지의 가로 길이
        // const playerOffsetX = 20; // 플레이어 이미지의 중심점을 기준으로 한 X축의 위치
        // const playerOffsetY = 15; // 플레이어 이미지의 중심점을 기준으로 한 Y축의 위치
        const pushbackDistance = 100; // 넉백 거리

        if (this.position.x < monster.position.x + monster.size &&
            this.position.x + playerSize > monster.position.x &&
            this.position.y < monster.position.y + monster.size &&
            15 + this.position.y > monster.position.y) {
            // 충돌한 경우
            healthBar.currentHealth -= monster.att;

            // 충돌 시,  플레이어 넉백
            this.position.x += knockbackX;
            this.position.y += knockbackY;

            // 충돌 시, 몬스터를 플레이어 쪽으로 넉백
            const pushbackAngle = Math.atan2(monster.position.y - this.position.y, monster.position.x - this.position.x);
            monster.position.x += pushbackDistance * Math.cos(pushbackAngle);
            monster.position.y += pushbackDistance * Math.sin(pushbackAngle);
        }
    }


    drawAttack(selectedCharacter, ctx) {
        let attackImage1 = this.attackImage1;
        let attackImage2 = this.attackImage2;
        let attackImage3 = this.attackImage3;
        let spriteX = 0;
        let spriteY = 0;
        let frameIndex = 0;
        frameIndex = Math.floor(Date.now() / 500) % 4;
        spriteX = frameIndex * 32;

        switch (selectedCharacter) {
            case 1:
                ctx.drawImage(attackImage1, spriteX, spriteY, 32, 32, this.position.x - 70, this.position.y - 70, 180, 180);
                break;
            case 2:
                ctx.drawImage(attackImage2, spriteX, spriteY, 32, 48, this.position.x - 10, this.position.y - 5, 32, 48);
                break;
            case 3:
                frameIndex = Math.floor(Date.now() / Math.random()*300+100) % 8;       
                let frameSlowIndex =  Math.floor(Date.now() / 800) % 8;
                spriteX = frameIndex * 20;
                let spriteSlowX = frameSlowIndex * 20;
                ctx.drawImage(attackImage3, spriteX, spriteY, 20, 28, this.position.x + (Math.random()*140-70), this.position.y - (Math.random()*140-70), 46, 46);
                ctx.drawImage(attackImage3, spriteSlowX, spriteY, 20, 28, this.position.x + (Math.random()*140-70), this.position.y + (Math.random()*140-70)+1, 50, 58);
                ctx.drawImage(attackImage3, spriteSlowX, spriteY, 20, 28, this.position.x - (Math.random()*10+(-10)), this.position.y - (Math.random()*10+2)+1, 20, 28);
                ctx.drawImage(attackImage3, spriteX, spriteY, 20, 28, this.position.x - (Math.random()*30+20), this.position.y - (Math.random()*30+20), 46, 46);
                ctx.drawImage(attackImage3, spriteX, spriteY, 20, 28, this.position.x - (Math.random()*20+10), this.position.y + (Math.random()*10+10), 46, 46);
                break;
        }
    }


    draw(selectedCharacter, ctx) {
        console.log(`선택된 캐릭터는 ${selectedCharacter} 입니다`);
        let speed = 2;
        let direction = this.direction;
        let frameIndex = 4; // 스프라이트 이미지에서 사용할 프레임 인덱스
        let spriteX = 0; // 스프라이트 이미지에서 사용할 x 좌표
        let spriteY = 0; // 스프라이트 이미지에서 사용할 y 좌표

        switch (selectedCharacter) {
            case 1: {
                console.log('캐릭터1 그리기');
                if (this.direction === "stop") {
                    frameIndex = Math.floor(Date.now() / 500) % 2;
                    spriteX = frameIndex * 48;
                    ctx.drawImage(this.ch1Stop, spriteX, spriteY, 48, 48, this.position.x, this.position.y, 48, 48);
                }
                if (this.direction === "left") {
                    frameIndex = Math.floor(Date.now() / 100) % 4;
                    spriteX = frameIndex * 48;
                    this.position.x -= speed;
                    ctx.drawImage(this.ch1Left, spriteX, spriteY, 48, 48, this.position.x, this.position.y, 48, 48);
                }
                if (this.direction === "up") {
                    frameIndex = Math.floor(Date.now() / 100) % 4;
                    spriteX = frameIndex * 48;
                    this.position.y -= speed;
                    ctx.drawImage(this.ch1Back, spriteX, spriteY, 48, 48, this.position.x, this.position.y, 48, 48);

                }
                if (this.direction === "down") {
                    frameIndex = Math.floor(Date.now() / 100) % 4;
                    spriteX = frameIndex * 48;
                    this.position.y += speed;
                    ctx.drawImage(this.ch1Front, spriteX, spriteY, 48, 48, this.position.x, this.position.y, 48, 48);
                }
                else if (this.direction === "right") {
                    frameIndex = Math.floor(Date.now() / 100) % 4;
                    spriteX = frameIndex * 48;
                    this.position.x += speed;
                    ctx.drawImage(this.ch1Right, spriteX, spriteY, 48, 48, this.position.x, this.position.y, 48, 48);
                }
            }
                break;

            case 2: {
                if (direction === "stop") {
                    frameIndex = Math.floor(Date.now() / 500) % 2;
                    spriteX = frameIndex * 16;
                }
                if (direction === "left") {
                    frameIndex = Math.floor(Date.now() / 100) % 4;
                    spriteY = frameIndex * 16;
                    this.position.x -= speed;
                }
                if (direction === "up") {
                    frameIndex = Math.floor(Date.now() / 100) % 4;
                    spriteY = frameIndex * 16;
                    this.position.y -= speed;
                }
                if (direction === "down") {
                    frameIndex = Math.floor(Date.now() / 100) % 4;
                    spriteY = frameIndex * 16;
                    this.position.y += speed;
                }
                else if (direction === "right") {
                    frameIndex = Math.floor(Date.now() / 100) % 4;
                    spriteY = frameIndex * 16;
                    this.position.x += speed;
                }

                if (direction == 'stop')
                    ctx.drawImage(this.ch2Stop, spriteX, spriteY, 16, 16, this.position.x, this.position.y, 16, 16);
                if (direction == 'up')
                    ctx.drawImage(this.ch2Back, spriteX, spriteY, 16, 16, this.position.x, this.position.y, 16, 16);
                if (direction == 'down')
                    ctx.drawImage(this.ch2Front, spriteX, spriteY, 16, 16, this.position.x, this.position.y, 16, 16);
                if (direction === "left") {
                    ctx.drawImage(this.ch2Left, spriteX, spriteY, 16, 16, this.position.x, this.position.y, 16, 16);
                }
                if (direction === "right") {
                    ctx.drawImage(this.ch2Right, spriteX, spriteY, 16, 16, this.position.x, this.position.y, 16, 16);
                }
            }
                break;

            case 3: {
                if (direction === "stop") {
                    frameIndex = Math.floor(Date.now() / 500) % 2;
                    spriteX = frameIndex * 16;
                }
                if (direction === "left") {
                    frameIndex = Math.floor(Date.now() / 100) % 4;
                    spriteY = frameIndex * 16;
                    this.position.x -= speed;
                }
                if (direction === "up") {
                    frameIndex = Math.floor(Date.now() / 100) % 4;
                    spriteY = frameIndex * 16;
                    this.position.y -= speed;
                }
                if (direction === "down") {
                    frameIndex = Math.floor(Date.now() / 100) % 4;
                    spriteY = frameIndex * 16;
                    this.position.y += speed;
                }
                else if (direction === "right") {
                    frameIndex = Math.floor(Date.now() / 100) % 4;
                    spriteY = frameIndex * 16;
                    this.position.x += speed;
                }

                if (direction == 'stop')
                    ctx.drawImage(this.ch3Stop, spriteX, spriteY, 16, 16, this.position.x, this.position.y, 16, 16);
                if (direction == 'up')
                    ctx.drawImage(this.ch3Back, spriteX, spriteY, 16, 16, this.position.x, this.position.y, 16, 16);
                if (direction == 'down')
                    ctx.drawImage(this.ch3Front, spriteX, spriteY, 16, 16, this.position.x, this.position.y, 16, 16);
                if (direction === "left") {
                    ctx.drawImage(this.ch3Left, spriteX, spriteY, 16, 16, this.position.x, this.position.y, 16, 16);
                }
                if (direction === "right") {
                    ctx.drawImage(this.ch3Right, spriteX, spriteY, 16, 16, this.position.x, this.position.y, 16, 16);
                }
            }
                break;
        }
        if (this.position.x <= 0) {
            this.position.x = 0;
        }
        if (this.position.x >= this.ctx.width - 40) {
            this.position.x = this.ctx.width - 40;
        }
        if (this.position.y <= 0) {
            this.position.y = 0;
        }
        if (this.position.y >= this.ctx.height - 45) {
            this.position.y = this.ctx.height - 45;
        }
    }
}