export default class ControlTasks{
    constructor(){
        this._tasks = new Array();
    }

    _updateArrayTasks(){
        if(localStorage.getItem('tasks') != null){
            this._tasks = JSON.parse(localStorage.getItem('tasks'));
        }
    }

    addTask(objTask){
        //Update array and push in the array;
        this._updateArrayTasks();
        this._tasks.push(this._createObjectTask(objTask));
        //Save in local storange
        localStorage.setItem('tasks', JSON.stringify(this._tasks));
        console.log(this._tasks);
    }

    _createObjectTask(objTask){
        let newObjTask = {
            title: objTask.title,
            description: objTask.description,
            limitDate: objTask.limitDate,
            restDays: objTask.restDays
        }

        return newObjTask;
    }

    getTasksSaved(){
        this._updateArrayTasks();
        return this._tasks;
    }
}