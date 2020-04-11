import React, { useState, useEffect } from 'react';
import phoneService from '../services/services';
import getData from '../services/getData';
import Comment from './comment';
import CreateComment from './createComment';

const Comments = ({ data }) => {
    const [comments, getComments] = useState([]);

    useEffect(() => {
        phoneService.loadComments().then((data) => {
            const dataResult = getData.dataToArray(data);
            getComments(dataResult);
        })

    }, [])

    const phoneComments = comments.filter((comment) => comment.phone === data.name).reverse();
    const commentList = phoneComments.map((comment) => <Comment commentInfo={comment} key={comment.id} />)

    return (
        <article>
            <CreateComment phoneData={data} />
            <div>
                {commentList}
            </div>
        </article>
    )
}

export default Comments;