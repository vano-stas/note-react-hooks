import React, { useContext } from 'react';
import './registration-form.scss';
import { AuthAppContext } from '../../context/auth-app/auth-app-context';

const RegistrationForm = () => {

    // const [value, setValue] = useState('');
    // const alert = useContext(AlertContext);
    const authen = useContext(AuthAppContext);

    const handleSubmit = event => {
        // console.log(event)
        event.preventDefault();
        const { displayName, email, password } = event.target.elements;
        // console.log(nickne.value, email.value, password.value);
        authen.signUp(displayName.value, email.value, password.value);        

    }

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <div class="form-group row">
                <label for="inputName" class="col-2 col-form-label">Name</label>
                <div class="col-10">
                <input name='displayName' type="text" class="form-control" id="inputName" placeholder="Name" />
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-2 col-form-label">Email</label>
                <div class="col-10">
                <input name="email" type="email" class="form-control" id="inputEmail3" placeholder="Email" />
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-2 col-form-label">Password</label>
                <div class="col-10">
                <input name="password" type="password" class="form-control" id="inputPassword3" placeholder="Password" />
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