import React from 'react';
import './Curriculum.css';
import { ArrowRight, ChevronRight } from 'react-feather';
import { AiOutlineLinkedin } from 'react-icons/ai';

export default function Curriculum(props) {
  return (
    <div className='curriculum'>
      <div className='curriculum-title-container'>
        <div className='curriculum-title'>Work History</div>
        <div
          className='linkedin-icon'
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/laurenceportron/',
              '_blank'
            )
          }
        >
          <AiOutlineLinkedin color='white' size={40} />
        </div>
      </div>

      <div className='curriculum-container'>
        <div className='curriculum-text-container'>
          <div className='curriculum-text'>
            <p className='why-text'>Why web development? </p>
            <br />
            Well I am still sometimes asking myself why I complicated my life so
            much to turn into a web developer.. ;)
            <br /> Energetic and determined, I am now looking for my first work
            experience (internship).
          </div>
          <div className='discover-projects-section'>
            <a href='#projects' className='discover-projects-text'>
              See my projects
            </a>
            <ArrowRight color='#78e4ff' size={24} />
          </div>
        </div>
        <div className='experience-left'>
          <div className='first-left'>
            <div className='company'>GitBook</div>
            <div>Customer Support Team Lead</div>
            <div className='year'>2018 - 2020</div>
          </div>
          <div className='left'>
            <div className='company'>Airbnb (VoxPro)</div>
            <div>Sales executive</div>
            <div className='year'>2016 - 2017</div>
          </div>
          <div className='left'>
            <div className='company'>Rocket launched </div>&#128640;
          </div>
        </div>
        <div className='git'>
          <div className='circle'></div>
          <div className='line'></div>
          <div className='circle'></div>
          <div className='line'></div>
          <div className='circle'></div>
          <div className='line'></div>
          <div className='circle'></div>
          <div className='line'></div>
          <div className='circle'></div>
          <div className='line'></div>
          <div className='circle'></div>
        </div>
        <div className='experience-right'>
          <div className='right'>
            <div className='company'>Wild Code School</div>
            <div>Apprenticeship web development</div>
            <div className='year'>2020 - 2021</div>
          </div>
          <div className='right'>
            <div className='company'>Zendesk</div>
            <div>Sales Development Rep</div>
            <div className='year'>2018</div>
          </div>
          <div className='right'>
            <div className='company'>TravelZoo (VoxPro)</div>
            <div>Customer support rep</div>
            <div className='year'>2016</div>
          </div>
        </div>
      </div>
    </div>
  );
}
