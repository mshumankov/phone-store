import React, { useState, useContext, useRef } from 'react';
import phoneService from '../../services/services';
import { AuthContext } from '../../authentication/Auth';
import style from './style.module.css';
import { MdKeyboardArrowRight } from 'react-icons/md';

const CreateComment = ({ phoneData, newComment, getNewComment }) => {
    const { currentUser } = useContext(AuthContext);
    const [message, getMessage] = useState(undefined);
    const [error, getError] = useState('');
    const phone = phoneData.name;
    const textEl = useRef(null);

    const messageHandler = e => {
        const value = e.target.value;
        getMessage(value);
    }

    const submitHandler = async () => {
        if (message && currentUser) {
            try {
                const data = {
                    phone: phone,
                    email: currentUser.email,
                    message: message
                }

                await phoneService.createComment(data);
                await getMessage(undefined);
                getNewComment(newComment + 1);
                getError('');
                textEl.current.value = '';
            } catch (error) {
                console.log(error);
            }
        } else {
            if (!currentUser) {
                getError('You need to sign in to post your comment. Please sign in.');
            } else {
                getError('Empty comment field. Please write your comment.');
            }

        }
    }

    return (
        <div className={style.createComment}>
            <h3>Post your comment, review about {phone}</h3>
            <textarea ref={textEl} onChange={messageHandler} placeholder="Your opinion" cols="30" rows="5"></textarea>
            <div className={style.error}>{error}</div>
            <div><button type='button' onClick={submitHandler} className='react-icons-btn-form'><span>Submit</span><MdKeyboardArrowRight /></button></div>

        </div>
    )
}

export default CreateComment;