import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB1a0QDNYVd-CxkfCZOUI-VsZwPU96iD-U",
    authDomain: "devspace-modimanju.firebaseapp.com",
    projectId: "devspace-modimanju",
    storageBucket: "devspace-modimanju.appspot.com",
    messagingSenderId: "1012334078881",
    appId: "1:1012334078881:web:3d332ad0e206286e69f9e0"
}).auth();