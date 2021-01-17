import React, { useRef } from 'react';
import Tag from '../Tag';
import useAnimation from '../../hooks/useAnimation';
import styles from './projectItem.module.css';

const ProjectItem = ({ project }) => {
  const projectRef = useRef();
  useAnimation(projectRef, styles.animate);

  return (
    <li ref={projectRef} className={styles.project}>
      <h3 className={styles.title}>{project.title}</h3>

      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <div key={tag.text} className={styles.tag}>
            <Tag
              text={tag.text}
              backgroundColor={tag.backgroundColor}
              color={tag.color}
            />
          </div>
        ))}
      </div>

      {project.description.map((paragraph, i) => (
        <p key={i} className={styles.p}>
          {paragraph}
        </p>
      ))}

      <div className={styles.btns}>
        <a
          className={`${styles.btn} ${styles.btn_live}`}
          href={project.liveUrl}
          target='_blank'
          rel='noreferrer'
        >
          Visit Live
        </a>

        <a
          className={`${styles.btn} ${styles.btn_code}`}
          href={project.codeUrl}
          target='_blank'
          rel='noreferrer'
        >
          View Code
        </a>
      </div>
    </li>
  );
};

export default ProjectItem;
