import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCohX8tCvoQKJhwW2OZuFrJ3JDVnVMHUKM",
    authDomain: "clone-a383f.firebaseapp.com",
    projectId: "clone-a383f",
    storageBucket: "clone-a383f.appspot.com",
    messagingSenderId: "25003209444",
    appId: "1:25003209444:web:60a6a8f6cae41f1c92f2f1",
    measurementId: "G-PZS6H11NHG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }