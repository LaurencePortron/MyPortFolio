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
        {/* <button className='discover-projects-button'>
          <a href='#curriculum' className='discover-projects-textbutton'>
            See work history
          </a>
          <ArrowRight color='white' size={24} />
        </button> */}

        <button className='discover-projects-button'>
          <a href='#projects' className='discover-projects-textbutton'>
            Discover my projects
          </a>
          <ArrowRight color='white' size={24} />
        </button>
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
