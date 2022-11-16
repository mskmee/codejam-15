import {CreatorElements} from "@models/CreatorElements";

export class MenuButton extends CreatorElements{
    constructor(parent, onClick) {
        super(parent,"div", "", "menu__button_div");
        const button = document.createElement("button");
        button.classList.add("menu__button");
        button.textContent = "Menu";
        this.element.onclick = onClick;
        this.element.append(button);
    }
}