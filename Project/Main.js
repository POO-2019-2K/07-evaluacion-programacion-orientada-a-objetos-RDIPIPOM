import View from './View.js';
import ControlTasks from './ControlTasks.js';
import Task from './Task.js';

export default class Main {
    constructor() {
        //localStorage.removeItem('tasks');
        this._ControlTasks = new ControlTasks();
        this._View = new View();
        this._taskCounter = 0;
        if(localStorage.getItem('taskCounter') != null){
            this._taskCounter = Number(localStorage.getItem('taskCounter'));
        }
        //Update table
        this._View.update(this._ControlTasks.getTasksSaved());

        document.querySelector('#btnRegister').addEventListener('click', () => {
            //Create object Task with all properties and methods
            let ObjTask = new Task(this._createObjectTask());
            //Add the new task
            this._ControlTasks.addTask(ObjTask);
            //Show on table
            this._View.update(this._ControlTasks.getTasksSaved());
        });
    }

    _createObjectTask() {
        //Format dates
        let stringDate = new Date(document.querySelector('#limitDate').value);
        stringDate = stringDate.getFullYear() + '/' + stringDate.getMonth() + '/' + (stringDate.getDate() + 1);
        //Create a simple object Task
        let Task = {
            ID: this._taskCounter++,
            title: document.querySelector('#title').value,
            description: document.querySelector('#description').value,
            limitDate: new Date(document.querySelector('#limitDate').value),
            restDays: ((new Date(document.querySelector('#limitDate').value).getTime() - new Date()) / (1000*60*60*24)).toFixed(2)
        }

        //Save in Local storange the new ID
        localStorage.setItem('taskCounter', this._taskCounter);

        return Task;
    }
}

new Main();