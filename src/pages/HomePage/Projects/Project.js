import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import './project.css';

const Project = ({ project }) => {
  const projectRef = useRef();
  useIntersectionObserver(projectRef);

  return (
    <li ref={projectRef} className='project'>
      <Link className='project__img-link' to={`/project/${project.id}`}>
        <div
          className='project__img'
          style={{ backgroundImage: `url(${project.image.src})` }}
        />
      </Link>
      <h3 className='project__title'>
        <Link className='project__title-link' to={`/project/${project.id}`}>
          {project.title}
        </Link>
      </h3>
      <div className='project__btns'>
        <a
          className='project__btn-link'
          href={project.liveUrl}
          target='_blank'
          rel='noreferrer'
        >
          <button className='project__btn project__btn--live'>
            Visit Live
          </button>
        </a>

        <a
          className='project__btn-link'
          href={project.codeUrl}
          target='_blank'
          rel='noreferrer'
        >
          <button className='project__btn project__btn--code'>View Code</button>
        </a>
      </div>
    </li>
  );
};

export default Project;
