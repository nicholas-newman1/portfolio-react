import React from 'react';
import styles from './tag.module.css';

const Tag = ({ text, backgroundColor, color }) => {
  return (
    <div className={styles.tag} style={{ backgroundColor, color }}>
      {text}
    </div>
  );
};

export default Tag;
