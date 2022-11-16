import {CreatorElements} from "@models/CreatorElements";
import {playList} from "@/music/audio";
import animationSound from "../music/animation.mp3"
import menuSound from "../music/menuMusic.mp3"
import finishedSound from "../music/winSound.mp3"

export class MusicPlayer extends CreatorElements{
    constructor(parent, options) {
        super(parent, 'audio', "", "audio");
        this.options = options
        this.counter = 0;
        this.playList = playList;
    }

    menuSoundStart = () => {
        if(this.options.soundPlay){
            this.menuSound = new Audio();
            this.menuSound.src = menuSound;
            this.menuSound.play();
        }
    }

    gameFieldSoundStart = () => {
        if(this.options.soundPlay){
            this.gameFieldSound = new Audio();
            this.gameFieldSound.src = animationSound;
            this.gameFieldSound.play();
        }
    }

    musicStart = () => {
        if(this.options.musicPlay){
            this.music = new Audio()
            this.music.src = playList[0].src;
            this.music.play()
            this.musicPlay = true;
            this.music.addEventListener('ended', this.musicPlayNext)
        }
    }

    musicPlayNext = () => {
        if(this.counter === this.playList.length){
            this.counter = 0;
        }else {
            this.counter++;
        }
        this.music.src = playList[this.counter].src;
        this.music.play();
    }

    musicStopPlay = () => {
        this.music.pause();
        this.music.currentTime = 0;
        this.options.musicPlay = false;
    }

    playWinSound = () => {
        if(this.options.soundPlay){
            const music = new Audio();
            music.src = finishedSound;
            music.play();
        }

    }
}