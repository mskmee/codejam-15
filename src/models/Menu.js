import {CreatorElements} from "@models/CreatorElements";

export class Menu extends CreatorElements{
    constructor(parent, arr, onClick, generatedMenuClass='menu__list') {
        super(parent, 'div', "", "menu__list_wrapper");
        this.menuClass = generatedMenuClass;
        this.elementArr = arr
        this.option = this.generateOptionMenu();
        this.element.onclick = onClick;
        this.element.append(this.option)

    }

    generateOptionMenu = () => {
        const wrapper = document.createElement("ul");
        wrapper.classList.add(this.menuClass)
        for (let i of this.elementArr){
            const element = document.createElement("li");
            element.textContent = i;
            const j = i.replace(" ", "-")
            element.classList.add("menu__option", `${j.toLowerCase()}`);
            wrapper.append(element);
        }
        return wrapper;
    }
}