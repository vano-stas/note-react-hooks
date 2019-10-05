import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../../pages/home';
import About from '../../pages/About';
import Navbar from '../navbar';
import Alert from '../alert/alert';
import AlertState from '../../context/alert/alertState';
import FirebaseState from '../../context/firebase/firebaseState';


function App () {
    return (
        <FirebaseState>
            <AlertState>
                <Router>
                    <Navbar />
                    <div className='wrapper p-4'>
                        <Alert />
                        <Switch>
                            <Route path={'/'} exact component={Home} />
                            <Route path={'/about'} component={About} />
                        </Switch>
                        
                    </div>      
                </Router>
            </AlertState>
        </FirebaseState>
        
        
    )
}

export default App;