import React, { Fragment, useContext, useEffect } from 'react';
import NoteForm from '../components/note-form';
import Notes from '../components/notes/notes';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import Loader from '../components/loader/loader';
import LoginForm from '../components/login-form/login-form';

const Login = () => {
    const {loading, notes, fetchNotes } = useContext(FirebaseContext);

    // useEffect(() => {
    //    fetchNotes();
    //    // eslint-disable-next-line 
    // }, [])

    return (
        <Fragment>
           <LoginForm /> 
        </Fragment>
    )
}
export default Login;