import React from 'react';
import { NavLink, Link } from 'react-router-dom';

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
      <form className="form-inline my-2 my-lg-0 login-btn">
        <Link to='/login' className='nav-link'>
          <button className="btn btn-outline-light my-2 mr-3" type="button">
            Войти
          </button>
        </Link>
        <Link to='/registration' className='nav-link'>
          <button className="btn btn-outline-light my-2 mr-3" type="button">
            Регистрация
          </button>
        </Link>
        <button className="btn btn-outline-light my-2" type="button">Выйти</button>
      </form>
    </nav>
  )
}

export default Navbar;