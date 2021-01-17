import React, { useRef } from 'react';
import useAnimation from '../../hooks/useAnimation';
import './about.css';

const About = () => {
  const aboutTextRef = useRef();

  useAnimation(aboutTextRef);

  return (
    <section id='about' className='about'>
      <h2 className='section-heading'>About Me</h2>
      <div ref={aboutTextRef} className='about__text-container container'>
        <p className='about__text'>
          I was about 12 years old when I wrote my first "Hello World" program.
          I remember how fascinated I was when I saw logic that I had written,
          do exactly I wanted it to do. I felt like I could make anything I
          wanted.
        </p>
        <p className='about__text'>
          By the time I got to highschool I became distracted by teenage
          shenanigans and I forgot about my interest in programming. A few years
          later, I ended up at the University of Toronto, studying psychology.
        </p>
        <p className='about__text'>
          After some careful introspection, I realized that the path I was on
          was not right for me. I stopped enrolling in university classes and
          instead focused my energy back on what I enjoyed as a child.
        </p>
        <p className='about__text'>
          For the past year, I have been hyper-focused on becoming a front-end
          developer. I began learning HTML, CSS, and JavaScript. After getting a
          solid grasp on the basics, I took a deep dive into technologies such
          as React, Sass, Webpack, and TypeScript to improve my workflow as a
          developer.
        </p>
        <p className='about__text'>
          I've put together some projects which can be seen{' '}
          <a className='about__link' href='#projects'>
            above
          </a>{' '}
          or on my{' '}
          <a
            className='about__link'
            href='https://github.com/nicholas-newman1'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
          . I am actively searching for job opportunities.
        </p>
      </div>
    </section>
  );
};

export default About;
