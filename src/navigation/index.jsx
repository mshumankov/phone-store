import React from 'react';
import style from './style.module.css';

const Navigation = () => {
    return (
        <nav>
            <div className={style.logo}>
                <span>M</span>
                <h3>22</h3>
            </div>
            <ul>
                <li><a href="#">Smartphones</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Test</a></li>
                <li><a href="#">Test</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;