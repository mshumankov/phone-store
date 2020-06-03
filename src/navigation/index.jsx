import React, { useContext } from 'react';
import fire from '../config/fire';
import { AuthContext } from '../authentication/Auth';
import style from './style.module.css';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../logo';



const Navigation = () => {

    const { currentUser } = useContext(AuthContext);
    const history = useHistory()

    const signOut = async () => {
        try {
            await fire.auth().signOut();
            history.push('/');
        } catch (error) {
            console.log(error);
        }

    }

    const getUserName = () => {
        const username = currentUser.email.split('@')[0];
        return username
    }

    return (
        <div className={style.wrap}>
            <nav className="page-wrap">
                <div className={style['nav-content']}>
                    <div className={style['logo-wrap']}>
                        <Logo />
                    </div>
                    <ul>
                        <li><Link to={'/'}>Smartphones</Link></li>
                        <li><Link to={'/compare'}>Compare</Link></li>
                        <li><Link to={'/aboutUs'}>About us</Link></li>
                        {!!currentUser ? (
                            <li><Link to={'/shoppingCart'}>Shopping Cart</Link></li>
                        ) : null}
                        {!currentUser ? (
                            <li><Link to={'/login'}>Sign in</Link></li>
                        ) : null}
                        {!currentUser ? (
                            <li><Link to={'/register'}>Sign Up</Link></li>
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

            </nav>
        </div>
    )
}

export default Navigation;