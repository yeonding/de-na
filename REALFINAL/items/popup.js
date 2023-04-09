export default
class Popup{

    constructor(){
        // 찬스바
        this.chance = document.getElementById('chance')
        this.chanceStep = 1
        this.yesButton = document.getElementById("yes-butoon");
        this.noButton = document.getElementById("no-butoon");
        this.noButton2 = document.getElementById("no-butoon2")
        this.noStep = 1;

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
        this.noButton2.classList.add("show");
    }

    showButton() {
        this.noStep = 2;
        this.noButton2.classList.add("show");

        this.noButton2.addEventListener('click', () => {
          this.chance.classList.add("hidden");
          this.video.classList.add("hidden");
        });
        this.comment.classList.add("hidden");
      }
    
    updateHP(player){
        if (player.health <= 50) {
            this.showChance();
        
            this.yesButton.addEventListener('click', () => {
              this.chanceStep = 2;
              this.chance.classList.add("hidden");
              this.video.classList.add("show");
            });
        
            this.noButton.addEventListener('click', () => {
              this.chanceStep = 2;
              this.chance.classList.add("hidden");
            });
        
            this.appearButton();

            setTimeout(this.showButton(), 8000);
          }
    }
}