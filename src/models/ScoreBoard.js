import {Menu} from "@models/Menu";

export class ScoreBoard extends Menu{
    constructor(obj, onClick) {
        super(document.body, [], onClick, 'game__winners');
        this.option.remove();
        try{
            this.sortData = obj.sort((a, b) => a.time - b.time)
            this.createTable();
        }catch (e){
            this.createClearTable();
        }

    }

    createClearTable = () => {
        this.table = document.createElement('table');
        const count = document.createElement('caption');
        count.textContent = `Hight Scores:`;
        this.table.append(count);
        const tr = document.createElement('tr');
        const data = ['position', 'name', 'time', 'count'];
        for(let i = 0; i < data.length; i++){
            const td = document.createElement('td');
            td.textContent = data[i];
            tr.append(td)
        }
        this.table.append(tr);
        this.element.append(this.table)
    }

    createTable = () => {
        this.table = document.createElement('table');
        const count = document.createElement('caption');
        count.textContent = `Hight Scores (total: ${count}`;
        this.table.append(count)
        const tr = document.createElement('tr');
        for(let key in this.sortData[0]){
            const td = document.createElement('td');
            td.textContent = key;
            tr.append(td)
        }
        this.table.append(tr)
        for(let i = 0; i < this.sortData.length; i++){
            const tr = document.createElement('tr');
            for(let value of Object.values(this.sortData[i])){
                const td = document.createElement("td");
                td.textContent = value
                tr.append(td)
            }
            this.table.append(tr)
        }
        this.element.append(this.table);
    }

}