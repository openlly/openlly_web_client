import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export function Tooltip({ content, children, position = 'top' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div 
          className={`absolute ${positionClasses[position]} z-50 px-2 py-1 
            text-xs font-medium text-white bg-gray-900 rounded-md whitespace-nowrap
            animate-fade-in`}
        >
          {content}
          <div 
            className={`absolute ${
              position === 'top' ? 'top-full left-1/2 -translate-x-1/2 border-t-gray-900' :
              position === 'bottom' ? 'bottom-full left-1/2 -translate-x-1/2 border-b-gray-900' :
              position === 'left' ? 'left-full top-1/2 -translate-y-1/2 border-l-gray-900' :
              'right-full top-1/2 -translate-y-1/2 border-r-gray-900'
            } border-4 border-transparent`}
          />
        </div>
      )}
    </div>
  );
}