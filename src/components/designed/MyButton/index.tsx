import React, { useState,ReactNode } from 'react';

interface MyButtonProps {
    children: ReactNode;
    hoverContent: ReactNode;
  className?: string;
  disabled?: boolean;
}

const MyButton: React.FC<MyButtonProps> = ({ children,hoverContent, className = '', disabled = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`my-button-container ${className}`}>
      <button
        className={`my-button ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        disabled={disabled}
      >
        {children}
      </button>
      {isHovered && (
        <div className="button-list">
          {hoverContent}
        </div>
      )}
    </div>
  );
};

export default MyButton;
