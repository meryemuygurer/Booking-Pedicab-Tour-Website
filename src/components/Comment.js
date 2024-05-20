import React, { useState } from "react"

function Comment({text, maxLength = 100}) {
    const [isExpanded, SetIsExpanded] = useState(false);

    const toggleExpand = () => {
        SetIsExpanded(!isExpanded);
    };

    const shouldTruncate = text.length > maxLength;
    const displayText = isExpanded ? text : text.slice(0,maxLength) + shouldTruncate ? '...' : '';

    console.log('displayText:', displayText);  // Debugging için eklendi

    return(
        <div className="comment">
            <p>{displayText}</p>
            {shouldTruncate && (
                <button onClick={toggleExpand}>
                  {isExpanded ? 'Read less' : 'Read more'}
                </button>
            )}
        </div>
    );
};

export default Comment;