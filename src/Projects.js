import React from 'react';
import './Projects.css';
import { ArrowRight } from 'react-feather';
import { GitHub } from 'react-feather';
import ticketing from './ticketing.png';
import Tripper from './Tripper.png';
import TripperO from './TripperO.png';

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
      <div className='project-text'>Personal projects in progress..</div>
      <section className='ticketing-section'>
        <div>
          <h2>Ticketing</h2>
          <p className='tech-description'>
            React.js/Node.js (Express.js, MySQL)
          </p>

          <p className='ticketin-paragraph'>
            During my time as a customer support agent or even as a team lead I
            logically used different ticketing systems. Among great tools I
            often found missing features so I decided to kind of combine those
            platforms by integrating features that were missing on one to an
            other one.
          </p>
        </div>
        <img src={ticketing} alt='ticketing' />
      </section>
      <section className='tripper-section'>
        <div className='tripper'>
          <h2>Tripper</h2>
          <p className='tech-description'>React Native, Firebase, FireStore</p>
          <p className='ticketin-paragraph'>
            Tripper first started as a 24h individual hackathon during my
            apprenticeship. First it was a really basic app in which you could
            add trips and associate activities. <br /> I really wanted to take
            it further and it seemed logical to me to completely switch to a
            mobile app. <br /> I actually really developed a taste for mobile
            development, so here is a little pitch:
          </p>
          <blockquote className='tripper-pitch'>
            <p>
              “Your holidays at a glance! Tripper is an app that allows you to
              plan and create trips. It centralizes all relevant trip info in a
              single application, for you and your friends to best plan your
              trips!” <br />
            </p>
          </blockquote>
          {/* <p>
            - Navigate through active, past & upcoming trips <br />
            - See all relevant trip info with a single click <br />
            - Create a trip & add all necessary details (location, duration,
            activities, friend invites, etc..)
            <br />- Leave async inApp posts to keep friends updated (possible
            inApp/email notifications)
            <br />- Split all trip costs between participants <br />
          </p> */}
        </div>
        <div className='tripper-images'>
          <img src={TripperO} alt='tripperO' />
          <div className='image-space'></div>
          <img src={Tripper} alt='tripper' />
        </div>
      </section>
      <button className='hireme-button'>
        <a href='#contact' className='hireme-text'>
          Hire me
        </a>
        <ArrowRight color='white' size={24} />
      </button>
    </div>
  );
}
