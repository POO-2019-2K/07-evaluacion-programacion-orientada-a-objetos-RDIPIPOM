export default class Task{
    constructor(objTask){
        this._title = objTask.title;
        this._description = objTask.description;
        this._limitDate = objTask.limitDate;
        this._restDays = this._getRestDays();
    }

    //Getters

    get title(){
        return this._title;
    }

    get description(){
        return this._description;
    }

    get limitDate(){
        let date = (this._limitDate.getDate() + 1) + '/' + (this._limitDate.getMonth() + 1) + '/' + this._limitDate.getFullYear();
        return date;
    }

    get restDays(){
        return this._restDays;
    }

    //Setters

    set title(title){
        this._title = title;
        return this._title;
    }

    set description(title){
        this._description = description;
        return this._description;
    }

    set limitDate(limitDate){
        this._limitDate = limitDate;
        return this._limitDate;
    }

    //Other Methods

    _getRestDays(){
        return ((this._limitDate.getTime() - new Date()) / (1000*60*60*24)).toFixed(2);
    }
}