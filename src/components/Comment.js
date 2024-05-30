import React from "react";
import ExpandableText from "./ExpandableText";

function Comment({ text, src, alt, name, maxLength = 300 }) {
    const buton1 = 'read less'
    const buton2 = 'read more'
    return (
        <div className="comment">
            <div className="row">
                <img src={src} alt={alt}></img>
                <span className="comment-name"> {name} </span>
                <span className="lighter-span"> &nbsp;• 2024</span>
            </div>
            <ExpandableText text={text} maxLength={maxLength} buton1={buton1} buton2={buton2} />
        </div>
    );
}

export default Comment;
