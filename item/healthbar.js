export default class HealthBar {
    width;
    height;
    x;
    y;
    maxHealth;
    currentHealth;
    currentHealthWidth;

    constructor() {
        this.width = 200;
        this.height = 20;
        this.x = 20;
        this.y = 30;

        this.maxHealth = 200;
        this.currentHealth = 200;
    }
    
    draw(ctx) {
        ctx.fillStyle = 'gray';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        if(this.currentHealth >= 0) {
            ctx.fillStyle = 'skyblue';
            this.currentHealthWidth = (this.currentHealth / this.maxHealth) * this.width;
            ctx.fillRect(this.x, this.y, this.currentHealthWidth, this.height);
        }
    }
}