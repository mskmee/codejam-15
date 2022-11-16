export class MatrixCreator {
    constructor(size, matrix = null) {
        this.size = matrix ? matrix.length : size;
        this.matrixComplete = this.generateArray();
        this.matrix = matrix || this.generateMatrix();
    }

    generateMatrix = () => {
        let check = false;
        const arr = this.generateArray();
        while (!check){
            this.shuffleArray(arr);
            check = this.checkArr(arr);
        }
        return this.createMatrix(arr)
    }

    generateArray = () => {
        const maxSize = this.size * this.size;
        let arr = [];
        for(let i = 1; i <= maxSize; i++){
            let n = i === maxSize ? 0 : i
            arr.push(n)
        }
        return arr
    }

    shuffleArray = (array) => {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array
    }

    checkArr = (array) =>{
        let inversions = 0;
        for(let i = 0; i < array.length; i++){
            for(let j = i + 1; j < array.length; j++) {
                if(array[i] != 0 && array[j] !=0){
                    array[i] > array[j] ? inversions++ : 0
                }
            }
        }
        const checkLastNumbers = this.checkNumbers(array);
        if(this.size % 2 !== 0){
            return (inversions % 2 === 0 && checkLastNumbers);
        }
        if(this.size % 2 === 0){
            const blankNum = Math.floor(array.indexOf(0) / this.size)
            return ((inversions + blankNum) % 2 !== 0 & checkLastNumbers);
        }
    }

    checkNumbers = (arr) =>{
        const lastNum = this.size * this.size - 1;
        const preLastNum = lastNum - 1;
        if(arr.indexOf(lastNum) < arr.indexOf(preLastNum)){
            return false
        }
        return  true
    }

    createMatrix = (array) => {
       const matrix = [];
       while (array.length !== 0){
           matrix.push(array.splice(0, this.size));
       }
        return matrix;
    }
}