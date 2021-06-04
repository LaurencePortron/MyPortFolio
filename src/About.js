import React from 'react';
import './About.css';
import { ArrowRight } from 'react-feather';
import Curriculum from './Curriculum';
import Projects from './Projects';
import Contact from './Contact';

export default function About(props) {
  return (
    <div>
      <div className='introduction-section' id='home'>
        <h1 className='introduction-message'>Hi, I'm Laurence.</h1>
        <div className='introduction-description'>
          From working in top start ups such as Zendesk or Airbnb, <br />I
          recently transitioned to web development.
        </div>
        <div className='learn-more-section'>
          <a href='#about' className='learn-more-text'>
            See my work history
          </a>
          <ArrowRight color='#3d99af' size={24} />
        </div>
        <div className='learn-more-section'>
          <a href='#projects' className='learn-more-text'>
            Discover my projects
          </a>
          <ArrowRight color='#3d99af' size={24} />
        </div>
      </div>
      <div>
        <div id='about'>
          <Curriculum />
        </div>
      </div>
      <div>
        <div id='projects'>
          <Projects />
        </div>
      </div>
      <div>
        <div id='contact'>
          <Contact />
        </div>
      </div>
    </div>
  );
}
