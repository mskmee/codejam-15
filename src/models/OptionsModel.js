export class OptionsModel {
    constructor(matrixLength = null, matrix = null, matrixComplete = null,
                timer=null, moves=null, music = null, sound=null) {
        this.matrixLength = matrixLength || 4;
        this.matrixComplete = matrixComplete;
        this.matrix = matrix;
        this.timerCount = timer || 1;
        this.movesCount = moves || 0;
        this.musicPlay =  music || false;
        this.soundPlay = sound === null ? false : false;
        this.array = [];
    }

    saveGame = () => {
        const obj = {
            matrix: this.matrix,
            matrixLength: this.matrixLength,
            complete: this.matrixComplete,
            timer: this.timerCount,
            moves: this.movesCount,
            music: this.musicPlay,
            sound: this.soundPlay
        }
        localStorage.setItem('gameCondition', JSON.stringify(obj));

    }

    getSaveGame = () => {
        return JSON.parse(localStorage.getItem('gameCondition'));
    }

    saveWinner = (name, time, count, mode) => {
        if(localStorage.getItem('winners')){
            const savedData = JSON.parse(localStorage.getItem("winners"))
            if(Array.isArray(savedData)){
                this.array = savedData
            }else {
                this.array.push(savedData)
            }
        }
        const newData = {
            'name': name,
            'time': time,
            'count': count,
            'mode': `${mode}x${mode}`,
        }
        this.array.push(newData)
        localStorage.setItem("winners", JSON.stringify(this.array));
    }

    getWinners = () => {
        if(localStorage.getItem("winners")){
            return JSON.parse(localStorage.getItem("winners"))
        }
    }

}