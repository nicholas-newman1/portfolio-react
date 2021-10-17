import React from 'react';
import GitHubSvg from './GitHubSvg';
import LinkedInSvg from './LinkedInSvg';
import ResumeSvg from './ResumeSvg';

import styles from './socialLinks.module.css';

const SocialLinks = () => {
  return (
    <div className={styles.social_links}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a
            href='https://github.com/nicholas-newman1'
            className={styles.link}
            target='_blank'
            rel='noreferrer'
          >
            <GitHubSvg />
          </a>
        </li>
        <li className={styles.item}>
          <a
            href='https://www.linkedin.com/in/nicholas-newman'
            className={styles.link}
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInSvg />
          </a>
        </li>
        <li className={styles.item}>
          <a
            href='https://drive.google.com/file/d/1fcON0RmXsc1JLh0ODIx4QCrfToJqaOuz/view?usp=sharing'
            className={styles.link}
            target='_blank'
          >
            <ResumeSvg />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
