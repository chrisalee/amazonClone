// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDdBPsO595nFx7W6qNAFGM2gNP4N4b38Ro",
    authDomain: "challenge-20d6d.firebaseapp.com",
    databaseURL: "https://challenge-20d6d.firebaseio.com",
    projectId: "challenge-20d6d",
    storageBucket: "challenge-20d6d.appspot.com",
    messagingSenderId: "647625319765",
    appId: "1:647625319765:web:033d1bf3691b721d6bbbdc",
    measurementId: "G-F469KXQ9Z1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };