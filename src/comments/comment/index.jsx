import React from 'react';
import style from './style.module.css';

const Comment = (props) => {

    const { email, message } = props.commentInfo;
    const letter = email[0].toUpperCase();
    const username = email.split('@')[0];
    console.log(props.commentInfo);

    return (
        <div>
            <div>
                <span>{letter}</span>
            </div>
            <div>{username}</div>
            <div>{message}</div>
        </div>

    )
}

export default Comment;