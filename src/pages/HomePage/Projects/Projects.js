import React from 'react';
import { projects } from '../../../data';
import Project from './Project';
import './projects.css';

const Projects = () => {
  return (
    <section className='projects'>
      <h2 className='projects__heading section-heading'>Projects</h2>
      <ul className='projects__list'>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
