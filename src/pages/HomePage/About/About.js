import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id='about' className='about'>
      <h2 className='section-heading'>About Me</h2>
      <div className='about__text-container container'>
        <p className='about__text'>
          I was about 12 years old when I wrote my first Hello World program. I
          remember the fascination I felt when I saw logic that I had written,
          compile into an executable program that did exactly what I told it to
          do. I felt like I would be able to make anything I wanted, I was only
          limited by my imagination.
        </p>
        <p className='about__text'>
          No, I did not become a child prodigy. By the time I got to highschool,
          I had lost all interest in programming, and got distracted by teenage
          shenanigans. A few years later, I ended up at the University of
          Toronto, studying psychology.
        </p>
        <p className='about__text'>
          After some careful introspection, I realized that the path I was on
          was not right for me. I stopped enrolling in university classes and
          instead focused my energy back on what I enjoyed as a child.
        </p>
        <p className='about__text'>
          Ever since that decision, I have been learning the skills required to
          be a web developer. I began with HTML, moved on to CSS, and then
          started to tackle JavaScript. After spending some time with
          JavaScript, I began to dabble with React and Sass.
        </p>
        <p className='about__text'>
          I have put together some projects which can be seen above or on my
          GitHub. I am now actively searching for job opportunities. Feel free
          to contact me at any time!
        </p>
      </div>
    </section>
  );
};

export default About;
