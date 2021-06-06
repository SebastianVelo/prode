import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyCZgouC3yhqTNim9kH1PSZ65BevwHMZrv0",
    authDomain: "cprode-arg.firebaseapp.com",
    projectId: "cprode-arg",
    storageBucket: "cprode-arg.appspot.com",
    messagingSenderId: "658004919339",
    appId: "1:658004919339:web:3274dfe540ea1b7f98966e",
    measurementId: "G-RDYZK2KWJL"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();