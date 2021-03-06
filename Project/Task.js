export default class Task {
    constructor(objTask) {
        this._ID = objTask.ID;
        this._title = objTask.title;
        this._description = objTask.description;
        this._limitDate = objTask.limitDate;
        this._restDays = objTask.restDays;
    }

    //Getters

    get ID() {
        return this._ID;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get limitDate() {
        return this._limitDate;
    }

    get restDays() {
        return this._restDays;
    }

    //Setters

    set ID(ID) {
        this._ID = ID;
        return this._ID;
    }

    set title(title) {
        this._title = title;
        return this._title;
    }

    set description(title) {
        this._description = description;
        return this._description;
    }

    set limitDate(limitDate) {
        this._limitDate = limitDate;
        return this._limitDate;
    }

    //Other methods
    _getDayOfLimitDate() {
        if (this._limitDate.getDate() < 10) {
            return '0' + this._limitDate.getDate();
        } else {
            return this._limitDate.getDate();
        }
    }

    _getMonthOfLimitDate() {
        if (this._limitDate.getMonth() < 10) {
            return '0' + this._limitDate.getMonth();
        } else {
            return this._limitDate.getMonth();
        }
    }

    getLimitDateAsStringWithOneMore() {
        return (this._limitDate.getDate() + 1) + '/' + (this._limitDate.getMonth() + 1) + '/' + this._limitDate.getFullYear();
    }

    getLimitDateAsString() {
        return this._limitDate.getDate() + '/' + this._limitDate.getMonth() + '/' + this._limitDate.getFullYear();
    }

    getLimitDateAsInputFormat() {
        return this._limitDate.getFullYear() + '-' + this._getMonthOfLimitDate() + '-' + this._getDayOfLimitDate();
    }
}