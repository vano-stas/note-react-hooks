import * as firebase from 'firebase/app';
import 'firebase/auth';

// const firebaseApp = firebase.initializeApp({
//     apiKey: process.env.REACT_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_FIREBASE_APP_ID
// });

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD9F5B5bE67Rv4OmPW8_jx0-f9LUvgFf2U",
    authDomain: "note-react-hooks.firebaseapp.com",
    databaseURL: "https://note-react-hooks.firebaseio.com",
    projectId: "note-react-hooks",
    storageBucket: "note-react-hooks.appspot.com",
    messagingSenderId: "176386043617",
    appId: "1:176386043617:web:0babbcb2a54e5a905ed1a0"
});

export default firebaseApp;