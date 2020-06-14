import React, { useContext, useState } from 'react';
import fire from '../config/fire';
import { AuthContext } from '../authentication/Auth';
import style from './style.module.css';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../logo';



const Navigation = () => {

    const { currentUser } = useContext(AuthContext);
    const history = useHistory();
    const [clicked, updateClicked] = useState(false);

    const signOut = async () => {
        try {
            await fire.auth().signOut();
            history.push('/phone-store/');
        } catch (error) {
            console.log(error);
        }

    }

    const getUserName = () => {
        const username = currentUser.email.split('@')[0];
        return username
    }

    const changeMenu = () => {
        if (clicked) {
            updateClicked(false);
            console.log('test');
        } else {
            updateClicked(true);
        }
    }

    return (
        <div className={style.wrap}>
            <nav className="page-wrap">
                <section className={style['nav-big']}>
                    <div className={style['nav-content']}>
                        <div className={style['logo-wrap']}>
                            <Logo />
                        </div>
                        <ul>
                            <li><Link to={'/phone-store/'}>Smartphones</Link></li>
                            <li><Link to={'/phone-store/compare'}>Compare</Link></li>
                            <li><Link to={'/phone-store/aboutUs'}>About us</Link></li>
                            {!!currentUser ? (
                                <li><Link to={'/phone-store/shoppingCart'}>Shopping Cart</Link></li>
                            ) : null}
                            {!currentUser ? (
                                <li><Link to={'/phone-store/login'}>Sign in</Link></li>
                            ) : null}
                            {!currentUser ? (
                                <li><Link to={'/phone-store/register'}>Sign Up</Link></li>
                            ) : null}
                            {!!currentUser ? (
                                <li><button onClick={signOut}>Sign out</button></li>
                            ) : null}
                        </ul>
                    </div>
                    {!!currentUser ? (
                        <div className={style.username}>
                            <p>Sign in as,</p>
                            <p>{getUserName()}</p>
                        </div>
                    ) : null}
                </section>
                <section className={style['nav-small']}>
                    <div className={style['nav-content-small']}>
                        <div className={style['logo-wrap']}>
                            <Logo />
                        </div>
                        <div className={style['nav-icon-wrap']}>
                            <div className={clicked ? style['nav-main-clicked'] : null}>
                                <div onClick={changeMenu} className={style['nav-icon']}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={clicked ? style['menu-clicked'] : style.menu}>
                        <div>
                            <ul>
                                <li><Link to={'/phone-store/'}>Smartphones</Link></li>
                                <li><Link to={'/phone-store/compare'}>Compare</Link></li>
                                <li><Link to={'/phone-store/aboutUs'}>About us</Link></li>
                                {!!currentUser ? (
                                    <li><Link to={'/phone-store/shoppingCart'}>Shopping Cart</Link></li>
                                ) : null}
                                {!currentUser ? (
                                    <li><Link to={'/phone-store/login'}>Sign in</Link></li>
                                ) : null}
                                {!currentUser ? (
                                    <li><Link to={'/phone-store/register'}>Sign Up</Link></li>
                                ) : null}
                                {!!currentUser ? (
                                    <li><button onClick={signOut}>Sign out</button></li>
                                ) : null}
                            </ul>
                        </div>
                    </div>
                </section>
            </nav>
        </div>
    )
}

export default Navigation;