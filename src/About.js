import React from 'react';
import './About.css';
import { ChevronRight } from 'react-feather';
import Curriculum from './Curriculum';
import Projects from './Projects';
import Contact from './Contact';

export default function About(props) {
  return (
    <div>
      <div className='introduction-section' id='home'>
        <div className='introduction-message'>Hi, I'm Laurence.</div>
        <div className='introduction-description'>Web & Mobile Developer</div>
        <div className='learn-more-section'>
          <a href='#about' className='learn-more-text'>
            Learn more
          </a>
          <ChevronRight color='white' size={24} />
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
