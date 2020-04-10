import React, { useContext } from 'react';
import fire from '../config/fire';
import { AuthContext } from '../authentication/Auth';
import style from './style.module.css';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import Logo from '../logo';



const Navigation = ({ history }) => {

    const { currentUser } = useContext(AuthContext);

    const signOut = async () => {
        try {
            await fire.auth().signOut();
            history.push('/');
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className={style.wrap}>
            <nav className="page-wrap">
                <div className={style['logo-wrap']}>
                    <Logo />
                </div>
                <ul>
                    <li><Link to={'/'}>Smartphones</Link></li>
                    {!currentUser ? (
                        <li><Link to={'/login'}>Login</Link></li>
                    ) : null}
                    {!currentUser ? (
                        <li><Link to={'/register'}>Sign Up</Link></li>
                    ) : null}
                    {!!currentUser ? (
                        <li><button onClick={signOut}>Sign out</button></li>
                    ) : null}

                    <li><a href="#">Test</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default withRouter(Navigation);