export default class Monster {
    position = { x: 0, y: 0 }
    size
    speed
    direction
    health
    monsterLeftImage
    monsterRightImage
    // monsters

    constructor(player) {
        // 몬스터의 위치 랜덤으로 생성하기
        this.position.x = Math.floor(Math.random() * 4480);
        this.position.y = Math.floor(Math.random() * 2560);
        // 몬스터의 크기 랜덤으로 생성하기
        this.size = Math.floor(Math.random() * 50 + 20);
        // 몬스터 이동 속도 랜덤으로 생성하기
        this.speed = Math.floor(Math.random() * 2 + 1);
        // 몬스터 이동 방향 랜덤으로 생성하기
        // const direction = Math.random() * 2 * Math.PI;
        this.direction = Math.atan2(player.position.y - this.position.y, player.position.x - this.position.x);
        // 몬스터 정보를 객체로 저장하고 배열에 추가하기
        this.health = 100;
        this.monsterLeftImage = document.getElementById('monsterLeft');
        this.monsterRightImage = document.getElementById('monsterRight');
        // this.monsters = [];
    }

    draw(player, monsters, ctx) {
        let frameIndex = 4; // 스프라이트 이미지에서 사용할 프레임 인덱스
        let spriteX = 0; // 스프라이트 이미지에서 사용할 x 좌표
        let spriteY = 0; // 스프라이트 이미지에서 사용할 y 좌표
        frameIndex = Math.floor(Date.now() / 500) % 4;
        spriteX = frameIndex * 40; 
        let monsterLeftImage = this.monsterLeftImage;
        let monsterRightImage = this.monsterRightImage;

        for (let i = 0; i < monsters.length-i; i++) {
            let monster = monsters[i];
            if (monster.position.x > player.position.x + 25) {
                ctx.drawImage(monsterLeftImage, spriteX, spriteY, 40, 40, monster.position.x, monster.position.x, 40, 40);
            } else {
                ctx.drawImage(monsterRightImage, spriteX, spriteY, 40, 40, monster.position.y, monster.position.y, 40, 40);
            }
        }
        console.log("draw 확인");
    }

    create(healthBar, monsters) {
        // if (monsters.length <= 250) {
        //     monster.push({
        //         x: this.position.x,
        //         y: this.position.y,
        //         size: this.size,
        //         speed: this.speed,
        //         direction: this.direction,
        //         health: this.health,
        //         monsterLeftImage: this.monsterLeftImage,
        //         monsterRightImage: this.monsterRightImage
        //     });
        // };
        if(monsters.length <= 250) {
            let monster = monsters[i];
            monsters.push(monster);
        }
        console.log(healthBar.currentHealth);
    }

    move(canvas, player, monsters) {
        for(let i=0; i < monsters.length; i++) {
            let monster = monsters[i];
        // 몬스터의 위치 변경
        monster.position.x += monster.speed * Math.cos(monster.direction);
        monster.position.y += monster.speed * Math.sin(monster.direction);

        // 화면 밖으로 나갔을 경우 위치 초기화
        if (monster.position.x < -monster.size) {
            monster.position.x = canvas.width + monster.size;
        } else if (monster.position.x > canvas.width + monster.size) {
            monster.position.x = -monster.size;
        }

        if (monster.position.y < -monster.size) {
            monster.position.y = canvas.height + monster.size;
        } else if (monster.position.y > canvas.height + monster.size) {
            monster.position.y = -monster.size;
        }

        monster.direction = Math.atan2(player.position.y - monster.position.y, player.position.x - monster.position.x);
        console.log("move 확인");
    }
}

}