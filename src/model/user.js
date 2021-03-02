import {
    Firebase
} from '../util/firebase';

import {
    ClassEvent
} from '../util/classEvent';

import {
    Model
} from './model';

export class User extends Model {

    constructor(id) {

        super();

        this.name = '';
        this.email = '';
        this.photo = '';

        if (id) {
            this.email = id;
            this.getById(id);
        }

    }

    get name() {
        return this._data.name;
    }
    set name(value) {
        this._data.name = value;
    }

    get email() {
        return this._data.email;
    }
    set email(value) {
        this._data.email = value;
    }

    get photo() {
        return this._data.photo;
    }
    set photo(value) {
        this._data.photo = value;
    }

    getById(id) {

        return new Promise((resolve, reject) => {

            User.findByEmail(id).onSnapshot(doc => {
                this.fromJSON(doc.data());
                resolve(doc);
            })

        });
    }

    passValues(data) {

        this.name = data.name;
        this.email = data.email;
        this.photo = data.photo;

        this.save();
    }

    save() {

        return User.findByEmail(this.email).set({
            'name': this.name,
            'email': this.email,
            'photo': this.photo
        });
    }

    static getRef() {
        //pega a referencia da collection
        return Firebase.db().collection('/users');
    }

    static findByEmail(email) {
        //pega a referencia do documento atraves da chave email
        return User.getRef().doc(email);
    }

    addContact(contact) {

        return User.getContactsRef(this.email)
            .doc(btoa(contact.email))
            .set(contact.toJSON());

    }

    static getContactsRef(id) {
        return User.getRef()
            .doc(id)
            .collection('contacts');
    }

    getContacts() {
        return new Promise((resolve, reject) => {

            User.getContactsRef(this.email).onSnapshot(docs => {

                let contacs = [];

                docs.forEach(doc => {
                    let data = doc.data();
                    data.id = doc.id;
                    contacs.push(data);
                })

                //o evento retorna um valor
                this.trigger('contactschange', docs);

                //a promise retorna outro valor
                resolve(contacs);

            });

        });
    }

}