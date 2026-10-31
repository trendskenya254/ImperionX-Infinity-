import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableCaptionProps {
  shortText: string;
  fullText?: string;
  maxChars?: number;
  className?: string;
}

export const ExpandableCaption: React.FC<ExpandableCaptionProps> = ({
  shortText,
  fullText,
  maxChars = 90,
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // If fullText is not provided, use shortText and truncate if long
  const completeText = fullText || shortText;
  const needsToggle = completeText.length > maxChars;

  const displayText = isExpanded 
    ? completeText 
    : (needsToggle ? `${completeText.slice(0, maxChars)}...` : completeText);

  return (
    <div className={`text-xs text-slate-300 leading-relaxed ${className}`}>
      <span>{displayText}</span>
      {needsToggle && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="inline-flex items-center gap-0.5 ml-1.5 text-[11px] font-semibold text-blue-400 hover:text-blue-300 transition-colors focus:outline-none cursor-pointer"
        >
          <span>{isExpanded ? 'Show less' : 'Show more'}</span>
          {isExpanded ? (
            <ChevronUp className="w-3 h-3 shrink-0" />
          ) : (
            <ChevronDown className="w-3 h-3 shrink-0" />
          )}
        </button>
      )}
    </div>
  );
};
