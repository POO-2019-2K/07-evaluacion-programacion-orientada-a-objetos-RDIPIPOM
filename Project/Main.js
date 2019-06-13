import View from './View.js';
import ControlTasks from './ControlTasks.js';
import Task from './Task.js';

export default class Main {
    constructor() {
        this._controlTasks = new ControlTasks();
        this._view = new View();
        this._taskCounter = 0;

        //Update counter
        if (localStorage.getItem('taskCounter') != null) {
            this._taskCounter = Number(localStorage.getItem('taskCounter'));
        }

        //Update table
        this._view.update(this._controlTasks.getTasksSaved());

        //Order tasks by priority
        this._view.sortByPriority();

        //Listnner of the button register
        document.querySelector('#btnRegister').addEventListener('click', () => {
            //Create object Task with all properties and methods
            let ObjTask = new Task(this._createObjectTask());
            //Add the new task
            this._controlTasks.addTask(ObjTask);
            //Show on table
            this._view.update(this._controlTasks.getTasksSaved());
            //Sort data
            this._sort();
        });

        //Listenner of the select sort
        document.querySelector('#sort').addEventListener('change', () =>{
            this._sort();
        });

        //Listenner of the button update task
        document.querySelector('#btnUpdateTask').addEventListener('click', () => {
            this._controlTasks.updateTask(localStorage.getItem('IDToEdit'), new Task(this._createObjectTaskToEdit()));
            this._view.update(this._controlTasks.getTasksSaved());
        });
    }

    _sort() {
        if (document.querySelector('#sort').value === 'ttitle') {
            this._view.sortByTitle();
        } else {
            this._view.sortByPriority();
        }
    }

    _createObjectTask() {
        //Create a simple object Task
        let Task = {
            ID: this._taskCounter++,
            title: document.querySelector('#title').value,
            description: document.querySelector('#description').value,
            limitDate: new Date(document.querySelector('#limitDate').value),
            restDays: Math.ceil((new Date(document.querySelector('#limitDate').value).getTime() - new Date()) / (1000 * 60 * 60 * 24))
        }


        //Clear inputs in the form
        document.querySelector('#title').value = "";
        document.querySelector('#description').value = "";
        document.querySelector('#limitDate').value = "";

        //Save in Local storange the new ID
        localStorage.setItem('taskCounter', this._taskCounter);

        return Task;
    }

    _createObjectTaskToEdit() {
        //Create a simple object Task
        let Task = {
            ID: 0, //ID will be assignement later
            title: document.querySelector('#EditTitle').value,
            description: document.querySelector('#EditDescription').value,
            limitDate: new Date(document.querySelector('#EditLimitDate').value),
            restDays: Math.ceil((new Date(document.querySelector('#EditLimitDate').value).getTime() - new Date()) / (1000 * 60 * 60 * 24))
        }

        return Task;
    }
}

new Main();