export default class HealthBar {
    width;
    height;
    x;
    y;
    maxHealth;
    currentHealth;
    currentHealthWidth;

    constructor() {
        this.width = 50;
        this.height = 8;
        this.x;
        this.y;

        this.maxHealth = 50;
        this.currentHealth = 50;
    }
    
    draw(ctx,x,y,selectedCharacter) {
        this.selectedCharacter = selectedCharacter
        this.x = x
        this.y = y-12
        ctx.fillStyle = 'gray';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        if(selectedCharacter==ch1)    
            if(this.currentHealth >= 0) {
                ctx.fillStyle = 'skyblue';
                this.currentHealthWidth = (this.currentHealth / this.maxHealth) * this.width;
                ctx.fillRect(this.x, this.y, this.currentHealthWidth, this.height);
            }
        if(selectedCharacter==ch2||selectedCharacter==ch3)
            if(this.currentHealth >= 0) {
                ctx.fillStyle = 'skyblue';
                this.currentHealthWidth = (this.currentHealth / this.maxHealth) * this.width;
                ctx.fillRect(this.x, this.y, this.currentHealthWidth, this.height);
            }
       

    }
}