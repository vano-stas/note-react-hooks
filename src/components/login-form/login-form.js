import React, { useState, useContext } from 'react';
import './login-form.scss';

const LoginForm = () => {

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
                <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </div>
        </form>

// {/* <form>
// <div class="form-group">
//   <label for="exampleInputEmail1">Email address</label>
//   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//   <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
// </div>
// <div class="form-group">
//   <label for="exampleInputPassword1">Password</label>
//   <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
// </div>
// <div class="form-group form-check">
//   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
//   <label class="form-check-label" for="exampleCheck1">Check me out</label>
// </div>
// <button type="submit" class="btn btn-primary">Submit</button>
// </form> */}

        // <form onSubmit={submitHandler}>
        //     <div className="form-group login-form">
        //         <input type="text" 
        //             className="form-control col-4 login-input mb-3 "
        //             placeholder='email'
        //             // value={email}
        //             // onChange={e => setEmail(e.target.value)}
        //              />
        //         <input type="text" 
        //             className="form-control col-4 login-input"
        //             placeholder='password'
        //             // value={password}
        //             // onChange={e => setPassword(e.target.value)}
        //              />
        //     </div>
        // </form></form>
    )
}

export default LoginForm;