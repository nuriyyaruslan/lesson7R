import React from 'react';
import './About.scss';
import { useSelector } from 'react-redux';

function About() {
    const count = useSelector((state) => state.counter.value);

  return (
    <div className='about-cover'>
        <h1>About</h1>
        <strong>This is about {count}</strong>
    </div>
  )
}

export default About