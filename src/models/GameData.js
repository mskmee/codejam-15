import {CreatorElements} from "@models/CreatorElements";

export class GameData extends CreatorElements {
    constructor(parent, time, count) {
        super(parent, "div", "", "game__data");
        this.createTimer();
        this.count = count;
        this.createSteps()
        this.element.append(this.gameTime)
        this.element.append(this.gameCount);
        this.time = time;

    }

    createTimer = () => {
        this.gameTime = document.createElement("div");
        this.gameTime.textContent = "Timer: ";
        this.gameTime.classList.add("game__timer");
        this.gameSeconds = document.createElement('div'),
        this.gameMinute = document.createElement('div');
        this.gameSeconds.classList.add("timer__seconds");
        this.gameMinute.classList.add("timer__minutes");
        this.gameSeconds.textContent = "00";
        this.gameMinute.textContent = "00";
        const separator = document.createElement('span');
        separator.classList.add("timer__separator");
        separator.textContent = ":"
        this.gameTime.append(this.gameMinute, separator, this.gameSeconds)
    }

    createSteps = () => {
        this.gameCount = document.createElement("div");
        this.gameCount.classList.add("game__count");
        this.gameCount.textContent = `Steps: ${this.count}`;

    }

    changeSteps = (count) => {
        this.gameCount.textContent = `Steps: ${count}`;
    }

    timerStart = () => {
        let timerInterval = setInterval(() => {
            this.time += 1/60;
            let secondVal = Math.floor(this.time) - Math.floor(this.time/60) * 60;
            let minuteVal = Math.floor(this.time/60);
            this.gameSeconds.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
            this.gameMinute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
            this.timeForSave = this.time;
        }, 1000/60);
        return timerInterval
    }
}