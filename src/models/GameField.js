import {CreatorElements} from "@models/CreatorElements";
import {WinWindow} from "@models/WinWindow";

export class GameField extends CreatorElements{
    constructor(parent, matrix, matrixComplete, data, audio) {
        super(parent, "div", "", "game__field");
        this.matrix = matrix;
        this.matrixComplete = matrixComplete;
        this.createPuzzles();
        this.element.onclick = this.setNewPuzzlePosition;
        this.gameData = data;
        this.timer = this.gameData.timerStart;
        this.timerOn = false;
        this.audio = audio;
    }

    createPuzzles = () => {
        for(let y = 0; y < this.matrix.length; y++){
            for(let x = 0; x < this.matrix.length; x++){
                const element = document.createElement('div');
                element.classList.add('puzzle-element', `${this.matrix[y][x]}`)
                if(this.matrix[y][x] !== 0){
                    element.textContent = this.matrix[y][x];
                }else{
                    element.textContent = "";
                    element.classList.add("blank");
                }
                this.width = (100 / this.matrix.length);
                element.style.width = `${this.width}%`;
                element.style.height = `${this.width}%`;
                this.element.append(element);
            }
        }
        this.nodeArr = Array.from(this.element.querySelectorAll(".puzzle-element"));
        this.setMatrixPosition()
    }

    setMatrixPosition = () => {
        for(let y = 0; y < this.matrix.length; y++){
            for(let x = 0; x < this.matrix.length; x++){
                const value = this.matrix[y][x];
                this.nodeArr.forEach(item => {
                    if(+item.classList[1] === +value){
                        this.setNodeStyle(item, x, y);
                    }
                })
            }
        }
    }

    setNodeStyle = (node, x, y) => {
        const shiftPs = 100;
        node.style.transform = `translate3D(${x * shiftPs}%, ${y * shiftPs}%, 0)`;
    }

    setNewPuzzlePosition = (e) =>{
        const puzzleBlank = 0;
        const puzzleNumber = e.target.classList[1];
        if(typeof puzzleNumber !== "undefined"){
            const puzzleCoords = this.getPuzzleCoords(+puzzleNumber);
            const blankPuzzleCoords = this.getPuzzleCoords(puzzleBlank);
            const isValid = this.isSwapValid(puzzleCoords, blankPuzzleCoords);
            if(isValid){
                this.swapPuzzle(puzzleCoords, blankPuzzleCoords);
                this.setMatrixPosition();
                const winCondition = this.setWin()
                this.gameDataStart();
                this.audio.gameFieldSoundStart();
                if(winCondition){
                    const win = new WinWindow(this.gameData.timeForSave, this.gameData.count, this.matrix.length);
                    this.audio.playWinSound();
                    win.element.classList.add("_active");
                    this.element.remove();
                }
            }
        }
    }

    setWin = () => {
        const matrixToRow = this.matrix.flat();
        for(let i = 0; i < matrixToRow.length; i++){
            if(+matrixToRow[i] !== +this.matrixComplete[i]){
                return false
            }
        }
        return true
    }

    getPuzzleCoords = (num) => {
        for(let y = 0; y < this.matrix.length; y++){
            for(let x = 0; x < this.matrix.length; x++){
                const value = this.matrix[y][x];
                if(value === num){
                    return {y, x};
                }
            }
        }
    }

    swapPuzzle = (puzzleCoords, blankCoords) => {
        const puzzleNumber = this.matrix[puzzleCoords.y][puzzleCoords.x];
        this.matrix[puzzleCoords.y][puzzleCoords.x] = this.matrix[blankCoords.y][blankCoords.x];
        this.matrix[blankCoords.y][blankCoords.x] = puzzleNumber;
    }

    isSwapValid = (puzzleCoords, blankCoords) => {
        const diffX = Math.abs(puzzleCoords.x - blankCoords.x);
        const diffY = Math.abs(puzzleCoords.y - blankCoords.y)
        return (diffX === 1 || diffY === 1) && (puzzleCoords.x === blankCoords.x ||
            puzzleCoords.y === blankCoords.y)
    }

    gameDataStart = () => {
        if(!this.timerOn){
            this.t = this.timer()
            this.timerOn = true;
        }
        this.gameData.count++;
        this.gameData.changeSteps(this.gameData.count);
    }
}