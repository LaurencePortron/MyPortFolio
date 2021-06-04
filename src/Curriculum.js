import React from 'react';
import './Curriculum.css';
import { ArrowRight } from 'react-feather';
import { AiOutlineLinkedin } from 'react-icons/ai';
import Airbnb from './airbnb.png';
import GitBook from './gitbook.png';
import Wild from './wild.png';
import Zendesk from './zendesk.png';
import TravelZoo from './travelzoo.png';

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
            <p className='why-text'>
              After 5 years in customer support and sales in both small & large
              companies, I am pursuing my next passion: web development..
            </p>
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
            <div className='company'>
              <img src={GitBook} alt='gitbook-logo' />
              GitBook
            </div>
            <div>Customer Support Team Lead</div>
            <div className='year'>France, Lyon</div>
            <div className='year'>2018 - 2020</div>
          </div>
          <div className='left'>
            <div className='company'>
              <img src={Airbnb} alt='airbnb-logo' />
              Airbnb (VoxPro)
            </div>
            <div>Sales executive</div>
            <div className='year'>Ireland, Cork</div>
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
            <div className='company'>
              {' '}
              <img src={Wild} alt='wild-logo' />
              Wild Code School
            </div>
            <div>Apprenticeship web development</div>
            <div className='year'>France, Lyon</div>
            <div className='year'>2020 - 2021</div>
          </div>
          <div className='right'>
            <div className='company'>
              <img src={Zendesk} alt='zendesk-logo' />
              Zendesk
            </div>
            <div>Sales Development Rep</div>
            <div className='year'>Ireland, Dublin</div>
            <div className='year'>2018</div>
          </div>
          <div className='right'>
            <div className='company'>
              <img src={TravelZoo} alt='travelZoo-logo' />
              TravelZoo (VoxPro)
            </div>
            <div>Customer support rep</div>
            <div className='year'>Ireland, Cork</div>
            <div className='year'>2016</div>
          </div>
        </div>
      </div>
    </div>
  );
}
