import React, { useContext } from 'react';
import { connect } from 'react-redux';

import './registration-form.scss';
import { AuthAppContext } from '../../context/auth-app/auth-app-context';
import { signUp } from '../../store/actions/index';

const RegistrationForm = (props) => {

    // const [value, setValue] = useState('');
    // const alert = useContext(AlertContext);
    // const authen = useContext(AuthAppContext);

    const handleSubmit = event => {
        // console.log(event)
        event.preventDefault();
        const { displayName, email, password } = event.target.elements;
        // console.log(nickne.value, email.value, password.value);
        props.onSignUp(email.value, password.value);        

    }

    // if ()

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            {/* <div class="form-group row">
                <label for="inputName" class="col-2 col-form-label">Name</label>
                <div class="col-10">
                <input name='displayName' type="text" class="form-control" id="inputName" placeholder="Name" />
                </div>
            </div> */}
            <div className="form-group row">
                <label className="col-2 col-form-label">Email</label>
                <div className="col-10">
                <input name="email" type="email" className="form-control" placeholder="Email" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-2 col-form-label">Password</label>
                <div className="col-10">
                <input name="password" type="password" className="form-control" placeholder="Password" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                <button type="submit" className="btn btn-info">Sign up</button>
                </div>
            </div>
        </form>
    )
}

// const mapStateToProps = (state) => {
//     return {

//     }
// };

const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (email, password) => dispatch(signUp(email, password))
    }
}

export default connect(null, mapDispatchToProps)(RegistrationForm);