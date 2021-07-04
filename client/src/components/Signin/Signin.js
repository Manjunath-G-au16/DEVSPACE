import React from 'react';
import "./Signin.scss";
import "firebase/app";
import { auth } from "../../firebase";
import firebase from 'firebase/app'

const Signin = () => {
    return (
        <div>
            <h1>Signin</h1>
            <button
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            >Sign In</button>
        </div>
    )
}

export default Signin
