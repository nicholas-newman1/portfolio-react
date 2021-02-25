import React from 'react';
import { projects } from '../../data';
import Project from '../ProjectItem';
import styles from './projects.module.css';

const Projects = () => {
  return (
    <section id='projects' className={styles.projects}>
      <div className='container'>
        <h2 className='section-heading'>Projects</h2>
        <ul className={styles.list}>
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
