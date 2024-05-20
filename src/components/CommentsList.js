import React from "react";
import Comment from "./Comment"

const CommentData = [
    {'src':'../../public/CommentImages/comment-img-1.png', 'text': 'abcolsakxsa xxn*paoxğpsaxşlsax kxopsakxoalxa kxoaspkoxax xoaskpxpalsxaslxğal', 'name': 'name', 'alt': 'abcdef'}
]

function CommentsList() {
    return(
        <div className="comments-container">
            {CommentData.map((comment, index) => (
                <Comment key={index} text={comment.text} name={comment.name} src={comment.src} alt={comment.alt} />
            ))}
        </div>
    );
};

export default CommentsList;