import React from 'react';
import './Projects.css';
import { ChevronRight } from 'react-feather';
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
      <div className='project-text'>
        Besides a few group projects developed during my apprenticeship I
        started coding on two major personal projects:
      </div>
      <section className='ticketing-section'>
        <div>
          <h2>Ticketing</h2>
          <p> React.js/Node.js (Express.js, MySQL)</p>
          <p>
            Customer service at its best! Contextual, customisable and easy to
            use ticketing system. Support Teams will be able to: <br />
            <br />
            - Navigate through all tickets (new, assigned, closed, VIP..) <br />
            - See customer information/history at a glance
            <br />- Fast replies increasing FRT & customer satisfaction <br /> -
            Consult reports to see where you can improve your support experience
          </p>
        </div>
        <img src={ticketing} alt='ticketing' />
      </section>
      <section className='tripper-section'>
        <div className='tripper'>
          <h2>Tripper</h2>
          <p>React Native, FireBase, FireStore</p>
          <p>
            Your holidays at a glance! Tripper is an app that allows you to plan
            and create trips. It centralizes all relevant trip info in a single
            application, for you and your friends to best plan your trips! Users
            will be able to: <br />
            <br />
            - Navigate through active, past & upcoming trips <br />
            - See all relevant trip info with a single click <br />
            - Create a trip & add all necessary details (location, duration,
            etc..) <br />
            - Plan events/activities & associate them to a trip <br />
            - Invite friends to a trip <br />- Leave async inApp posts to keep
            friends updated (possible inApp/email notifications)
            <br />- Split all trip costs between participants <br />
          </p>
        </div>
        <div className='tripper-images'>
          <img src={TripperO} alt='tripperO' />
          <div className='image-space'></div>
          <img src={Tripper} alt='tripper' />
        </div>
      </section>
      <div className='discover-projects-section'>
        <a href='#contact' className='discover-projects-text'>
          Get in touch
        </a>
        <ChevronRight color='#b18742' size={24} />
      </div>
    </div>
  );
}
