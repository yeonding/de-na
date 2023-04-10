export default
class Popup{

    constructor(){
        // 찬스바
        this.chance = document.getElementById('chance')
        this.chanceStep = 1
        this.noStep = 1;
        this.yesButton = document.getElementById("yes-butoon");
        this.noButton = document.getElementById("no-butoon");
        this.noButton2 = document.getElementById("no-butoon2")
        this.noButton2.style.display = 'none';
        this.victory = document.getElementById('victory');
        this.end = document.getElementById("endScreenDefeat")
        this.restartButton = document.getElementById('restart-button');
        this.backto = document.getElementById("backto")

        // 비디오
        this.video = document.getElementById('video');
        this.comment = document.getElementById('video-comment');

        // 음악
        this.winmusic = document.getElementById("winmusic");
        this.winmusic.volume = 1;
        this.deathmusic = document.getElementById("deathmusic")
        this.deathmusic.volume = 1;

        this.isPaused = false;

    }

    showEnd(){
        this.end.classList.add("show");
        this.restartButton.addEventListener('click', () => {
            document.location.reload();
        });
        this.deathmusic.play();
    }

    showVictory(){
        this.victory.classList.add("show");
        this.backto.addEventListener('click', () => {
            document.location.reload();
        });
        this.winmusic.play();
    }

    showChance(){
        if (this.chanceStep != 1)
            return;
        this.chance.classList.add("show");
    }
    
    appearButton(){
        if (this.noStep != 1)
            return;
        this.noButton2.style.display = "none";
    }

    showButton(healthBar) {
        this.noStep = 2;
        this.noButton2.style.display = "block";

        this.noButton2.addEventListener('click', () => {
            this.chance.style.display = "none";
            this.video.style.display = "none";
            healthBar.currentHealth += 20;
        });
        this.comment.style.display = 'none';
    }
    
    updateHP(player, tid, healthBar){
        if (player.health <= 50) {
            if(!this.isPaused){
                clearInterval(tid); // 게임 중지
                ctx.fillText(remainingTime, x, y);
                this.isPaused = true;
                this.showChance();
        
                this.yesButton.addEventListener('click', () => {
                    this.chanceStep = 2;
                    this.chance.style.display = 'none'
                    this.video.style.display = 'block'
                    setTimeout(() => {
                        this.showButton(healthBar);
                    }, 8000);
                });
            
                this.noButton.addEventListener('click', () => {
                    this.chanceStep = 2;
                    this.chance.style.display = 'none'
                });
            
                this.appearButton();
            }
        }
    }
}