import React from 'react';
import './Projects.css';
import { ArrowRight } from 'react-feather';
import { GitHub } from 'react-feather';
import ticketing from './ticketing.png';
import Tripper from './Tripper.png';
import TripperO from './TripperO.png';
import MyProfile from './myProfile.png';
import Wall from './wall.png';
import Playlist from './playlist.png';
import SpotSearch from './spotSearch.png';

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
        </div>
        <div className='tripper-images'>
          <img src={TripperO} alt='tripperO' />
          <div className='image-space'></div>
          <img src={Tripper} alt='tripper' />
        </div>
      </section>

      <section className='social-section'>
        <div className='social'>
          <h2>Social</h2>
          <p className='tech-description'>
            React Native, Firebase (FireStore, Storage, Cloud Functions,
            Algolia)
          </p>
          <p className='ticketin-paragraph'>
            Bored on a saturday night, I started working on a Facebook alike
            app. <br /> <br /> First time using cloud functions, the storage of
            Firebase and the implementation of Algolia. A whole bunch of new
            things I learned, it is actually really exciting.
          </p>
          <p className='ticketin-paragraph'>
            Bringing in the new aspect of having multiple users in the app, can
            be a bit challenging at some stages since a lot of different
            scenarios need to be considered depending on the actions a user
            wants to undertake. It was (still is) really fun though and I
            totally enjoy it!!
            <br /> <br />
          </p>
        </div>
        <div className='tripper-images'>
          <img src={MyProfile} alt='myProfile' />
          <div className='image-space'></div>
          <img src={Wall} alt='wall' />
        </div>
      </section>

      <section className='api-section'>
        <div className='api'>
          <h2>Spotify API</h2>
          <p className='api-description'>
            React, Spotify API (Express, Fetch-Node)
          </p>
          <p className='api-paragraph'>
            It's been a while since I worked with APIs, so I started doing a
            Spotify clone using their API. Basic features like adding playlists,
            adding songs to playlists and searching for songs and/or artists are
            already implemented but now I am looking to explore it to its
            fullest.
          </p>
        </div>
        <div className='api-images'>
          <img src={Playlist} alt='Playlist' />
          <div className='api-space'></div>
          <img src={SpotSearch} alt='SpotSearch' />
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
