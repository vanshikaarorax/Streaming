
import React from 'react';
import Box from '../../designed/ChannelBox';


const BoxesLayout: React.FC = () => {
  const boxes = [
    { title: 'Box 1', content: 'Content for box 1' },
    { title: 'Box 2', content: 'Content for box 2' },
    { title: 'Box 3', content: 'Content for box 3' },
    { title: 'Box 4', content: 'Content for box 4' },
    { title: 'Box 5', content: 'Content for box 5' },
    { title: 'Box 6', content: 'Content for box 6' },
    { title: 'Box 7', content: 'Content for box 7' },
    { title: 'Box 8', content: 'Content for box 8' },
    { title: 'Box 9', content: 'Content for box 9' },
    { title: 'Box 10', content: 'Content for box 10' },
    { title: 'Box 11', content: 'Content for box 11' },
    { title: 'Box 12', content: 'Content for box 12' },
  ];
  const layoutStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  };

  const boxItemStyle = {
    padding: '10px',
    backgroundColor: 'blue',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    color: 'white',
    borderRadius: '5px',
  };
  const boxHoverStyle: React.CSSProperties = {
    transform: 'scale(1.05)',
  };
  return (
    <div className="boxes-layout" style={layoutStyle}>
      {boxes.map((box, index) => (
        <Box
          key={index}
          title={box.title}
          content={box.content}
          className="box-item"
          style={boxItemStyle
            }
        />
      ))}
    </div>
  );
};

export default BoxesLayout;
