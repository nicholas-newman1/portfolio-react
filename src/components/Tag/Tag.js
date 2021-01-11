import React from 'react';
import './tag.css';

const Tag = ({ text, backgroundColor, color }) => {
  return (
    <div className='tag' style={{ backgroundColor, color }}>
      {text}
    </div>
  );
};

export default Tag;
