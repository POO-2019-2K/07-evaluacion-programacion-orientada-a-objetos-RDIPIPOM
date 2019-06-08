export default class ControlTasks {
    constructor() {
        this._tasks = new Array();
    }

    _updateArrayTasks() {
        if (localStorage.getItem('tasks') != null) {
            this._tasks = JSON.parse(localStorage.getItem('tasks'));
        }
    }

    addTask(objTask) {
        //Update array and push in the array;
        this._updateArrayTasks();
        this._tasks.push(this._createObjectTask(objTask));
        //Save in local storange
        localStorage.setItem('tasks', JSON.stringify(this._tasks));
    }

    _createObjectTask(objTask) {
        let newObjTask = {
            ID: objTask.ID,
            title: objTask.title,
            description: objTask.description,
            limitDate: objTask.getLimitDateAsStringWithOneMore(),
            restDays: objTask.restDays
        }

        return newObjTask;
    }

    getTasksSaved() {
        this._updateArrayTasks();
        return this._tasks;
    }

    removeTask(ID) {
        //Update array
        this._updateArrayTasks();
        //Find the task with the ID
        this._tasks.forEach((objTask, index) => {
            if (objTask.ID === ID) {
                //Remove this object
                this._tasks.splice(index, 1);
                return;
            }
        });

        //Save array tasks
        localStorage.setItem('tasks', JSON.stringify(this._tasks));
    }

    sortByTitle() {
        //Update array
        this._updateArrayTasks();
        //Sort
        this._tasks.sort(function (a, b) {
            if (a.title > b.title) {
                return 1;
            } else {
                return -1;
            }
        });
        //Save in local Storange
        localStorage.setItem("tasks", JSON.stringify(this._tasks));
    }

    sortByPriority() {
        //Update array
        this._updateArrayTasks();
        //Sort
        this._tasks.sort(function (a, b) {
            return (a.restDays - b.restDays);
        });
        //Save in local Storange
        localStorage.setItem("tasks", JSON.stringify(this._tasks));
    }
}