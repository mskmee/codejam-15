import {CreatorElements} from "@models/CreatorElements";
import {OptionsModel} from "@models/OptionsModel";
import {MusicPlayer} from "@models/MusicPlayer";


export class WinWindow extends CreatorElements{
    constructor(time, count, gameMode) {
        super(document.body, 'div', `Congratulations!!! You have won!
        You make it in ${Math.round(time)} seconds  and for ${count} moves`, 'game__win');
        this.getUserName()
        this.submit.onclick = () => {
            const optionsModel = new OptionsModel();
            optionsModel.saveWinner(this.input.value, Math.round(time), count, gameMode);
            this.element.classList.remove("_active");
        }
    }
    getUserName = () => {
        const form = document.createElement('form');
        const label = document.createElement('label');
        this.input = document.createElement('input');
        this.submit = document.createElement('button')
        form.setAttribute("action", "")
        label.setAttribute("for", 'username');
        label.textContent = "Enter you name"
        this.setAttribute(this.input);
        this.submit.setAttribute("type", "submit");
        this.submit.textContent = "Ok";
        form.append(label, this.input, this.submit)
        form.onclick = (e) => e.preventDefault();
        this.element.append(form);
    }

    setAttribute = (el) => {
        const obj = {
            'name': "username",
            'id': "username",
            'type': "text",
            "placeholder": "Username"
        }
        for(let key in obj){
            el.setAttribute(key, obj[key]);
        }
    }
}