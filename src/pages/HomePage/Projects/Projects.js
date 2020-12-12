import React from 'react';
import { projects } from '../../../data';
import Project from './Project';
import './projects.css';

const Projects = () => {
  return (
    <section id='projects' className='projects container'>
      <h2 className='section-heading'>Projects</h2>
      <ul className='projects__list'>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
