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

        this.eventmusic = document.getElementById("eventmusic");
        this.buttonmusic = document.getElementById("buttonmusic");
        this.admusic = document.getElementById("admusic");

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
        this.eventmusic.play()
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
            this.buttonmusic.play()
            healthBar.currentHealth += 20;
        });
        this.comment.style.display = 'none';
    }
    
    updateHP(tid1, tid2, healthBar, background){
        if (healthBar.currentHealth == 25) {
            if(!this.isPaused){
                clearInterval(tid1); // 게임 중지
                clearInterval(tid2); // 게임 중지
                this.isPaused = true;
                this.showChance();
        
                this.yesButton.addEventListener('click', () => {
                    this.chanceStep = 2;
                    this.chance.style.display = 'none'
                    this.buttonmusic.play()
                    this.video.style.display = 'block'
                    this.admusic.play()
                    background.music.volume = 0
                    setTimeout(() => {
                        this.showButton(healthBar);
                    }, 4000);
                });
            
                this.noButton.addEventListener('click', () => {
                    this.chanceStep = 2;
                    this.chance.style.display = 'none'
                    this.buttonmusic.play()
                });
            
                this.appearButton();
            }
        }
    }
}