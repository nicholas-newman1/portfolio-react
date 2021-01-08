import React, { useRef } from 'react';
import Tag from '../../components/Tag/Tag';
import useAnimation from '../../hooks/useAnimation';
import './projectItem.css';

const ProjectItem = ({ project }) => {
  const projectRef = useRef();
  useAnimation(projectRef);

  return (
    <li ref={projectRef} className='project'>
      <h3 className='project__title'>{project.title}</h3>

      <div className='project__tags'>
        {project.tags.map((tag) => (
          <div key={tag.text} className='project__tag'>
            <Tag text={tag.text} backgroundColor={tag.backgroundColor} />
          </div>
        ))}
      </div>

      {project.description.map((paragraph, i) => (
        <p key={i} className='project__p'>
          {paragraph}
        </p>
      ))}

      <div className='project__btns'>
        <a
          className='project__btn project__btn--live'
          href={project.liveUrl}
          target='_blank'
          rel='noreferrer'
        >
          Visit Live
        </a>

        <a
          className='project__btn project__btn--code'
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
