import React, { useEffect, useRef } from 'react';
import Tag from '../../components/Tag/Tag';
import { projects } from '../../data';
import './projectPage.css';

const ProjectPage = ({ match }) => {
  const pageRef = useRef();

  useEffect(() => {
    window.scroll(0, 0);
    pageRef.current.classList.add('animate');
  }, []);

  const projectId = match.params.id;
  const project = projects.find((x) => x.id === Number(projectId));

  return (
    <div ref={pageRef} className='project-page container'>
      <h1 className='project-page__heading'>{project.title}</h1>
      <div className='project-page__tags'>
        {project.tags.map((tag) => (
          <div key={tag.text} className='project-page__tag emulated-flex-gap'>
            <Tag text={tag.text} backgroundColor={tag.backgroundColor} />
          </div>
        ))}
      </div>
      <div className='project-page__main-content'>
        <img
          className='project-page__img'
          src={project.image.src}
          alt={project.image.alt}
        />
        <div className='project-page__text'>
          <div className='project-page__features'>
            <h2 className='project-page__sub-heading'>Features:</h2>
            <ul className='project-page__list'>
              {project.features.map((feature, i) => (
                <li key={i} className='project-page__item'>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className='project-page__skills'>
            <h2 className='project-page__sub-heading'>Skills Developed:</h2>
            <ul className='project-page__list'>
              {project.skills.map((skill, i) => (
                <li key={i} className='project-page__item'>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className='project-page__btns'>
            <a
              className='project-page__btn-link'
              href={project.liveUrl}
              target='_blank'
              rel='noreferrer'
            >
              <button className='project-page__btn project-page__btn--live'>
                Visit Live
              </button>
            </a>
            <a
              className='project-page__btn-link'
              href={project.codeUrl}
              target='_blank'
              rel='noreferrer'
            >
              <button className='project-page__btn project-page__btn--code'>
                View Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
