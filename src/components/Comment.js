import React, { useState } from "react"

function Comment({text, src, alt, name, maxLength = 100}) {
    const [isExpanded, SetIsExpanded] = useState(false);

    const toggleExpand = () => {
        SetIsExpanded(!isExpanded);
    };

    const shouldTruncate = text.length > maxLength;
    const displayText = isExpanded ? text : shouldTruncate ? text.slice(0, maxLength) + '...' : text;

    console.log('displayText:', displayText);  // Debugging için eklendi

    return(
        <div className="comment">
            <div className="row">
                <img src={src} alt={alt} ></img>
                <span className="comment-name"> {name} </span>
                <span className="lighter-span"> &nbsp;• 2024</span>
            </div>
            <p className="display-text">{displayText}</p>
            {shouldTruncate && (
                <button className="readmore-button" onClick={toggleExpand}>
                  {isExpanded ? 'Read less' : 'Read more'}
                </button>
            )}
        </div>
    );
};

export default Comment;