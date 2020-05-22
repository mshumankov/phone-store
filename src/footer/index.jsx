import React from 'react';
import style from './style.module.css';

const Footer = () => {
    return (
        <section className={style['footer-wrap']}>
            <div className={style.logo}><span>M</span><p>22</p></div>
            <div className={style.text}>Copyright © 2020 M22 Bulgaria</div>
        </section>
    )
}

export default Footer;