import React from 'react';
import './tag.css';

const Tag = ({ text, backgroundColor }) => {
  return (
    <div className='tag' style={{ backgroundColor }}>
      {text}
    </div>
  );
};

export default Tag;
