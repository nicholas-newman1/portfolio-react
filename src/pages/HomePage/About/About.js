import React, { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import './about.css';

const About = () => {
  const aboutText = useRef();

  useIntersectionObserver(aboutText);

  return (
    <section id='about' className='about'>
      <h2 className='section-heading'>About Me</h2>
      <div ref={aboutText} className='about__text-container container'>
        <p className='about__text'>
          I was about 12 years old when I wrote my first Hello World program. I
          remember the fascination I felt when I saw logic that I had written,
          compile into an executable program that did exactly what I told it to
          do. It felt like I could make anything I wanted.
        </p>
        <p className='about__text'>
          No, I did not become a child prodigy. By the time I got to highschool
          I was distracted by teenage shenanigans and had lost all interest in
          programming. A few years later, I ended up at the University of
          Toronto, studying psychology.
        </p>
        <p className='about__text'>
          After some careful introspection, I realized that the path I was on
          was not right for me. I stopped enrolling in university classes and
          instead focused my energy back on what I enjoyed as a child.
        </p>
        <p className='about__text'>
          Ever since that decision, I have been learning the skills required to
          be a web developer. I began with HTML, then moved on to CSS, and then
          started to tackle JavaScript. After spending some time with
          JavaScript, I began to dabble with React and Sass.
        </p>
        <p className='about__text'>
          I have put together some projects which can be seen{' '}
          <HashLink className='about__link' to='/#projects'>
            above
          </HashLink>{' '}
          or on my{' '}
          <a
            className='about__link'
            href='https://github.com/nicholas-newman1'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
          . I am actively searching for job opportunities. Feel free to contact
          me at any time!
        </p>
      </div>
    </section>
  );
};

export default About;
