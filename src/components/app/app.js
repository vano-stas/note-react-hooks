import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../../pages/home';
import About from '../../pages/About';
import Navbar from '../navbar';
import Alert from '../alert/alert';
import AlertState from '../../context/alert/alertState';
import FirebaseState from '../../context/firebase/firebaseState';
import Login from '../../pages/Login';
import Registration from '../../pages/Registration';
import AuthAppState from '../../context/auth-app/auth-app-state';


function App () {
    return (
        <AuthAppState>
        <FirebaseState>
            <AlertState>
                <Router>
                    <Navbar />
                    <div className='wrapper p-4'>
                        <Alert />
                        <Switch>
                            <Route path={'/'} exact component={Home} />
                            <Route path={'/about'} component={About} />
                            <Route path={'/login'} component={Login} />
                            <Route path={'/registration'} component={Registration} />
                        </Switch>
                        
                    </div>      
                </Router>
            </AlertState>
        </FirebaseState>
        </AuthAppState>
        
        
    )
}

export default App;