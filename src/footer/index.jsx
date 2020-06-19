import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className={style['footer-wrap']}>
            <div className={style.logo}><Link to={`/phone-store/`}><span>M</span><p>22</p></Link></div>
            <div className={style.text}>Copyright © 2020 M22 <Link to={`/phone-store/404`}>404</Link></div>
        </section>
    )
}

export default Footer;