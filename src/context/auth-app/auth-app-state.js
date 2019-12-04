import React, { useEffect, useState, createContext, useReducer } from 'react';
import { AuthAppReducer } from "./auth-app-reducer";
import { SIGN_UP_USER } from '../types';
import { AuthAppContext } from './auth-app-context';
import firebaseApp from '../firebase-app';
import * as firebase from 'firebase';
import { Redirect } from 'react-router-dom';

const AuthAppState = ({ children ,history }) => {

    const initialState = {
        user: null,
        isAuthed: false
    };

    const [state, dispatch] = useReducer(AuthAppReducer, initialState);

    const [currentUser, setCurrentUser] = useState(null);

    // useEffect( () => {
    //     app.auth().onAuthStateChanged(setCurrentUser);
    // }, []);

    const signUp = async (displayName, email, password) => {
        try {
            await firebaseApp
                .auth()
                .createUserWithEmailAndPassword(email, password)
                // .currentUser.updateProfile({displaName: displayName})
                // .then(({user})=> console.log({user}))
                // .then(({user}) => {
                //     user.updateProfile(displayName.value)
                // })
                .then( ({user}) => {
                    console.log(user);
                    firebase.database().ref('users/' + user.uid).set({
                        username: displayName,
                        email: email,
                        uid: user.uid
                    })
                })
                .then(() => {
                })
                const payload = firebaseApp.auth().currentUser;

                dispatch({
                    type: SIGN_UP_USER,
                    payload
                })
            } catch (error) {
                alert(error);
            }

                
            
       
    };

    return (
        <AuthAppContext.Provider value={{ currentUser, signUp }} >
            {children}
        </AuthAppContext.Provider>
    );
};

export default AuthAppState;