import React from 'react';
import './Header.css';

export default function Header(props) {
  return (
    <div className='header'>
      <div className='header-right'>
        <a className='active' href='#home'>
          Welcome
        </a>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </div>
    </div>
  );
}
