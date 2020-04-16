import React from 'react';
import style from './style.module.css';

const Comment = (props) => {

    const { email, message } = props.commentInfo;
    const letter = email[0].toUpperCase();
    const username = email.split('@')[0];

    return (
        <div className={style.container}>
            <div className={style.letterWrap}>
                <div className={style.letter}>
                    <span>{letter}</span>
                </div>
                <div className={style.username}>{username}</div>
            </div>
            <div className={style.message}>{message}</div>
        </div>

    )
}

export default Comment;