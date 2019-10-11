import React, { useEffect, useState, createContext } from 'react';
import app from './firebase';

export const AuthAppContext = createContext();

export const AuthProvider = ({ children }) => {

    const initialState = {
        user: '',
        userList: []
    };
    const [currentUser, setCurrentUser] = useState(null);

    useEffect( () => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }} >
            {children}
        </AuthContext.Provider>
    );
};