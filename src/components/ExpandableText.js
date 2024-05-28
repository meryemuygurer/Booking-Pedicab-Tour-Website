import React, { useState } from "react";

function ExpandableText({ text, maxLength = 300 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldTruncate = text.length > maxLength;
  const displayText = isExpanded ? text : shouldTruncate ? text.slice(0, maxLength) + '...' : text;

  return (
    <div>
      <p className="display-text">{displayText}</p>
      {shouldTruncate && (
        <button className="readmore-button" onClick={toggleExpand}>
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </div>
  );
}

export default ExpandableText;
