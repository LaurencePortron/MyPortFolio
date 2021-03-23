import React from 'react';
import './Curriculum.css';
import { ChevronRight } from 'react-feather';
import { AiOutlineLinkedin } from 'react-icons/ai';

export default function Curriculum(props) {
  return (
    <div>
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
          <div lassName='curriculum-text'>
            With solid experience in customer relations, I recently transitioned
            to web development. <br />
            After being at the frontline of a product, I am eager to have a
            maximum impact on its core.
            <br /> Energetic and determined, I am looking for an internship
            starting in March 2021.
          </div>
          <div className='discover-projects-section'>
            <a href='#projects' className='discover-projects-text'>
              Discover my Projects
            </a>
            <ChevronRight color='#b18742' size={24} />
          </div>
        </div>
        <div className='experience-left'>
          <div className='first-left'>
            <div className='year'>2018 - 2020</div>
            <div className='wild'>GitBook</div>
            <div>Customer Support Team Lead</div>
          </div>
          <div className='left'>
            <div className='year'>2016 - 2017</div>
            <div className='wild'>Airbnb (VoxPro)</div>
            <div>Sales executive</div>
          </div>
          <div className='left'>
            <div className='year'>Rocket launched &#128640; </div>
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
            <div className='year'>2020</div>
            <div className='wild'>Wild Code School</div>
            <div>Apprenticeship web development</div>
          </div>
          <div className='right'>
            <div className='year'>2018</div>
            <div className='wild'>Zendesk</div>
            <div>Sales Development Rep</div>
          </div>
          <div className='right'>
            <div className='year'>2016</div>
            <div className='wild'>TravelZoo (VoxPro)</div>
            <div>Customer suport rep</div>
          </div>
        </div>
      </div>
    </div>
  );
}
