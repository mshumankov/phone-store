import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import Logo from '../logo';

const Navigation = () => {
    return (
        <div className={style.wrap}>
            <nav className="page-wrap">
                <div className={style['logo-wrap']}>
                    <Logo />
                </div>
                <ul>
                    <li><Link to={'/'}>Smartphones</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/register'}>Register</Link></li>
                    <li><a href="#">Test</a></li>
                    <li><a href="#">Test</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;