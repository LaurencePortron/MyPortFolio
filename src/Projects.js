import React from 'react';
import './Projects.css';
import { ChevronRight } from 'react-feather';
import { GitHub } from 'react-feather';
import tripperSrc from './tripper.png';
import mamboSrc from './mambo.png';
import ticketingSrc from './ticketing.png';

export default function Projects(props) {
  return (
    <div className='project-container'>
      <div className='project-title-container'>
        <div className='project-title'>My Projects</div>
        <div
          className='github-icon'
          onClick={() =>
            window.open('https://github.com/LaurencePortron', '_blank')
          }
        >
          <GitHub color='white' size={40} />
        </div>
      </div>
      <div className='project-text'>
        With solid experience in customer relations, I recently transitioned to
        web development. <br />
        After being at the frontline of a product, I am eager to have a maximum
        impact on its core.
        <br /> Energetic and determined, I am looking for an internship starting
        in March 2021.
      </div>
      <div className='card-container'>
        <div className='card'>
          <img src={tripperSrc} alt='Avatar' className='image' />
          <div className='container'>
            <h4>
              <b>Tripper</b>
            </h4>
            <p>React Native + FireStore</p>
          </div>
        </div>
        <div className='card'>
          <img src={ticketingSrc} alt='Avatar' className='image' />
          <div className='container'>
            <h4>
              <b>Ticketing</b>
            </h4>
            <p>React + Express/My SQL</p>
          </div>
        </div>
        <div
          className='card'
          onClick={() => window.open('http://www.space4kids.ovh/', '_blank')}
        >
          <img src={tripperSrc} alt='Avatar' className='image' />
          <div className='container'>
            <h4>
              <b>Space 4 Kids</b>
            </h4>
            <p>React</p>
          </div>
        </div>
        <div className='card'>
          <img src={mamboSrc} alt='Avatar' className='image' />
          <div className='container'>
            <h4>
              <b>Space 4 Kids</b>
            </h4>
            <p>React</p>
          </div>
        </div>
      </div>
      <div className='discover-projects-section'>
        <a href='#contact' className='discover-projects-text'>
          Get in touch
        </a>
        <ChevronRight color='#b18742' size={24} />
      </div>
    </div>
  );
}
