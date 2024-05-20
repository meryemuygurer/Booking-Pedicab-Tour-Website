import React from "react";
import Comment from "./Comment"

const CommentData = [
    {'src':'../../public/CommentImages/comment-img-1.png', 'text': 'abcedeedadaslpdldlsadlaplpalpaldadsaldlpasl', 'name': 'adasdaad'}
]

function CommentsList() {
    return(
        <div className="comments-container">
            {CommentData.map((comment, index) => (
                <Comment text={comment.text} key={index} />
            ))}
        </div>
    );
};

export default CommentsList;