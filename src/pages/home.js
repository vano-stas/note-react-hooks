import React, { Fragment, useContext, useEffect } from 'react';
import NoteForm from '../components/note-form';
import Notes from '../components/notes/notes';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import Loader from '../components/loader/loader';

const Home = () => {
    const {loading, notes, fetchNotes } = useContext(FirebaseContext);

    useEffect(() => {
       fetchNotes();
       // eslint-disable-next-line 
    }, [])

    return (
        <Fragment>
            <NoteForm />
            <hr />

            { loading
                ? <Loader />
                : <Notes notes={notes}/>
            }
        </Fragment>
    )
}
export default Home;