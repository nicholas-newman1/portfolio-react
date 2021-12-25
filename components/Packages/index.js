import React from 'react';
import { packages } from '../../data';
import Project from '../ProjectItem';
import styles from './packages.module.css';

const Packages = () => {
  return (
    <section id='packages' className={styles.packages}>
      <div className='container'>
        <h2 className='section-heading'>Packages</h2>
        <ul className={styles.list}>
          {packages.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Packages;
