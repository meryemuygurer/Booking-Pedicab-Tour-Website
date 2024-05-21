import React from "react";
import Comment from "./Comment"
import CommentData from "../CommentData";

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