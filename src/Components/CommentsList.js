import React from 'react';

const CommentList = ({comments}) =>(
    <>
    <h2>Comments:</h2>
    {comments.map((comment,key) =>(
        <div className="comment" key={key}>
            <h4>{comment.userName}</h4>
            <p><i>{comment.comments}</i></p>
        </div>
    ))}
    </>
);

export default CommentList;