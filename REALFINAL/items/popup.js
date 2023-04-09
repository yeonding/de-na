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

        // 비디오
        this.video = document.getElementById('video');
        this.comment = document.getElementById('video-comment');

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

    showButton() {
        this.noStep = 2;
        this.noButton2.style.display = "block";

        this.noButton2.addEventListener('click', () => {
            this.chance.style.display = "none";
            this.video.style.display = "none";
        });
        this.comment.style.display = 'none';
    }
    
    updateHP(player){
        if (player.health <= 50) {
            this.showChance();
        
            this.yesButton.addEventListener('click', () => {
                this.chanceStep = 2;
                this.chance.style.display = 'none'
                this.video.style.display = 'block'
            });
        
            this.noButton.addEventListener('click', () => {
              this.chanceStep = 2;
              this.chance.style.display = 'none'
            });
        
            this.appearButton();

            setTimeout(() => {
                this.showButton();
            }, 8000);
        }
    }
}