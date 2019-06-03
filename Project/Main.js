import View from './View.js';
import ControlTasks from './ControlTasks.js';
import Task from './Task.js';

export default class Main {
    constructor() {
        //localStorage.removeItem('tasks');
        this._ControlTasks = new ControlTasks();
        this._View = new View();

        document.querySelector('#btnRegister').addEventListener('click', () => {
            //Create object Task with all properties
            let ObjTask = new Task(this.createObjectSimpleTask());
            //Add the new task
            this._ControlTasks.addTask(ObjTask);
            //Show on table
            this._View.update(this._ControlTasks.getTasksSaved());
        });
    }

    createObjectSimpleTask() {
        //Format dates
        let stringDate = new Date(document.querySelector('#limitDate').value);
        stringDate = (stringDate.getDate() + 1) + '/' + (stringDate.getMonth() + 1) + '/' + stringDate.getFullYear();
        //Create a simple object Task
        let simpleTask = {
            title: document.querySelector('#title').value,
            description: document.querySelector('#description').value,
            limitDate: stringDate
        }

        return simpleTask;
    }
}

new Main();