import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-dark navbar-expand-lg bg-info'>
            <div className="navbar-brand">Note App</div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to='/' exact className="nav-link">Главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' className="nav-link">Информация</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;