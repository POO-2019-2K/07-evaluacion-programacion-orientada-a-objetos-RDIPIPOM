import Task from './Task.js';

export default class View{
    constructor(){
        this._table = document.querySelector('#tableTasks');
    }

    update(tasks) {
        //Remove all rows
        this._RemoveRows();
        //Add all Tasks
        tasks.forEach((objTask) => {
            objTask.limitDate = new Date(objTask.limitDate);            
            this._addToTable(new Task(objTask));
        });
    }

    _RemoveRows() {
        for (let i = this._table.rows.lenght; i > 1; i--) {
            this._table.deleteRow(i);
        }
    }

    _addToTable(objTask){
        let row = this._table.insertRow(-1);
        let cell = row.insertCell(0);
        cell.appendChild(document.createTextNode(objTask.title));
        cell = row.insertCell(1);
        cell.appendChild(document.createTextNode(objTask.limitDate));
        cell = row.insertCell(2);
        cell.appendChild(document.createTextNode(objTask.restDays));
        this._addButtons(row, cell);
    }

    _addButtons(row, cell){
        //Create buttons
        let btnDetails = document.createElement('input');
        btnDetails.type = 'button';
        btnDetails.className = 'btn btn_dark';
        btnDetails.setAttribute('id', 'btnDetails')

        let btnEdit = document.createElement('input');
        btnEdit.type = 'button';
        btnEdit.className = 'btn';
        btnEdit.setAttribute('id', 'btnEdit')

        let btnRemove = document.createElement('input');
        btnRemove.type = 'button';
        btnRemove.className = 'btn';
        btnRemove.setAttribute('id', 'btnRemove')

        //Add listenners
        btnDetails.addEventListener('click', () => {
            console.log('btnDetails')
        });

        btnEdit.addEventListener('click', () => {
            console.log('btnEdit')
        });

        btnRemove.addEventListener('click', () => {
            console.log('btnRemove')
        });

        //Show in table
        cell = row.insertCell(3);
        cell.appendChild(btnDetails);
        cell = row.insertCell(4);
        cell.appendChild(btnEdit);
        cell = row.insertCell(5);
        cell.appendChild(btnRemove);
    }
}