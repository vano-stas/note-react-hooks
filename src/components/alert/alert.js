import React, { useContext } from 'react';
import {CSSTransition} from 'react-transition-group';
import { AlertContext } from '../../context/alert/alertContext';

const Alert = () => {

    const { alert } = useContext(AlertContext)

    return (
        <CSSTransition
            in = {alert.visible}
            timeout = {500}
            classNames = {'alert'}
            mountOnEnter
            unmountOnExit
        
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>Внимание!</strong> { alert.text }
            </div>
        </CSSTransition>
    )
}

export default Alert;