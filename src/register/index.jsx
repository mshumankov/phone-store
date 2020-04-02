import React, { useState } from 'react';
import Logo from '../logo';
import { Link } from 'react-router-dom';
import form from '../sharedStyles/form.module.css';
import { FaEye } from 'react-icons/fa';
import { MdKeyboardArrowRight, MdCheck } from 'react-icons/md';
import picture from '../images/girlWithPhone2.jpg'



const Register = () => {

    const [passwordView, changePassword] = useState('password')

    const changePasswordView = () => {
        if (passwordView === 'password') {
            changePassword('text')
        } else {
            changePassword('password')
        }
    }



    return (
        <div className={form.container}>
            <div className={form['logoin-container']}>
                <section className={form['logo-container']}>
                    <Logo />
                </section>
                <section className={form['form-wrap']}>
                    <article className={form.form}>

                        <form>
                            <h2>Create your account</h2>
                            <div className={form['form-control']}>
                                <label>Username:</label>
                                <input type='text' />
                            </div>
                            <div className={form['form-control']}>
                                <label>E-mail:</label>
                                <input type='email' />
                            </div>
                            <div className={form['form-control']}>
                                <label>Password:</label>
                                <input type={passwordView} />
                                <span onClick={changePasswordView}>< FaEye /></span>
                            </div>
                            <div className={form['button-wrap']}>
                                <div className={form['form-button']}>
                                    <button className='react-icons-btn-form' type='submit'><span>Sign Up</span><MdKeyboardArrowRight /></button>
                                </div>
                                <div className={form['form-link']}>
                                    <span>Already have an account?</span>
                                    <Link to='/'>Sign in</Link>
                                </div>
                            </div>
                        </form>
                        <div className={form['app-header']}>
                            <h3>Download the app</h3>
                        </div>
                    </article>
                    <figure>
                        <img src={picture} alt="girlWithPhone" />
                        <ul className={form['form-list']}>
                            <li>< MdCheck /><span>It is convenient!</span> Pay with credit or debit card through ePay as well.</li>
                            <li>< MdCheck /><span>It's fast!</span> Everything happens in minutes</li>
                            <li>< MdCheck /><span>It is secure!</span> The connection is fully secure.</li>
                        </ul>
                    </figure>
                </section>

            </div>
        </div>
    )
}

export default Register;