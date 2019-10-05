import React, { useState, useContext } from 'react';
import { AlertContext } from '../../context/alert/alertContext';
import { FirebaseContext } from '../../context/firebase/firebaseContext';

const NoteForm = () => {

    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

    const submitHandler = ev => {
        ev.preventDefault();

        if ( value.trim()) {
            firebase.addNote(value.trim()).then( () => {
                alert.show('Заметка была создана', 'success');
                setTimeout(alert.hide, 2000); 
            }).catch(() => {
                alert.show('Упс! Что-то пошло не так', 'warning');
                setTimeout(alert.hide, 4000);
            }) 
            
            setValue('');
        } else {
            alert.show('Введите название заметки');
            setTimeout(alert.hide, 3000)
        }
        
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" 
                    className="form-control"
                    placeholder='Введите название заметки'
                    value={value}
                    onChange={e => setValue(e.target.value)} />
            </div>
        </form>
    )
}

export default NoteForm;