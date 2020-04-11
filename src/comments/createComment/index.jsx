import React, { useState, useContext } from 'react';
import phoneService from '../../services/services';
import { AuthContext } from '../../authentication/Auth';

const CreateComment = ({ phoneData }) => {
    const { currentUser } = useContext(AuthContext);
    const [message, getMessage] = useState(undefined);
    const phone = phoneData.name;

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
            } catch (error) {
                console.log(error);
            }


        }
    }

    if (currentUser) {
        console.log(currentUser.email);
        console.log(phone);
    }

    return (
        <div>
            <textarea onChange={messageHandler}></textarea>
            <button type='button' onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default CreateComment;