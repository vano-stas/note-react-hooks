import React, { useState, useContext } from 'react';
import './registration-form.scss';

const RegistrationForm = () => {

    // const [value, setValue] = useState('');
    // const alert = useContext(AlertContext);
    // const firebase = useContext(FirebaseContext);

    const submitHandler = ev => {
        // ev.preventDefault();

        // if ( value.trim()) {
        //     firebase.addNote(value.trim()).then( () => {
        //         alert.show('Заметка была создана', 'success');
        //         setTimeout(alert.hide, 2000); 
        //     }).catch(() => {
        //         alert.show('Упс! Что-то пошло не так', 'warning');
        //         setTimeout(alert.hide, 4000);
        //     }) 
            
        //     setValue('');
        // } else {
        //     alert.show('Введите название заметки');
        //     setTimeout(alert.hide, 3000)
        // }
        
    }

    return (
        <form className='login-form'>
            <div class="form-group row">
                <label for="inputName" class="col-2 col-form-label">Name</label>
                <div class="col-10">
                <input type="email" class="form-control" id="inputName" placeholder="Name" />
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-2 col-form-label">Email</label>
                <div class="col-10">
                <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-2 col-form-label">Password</label>
                <div class="col-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                <button type="submit" class="btn btn-info">Sign up</button>
                </div>
            </div>
        </form>
    )
}

export default RegistrationForm;