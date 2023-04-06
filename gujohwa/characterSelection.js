
export default
class SelectCharacter{

    //캐릭터 선택
    constructor(characterSelection){
        this.ch1 = document.getElementById('ch1');
        this.ch2 = document.getElementById('ch2');
        this.ch3 = document.getElementById('ch3');
        this.ch4 = document.getElementById('ch4');
        this.ch5 = document.getElementById('ch5');
    }
    
    selectCharacter(characterSelection){
        ch1.addEventListener('click', function() {
            // 캐릭터1을 선택했을 때
            console.log('캐릭터1을 선택했습니다.');
            selectedCharacter = new Character(ch1);
            startButton.style.display = 'block';
            ch1.style.background = 'skyblue';
            ch2.style.background =  'none';
            ch3.style.background =  'none';
            show.play();
        });
        
        ch2.addEventListener('click', function() {
            // 캐릭터2을 선택했을 때
            console.log('캐릭터2을 선택했습니다.');
            selectedCharacter = ch2;
            startButton.style.display = 'block';
            ch2.style.background = 'skyblue';
            ch1.style.background =  'none';
            ch3.style.background =  'none';
            show.play();
        });
        
        ch3.addEventListener('click', function() {
            // 캐릭터3을 선택했을 때
            console.log('캐릭터3을 선택했습니다.');
            selectedCharacter = ch3;
            startButton.style.display = 'block';
            ch3.style.background = 'skyblue';
            ch1.style.background =  'none';
            ch2.style.background =  'none';
            show.play();
        });
        }
}
