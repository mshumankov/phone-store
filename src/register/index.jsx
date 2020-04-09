import React, { useState } from 'react';
import Logo from '../logo';
import useFormControl from '../customHooks/formControl';
import fire from '../config/fire';
import { Link } from 'react-router-dom';
import form from '../sharedStyles/form.module.css';
import { FaEye } from 'react-icons/fa';
import { MdKeyboardArrowRight, MdCheck } from 'react-icons/md';
import picture from '../images/girlWithPhone2.jpg'



const Register = ({ history }) => {

    const [passwordView, changePassword] = useState('password');
    const [rePasswordView, changeRePassword] = useState('password');
    const [rePasswordValue, changeRePasswordValue] = useState(undefined);
    const emailFormControl = useFormControl();
    const passwordFormControl = useFormControl();

    const rePasword = (e) => {
        const value = e.target.value
        changeRePasswordValue(value);
    }

    console.log(emailFormControl, passwordFormControl);

    const changePasswordView = () => {
        if (passwordView === 'password') {
            changePassword('text')
        } else {
            changePassword('password')
        }
    }

    const changeRePasswordView = () => {
        if (rePasswordView === 'password') {
            changeRePassword('text')
        } else {
            changeRePassword('password')
        }
    }

    const viewError = () => {
        if (emailFormControl.error) {
            return emailFormControl.error;
        } else if (passwordFormControl.error) {
            return passwordFormControl.error;
        } else if (rePasswordValue && (passwordFormControl.value !== rePasswordValue)) {
            console.log(passwordFormControl.value, rePasswordValue);
            return 'Passwords don\'t match';

        }
        else {
            return null;
        }
    }

    const submitHandler = async () => {
        if ((!emailFormControl.error && !passwordFormControl.error) && (emailFormControl.value && passwordFormControl.value)) {
            try {
                await fire
                    .auth()
                    .createUserWithEmailAndPassword(emailFormControl.value, passwordFormControl.value);
                history.push('/');
            } catch (error) {
                console.log(error);;
            }
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
                                <label>E-mail:</label>
                                <input type='email' name='email' onChange={emailFormControl.changeHandler} />
                            </div>
                            <div className={form['form-control']}>
                                <label>Password:</label>
                                <input type={passwordView} name='password' onChange={passwordFormControl.changeHandler} />
                                <span onClick={changePasswordView}>< FaEye /></span>
                            </div>
                            <div className={form['form-control']}>
                                <label>Repeat password:</label>
                                <input type={rePasswordView} onChange={rePasword} />
                                <span onClick={changeRePasswordView} >< FaEye /></span>
                            </div>
                            <div className={form['error-message']}>{viewError()}</div>
                            <div className={form['button-wrap']}>
                                <div className={form['form-button']}>
                                    <button className='react-icons-btn-form' type='button' onClick={submitHandler}><span>Sign Up</span><MdKeyboardArrowRight /></button>
                                </div>
                                <div className={form['form-link']}>
                                    <span>Already have an account?</span>
                                    <Link to='/login'>Sign in</Link>
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