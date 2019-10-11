import * as firebase from 'firebase/app';

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.local.REACT_FIREBASE_API_KEY,
    authDomain: process.env.local.REACT_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.local.REACT_FIREBASE_DATABASE_URL,
    projectId: process.env.local.REACT_FIREBASE_PROJECT_ID,
    storageBucket: process.env.local.REACT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.local.REACT_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.local.REACT_FIREBASE_APP_ID
});

export default firebaseApp;