import {CreatorElements} from "@models/CreatorElements";

export class PopUp extends CreatorElements{
    constructor(content) {
        super(document.body, 'div', content, 'pop-up');
        this.element.onclick = this.element.remove
        setTimeout(() => this.element.classList.add("_active"), 1);
        setTimeout(() => {
            this.element.classList.remove("_active");
            setTimeout(() => this.element.remove(), 500);
        }, 3000);
    }


}