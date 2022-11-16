export class CreatorElements{
    constructor(parent, tag, content = "", classCss) {
        const element = document.createElement(tag);
        element.textContent = content;
        this.element = element;
        this.element.classList.add(classCss);
        parent.appendChild(element);
    }

    destroy(){
        this.element.remove();
    }
}