import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

interface DescriptionProps {
  description: string;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const { scrollHeight, clientHeight } = descriptionRef.current;
      // If the content is taller than the container, we have overflow
      setIsOverflowing(scrollHeight > clientHeight);
    }
  }, [description]);

  return (
    <div className="xl:w-[720px]">
      <h3 className="text-xl font-semibold">Description</h3>
      <p
        ref={descriptionRef}
        className={`mt-2 transition-all duration-300 ${isExpanded ? 'line-clamp-none' : 'line-clamp-2'}`}
      >
        {description}
      </p>
      {isOverflowing && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 font-semibold flex items-center"
        >
          {isExpanded ? 'See Less' : 'See More'}
          <ChevronDownIcon
            className={`h-5 w-5 ml-1 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
      )}
    </div>
  );
};

export default Description;
