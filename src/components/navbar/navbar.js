import React from 'react';
import {NavLink, Link} from 'react-router-dom';

import './navbar.scss';

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
            <form class="form-inline my-2 my-lg-0 login-btn">
                {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
                
                    <Link to='/login' className='nav-link'>
                        <button  class="btn btn-outline-light my-2 mr-3" type="button">
                            Войти
                            </button>
                    </Link>
                
                <button class="btn btn-outline-light my-2 mr-3" type="button">Регистрация</button>
                <button class="btn btn-outline-light my-2" type="button">Выйти</button>
            </form>

            {/* <ul>
                <button className='btn btn-outline-dark'>Log in</button>
                <button className='btn btn-outline-dark'>Sign Up</button>
                <button className='btn btn-outline-dark'>Log out</button>
            </ul> */}
        </nav>
    )
}

export default Navbar;