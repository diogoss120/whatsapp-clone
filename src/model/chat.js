import {
    Model
} from "./model";

export class Chat extends Model {

    constructor() {
        super();
    }

    get users () {
        return this._data.users;
    }

    set users(value) {
        this._data.users = value;
    }

    get timestamp () {
        return this._data.timestamp;
    }

    set timestamp(value) {
        this._data.timestamp = value;
    }

    static getRef(){
        return firebase.db.collection('/chats');
    }

}