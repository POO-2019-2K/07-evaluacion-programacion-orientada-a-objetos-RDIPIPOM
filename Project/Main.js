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
            let ObjTask = new Task(this.createObjectTask());
            //Add the new task
            this._ControlTasks.addTask(ObjTask);
            //Show on table
            this._View.update(this._ControlTasks.getTasksSaved());
        });
    }

    createObjectTask() {
        //Format dates
        let stringDate = new Date(document.querySelector('#limitDate').value);
        stringDate = stringDate.getFullYear() + '/' + stringDate.getMonth() + '/' + (stringDate.getDate() + 1);
        //Create a simple object Task
        let Task = {
            title: document.querySelector('#title').value,
            description: document.querySelector('#description').value,
            limitDate: new Date(document.querySelector('#limitDate').value),
            restDays: ((new Date(document.querySelector('#limitDate').value).getTime() - new Date()) / (1000*60*60*24)).toFixed(2)
        }
        return Task;
    }
}

new Main();