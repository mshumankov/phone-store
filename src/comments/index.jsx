import React, { useState, useEffect, useMemo } from 'react';
import phoneService from '../services/services';
import getData from '../services/getData';
import Comment from './comment';
import CreateComment from './createComment';
import style from './style.module.css';

const Comments = ({ data }) => {
    const [comments, getComments] = useState([]);
    const [newComment, getNewComment] = useState(0);

    useEffect(() => {
        phoneService.loadComments().then((data) => {
            const dataResult = getData.dataToArray(data);
            getComments(dataResult);
        })

    }, [newComment])

    const phoneComments = useMemo(() => comments.filter((comment) => comment.phone === data.name).reverse(), [comments, data]);
    const commentList = useMemo(() => phoneComments.map((comment) => <Comment commentInfo={comment} key={comment.id} />), [phoneComments])

    return (
        <article className='page-wrap'>
            <div className={style.container}>
                <CreateComment phoneData={data} newComment={newComment} getNewComment={getNewComment} />
                <div>
                    {commentList}
                </div>
            </div>

        </article>
    )
}

export default React.memo(Comments);