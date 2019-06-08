import Task from './Task.js';
import ControlTasks from './ControlTasks.js';

export default class View {
    constructor() {
        this._table = document.querySelector('#tableTasks');
        this._controlTasks = new ControlTasks();
    }

    update(tasks) {
        //Remove all rows
        this._RemoveRows();
        //Add all Tasks
        tasks.forEach((objTask) => {
            let date = objTask.limitDate.split('/');
            objTask.limitDate = new Date(date[2], date[1], date[0]);
            this._addToTable(new Task(objTask));
        });
    }

    _RemoveRows() {
        for (let i = this._table.rows.length - 1; i > 2; i--) {
            this._table.deleteRow(i);
        }
    }

    _addToTable(objTask) {
        let row = this._table.insertRow(-1);
        let cell = row.insertCell(0);
        cell.appendChild(document.createTextNode(objTask.title));
        cell = row.insertCell(1);
        cell.appendChild(document.createTextNode(objTask.getLimitDateAsString()));
        cell = row.insertCell(2);
        cell.appendChild(document.createTextNode(objTask.restDays));
        this._addButtons(row, cell, objTask);
    }

    _addButtons(row, cell, objTask) {
        //Create buttons
        let btnDetails = document.createElement('input');
        btnDetails.type = 'button';
        btnDetails.className = 'btn btn_dark';
        btnDetails.setAttribute('id', 'btnDetails')
        btnDetails.setAttribute('data-toggle', 'modal');
        btnDetails.setAttribute('data-target', '#dialogDetails');

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
            this._ShowDetailsOfTask(objTask.ID);
        });

        btnEdit.addEventListener('click', () => {
            this._editTask(objTask.ID);
        });

        btnRemove.addEventListener('click', () => {
            this._removeTask(objTask.ID);
        });

        //Show in table
        cell = row.insertCell(3);
        cell.appendChild(btnDetails);
        cell = row.insertCell(4);
        cell.appendChild(btnEdit);
        cell = row.insertCell(5);
        cell.appendChild(btnRemove);
    }

    _ShowDetailsOfTask(ID){

    }

    _editTask(ID){
        
    }

    _removeTask(ID){
        this._controlTasks.removeTask(ID);
        this.update(this._controlTasks.getTasksSaved());
    }

    sortByTitle(){
        this._controlTasks.sortByTitle();
        this.update(this._controlTasks.getTasksSaved());
    }

    sortByPriority(){
        this._controlTasks.sortByPriority();
        this.update(this._controlTasks.getTasksSaved());
    }
}