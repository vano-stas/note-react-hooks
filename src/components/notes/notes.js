import React, { useContext } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './notes.scss';
import { FirebaseContext } from '../../context/firebase/firebaseContext';
import { AlertContext } from '../../context/alert/alertContext';

const Notes = ({ notes }) => {

    const firebase = useContext(FirebaseContext);
    const alert = useContext(AlertContext);

    const onRemove = (id) => {
        alert.show('Заметка была удалена', 'danger');
        firebase.removeNote(id);
        setTimeout(alert.hide, 2000);
    }
    return (
        <TransitionGroup component='ul' className='list-group'>
            {notes.map(note => (
                <CSSTransition 
                    key={note.id}
                    classNames = {'note'}
                    timeout = {500}
                    >
                    <li className='list-group-item note'>
                        <div>
                            <strong>{ note.title }</strong>
                            <small>{ note.date }</small>
                        </div>
                        <button type="button" className="btn btn-outline-danger btn-sm"
                            onClick={ () => onRemove(note.id) }>&times;</button>
                    </li>
                </CSSTransition>
                
            ))}
        </TransitionGroup>
    )
}

export default Notes;