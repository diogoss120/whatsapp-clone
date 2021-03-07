//const {firebase} = require('firebase/app');
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

export class Firebase {

    constructor() {
        this.config = {
            apiKey: "AIzaSyBpCCKljhudadWluZuJzABtk2usvR0Fxb0",
            authDomain: "whatsapp-clone-23b8e.firebaseapp.com",
            projectId: "whatsapp-clone-23b8e",
            storageBucket: "gs://whatsapp-clone-23b8e.appspot.com",
            //storageBucket: "whatsapp-clone-23b8e.appspot.com",
            messagingSenderId: "845646842289",
            appId: "1:845646842289:web:63b2bcf7591e6fd5c51590",
            measurementId: "G-W02YSZMTVL"
        };
        this.init();
    }

    init() {
        // Initialize Firebase
        if (!window.initializedFirebase) {
            firebase.initializeApp(this.config);
            //firebase.analytics();

            firebase.firestore().settings({
                timestampsInSnapshots: true
            })

            window.initializedFirebase = true;
        }
    }

    static db() {
        return firebase.firestore();
    }

    static hd() {
        return firebase.storage();
    }

    initAuth() {
        return new Promise((resolve, reject) => {

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(result => {
                let token = result.credential.accessToken;
                let user = result.user;
                resolve({
                    user,
                    token
                });
            }).catch(err => {
                reject(err);
                console.error(err);
            })
        });
    }
}