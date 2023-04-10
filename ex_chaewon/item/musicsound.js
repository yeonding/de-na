export default class MusicSound{
    
    constructor(){
        this.music = document.getElementById("music");
        this.bgmusic = document.getElementById("bgmusic");
        this.hitmusic = document.getElementById("hitmusic");
        this.deathmusic = document.getElementById("deathmusic")
        this.winmusic = document.getElementById("winmusic");
        this.show = document.getElementById("show");

        this.music.volume = 0.25;
        this.bgmusic.volume = 1;
        this.hitmusic.volume = 1;
        this.deathmusic.volume = 1;
        this.winmusic.volume = 1;
        this.show.volume = 1;

    }
}



