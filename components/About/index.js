import React, { useRef } from 'react';
import useAnimation from '../../hooks/useAnimation';
import styles from './about.module.css';

const About = () => {
  const aboutTextRef = useRef();

  useAnimation(aboutTextRef, styles.animate);

  return (
    <section id='about' className={styles.about}>
      <h2 className='section-heading'>About Me</h2>
      <div ref={aboutTextRef} className={`${styles.container} container`}>
        <p className={styles.text}>
          I was about 12 years old when I wrote my first "Hello World" program.
          I remember how fascinated I was when I saw logic that I had written do
          exactly what I wanted it to do. I felt like I could make anything I
          wanted. But when I was in high-school I became distracted by teenage
          shenanigans and forgot all about my interest in programming. A few
          years later, I ended up at the University of Toronto, studying
          psychology.
        </p>
        <p className={styles.text}>
          After some careful introspection, I realized that the path I was on
          was not right for me. I stopped enrolling in university classes and
          instead focused my energy back on what I enjoyed as a child. Since
          December 2019, I have been hyper-focused on becoming a Web Developer.
          I began learning HTML, CSS, and JavaScript. After getting a solid
          grasp on those, I moved on to technologies such as React, Sass,
          Firebase, and TypeScript to improve my skills as a developer.
        </p>
        <p className={styles.text}>
          Until March 2020, the majority of my learning consisted of creating my
          own projects. Then, I volunteered to help a start-up called Sopcal. I
          had the opportunity to develop my skills and work in a team
          environment. More recently I have been working as a freelancer for
          Your Fuse Inc. Through this position I have further developed my
          ability to work with Web Development technologies, specifically React,
          Redux, and Firebase.
        </p>
      </div>
    </section>
  );
};

export default About;
