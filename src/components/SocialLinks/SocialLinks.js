import React from 'react';
import GitHubSvg from './GitHubSvg';
import LinkedInSvg from './LinkedInSvg';
import ResumeSvg from './ResumeSvg';
import resumeSrc from '../../files/resume-nicholas-newman.pdf';

import './socialLinks.css';

const SocialLinks = () => {
  return (
    <div className='social-links'>
      <ul className='social-links__list'>
        <li className='social-links__item'>
          <a
            href='https://github.com/nicholas-newman1'
            className='social-links__link'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubSvg />
          </a>
        </li>
        <li className='social-links__item'>
          <a
            href='https://www.linkedin.com/in/nicholas-newman'
            className='social-links__link'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInSvg />
          </a>
        </li>
        <li className='social-links__item'>
          <a href={resumeSrc} className='social-links__link' download>
            <ResumeSvg />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
