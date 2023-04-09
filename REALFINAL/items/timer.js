export default
class Timer{
    x
    y
    remainingTime
    timerAnimation
    
    constructor(){
        this.remainingTime = 120000
        this.timerAnimation = null
        this.x = 900
        this.y = 50
    }

    startTimer(ctx) {
        const startTime = Date.now();
        const updateTimer = () => {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTime;
          this.remainingTime = 120000 - elapsedTime;
    
          const minuteString = Math.floor(this.remainingTime / 60000).toString().padStart(2, "0");
          const secondString = Math.floor((this.remainingTime % 60000) / 1000).toString().padStart(2, "0");
          const timerString = `${minuteString}:${secondString}`;
    
          ctx.font = "48px sans-serif";
          ctx.fillStyle = "white";
    
          // timer위치 여기서 지정 마지막 두 인자가 타이머가 시작하는 x, y 위치
          ctx.fillText(timerString, this.x, this.y);
    
          if (elapsedTime < 180000 && this.timerAnimation !== null) {
            this.timerAnimation = requestAnimationFrame(updateTimer);
          }
        };
    
        if (this.timerAnimation === null) {
          this.timerAnimation = requestAnimationFrame(updateTimer);
        }
      }
}