import View from './View.js';
import ControlTasks from './ControlTasks.js';
import Task from './Task.js';

export default class Main {
    constructor() {
        //localStorage.removeItem('tasks');
        this._ControlTasks = new ControlTasks();
        this._View = new View();
        //Update table
        this._View.update(this._ControlTasks.getTasksSaved());

        document.querySelector('#btnRegister').addEventListener('click', () => {
            //Create object Task with all properties
            let ObjTask = new Task(this.createObjectSimpleTask());
            console.log(ObjTask.restDays);
            //Add the new task
            this._ControlTasks.addTask(ObjTask);
            //Show on table
            this._View.update(this._ControlTasks.getTasksSaved());
        });
    }

    createObjectSimpleTask() {
        //Format dates
        let stringDate = new Date(document.querySelector('#limitDate').value);
        stringDate = stringDate.getFullYear() + '/' + (stringDate.getMonth() + 1) + '/' + (stringDate.getDate() + 1);
        //Create a simple object Task
        let simpleTask = {
            title: document.querySelector('#title').value,
            description: document.querySelector('#description').value,
            limitDate: new Date(stringDate)
        }

        return simpleTask;
    }
}

new Main();