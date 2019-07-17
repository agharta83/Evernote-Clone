import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBEmA1LT_S6qC-7XKSxjL0WJjBI8e9Q_Ao",
    authDomain: "evernote-clone-59826.firebaseapp.com",
    databaseURL: "https://evernote-clone-59826.firebaseio.com",
    projectId: "evernote-clone-59826",
    storageBucket: "evernote-clone-59826.appspot.com",
    messagingSenderId: "460155643543",
    appId: "1:460155643543:web:3134582273dc14f3"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
