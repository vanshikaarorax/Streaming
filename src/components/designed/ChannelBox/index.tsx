// Box.tsx

import React from 'react';


interface BoxProps {
  title: string;
  content: string;
  className?: string;
  style?: React.CSSProperties;
}

const Box: React.FC<BoxProps> = ({ title, content, className, style }) => {
  return (
    <div className={`box-container ${className}`} style={style}>
      <h2 className="box-title">{title}</h2>
      <p className="box-content">{content}</p>
    </div>
  );
};

export default Box;
