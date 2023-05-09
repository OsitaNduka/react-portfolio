import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub } from '@mui/icons-material';
import prof from '../components/assets/prof-pic.jpg';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, My Name is Osita Nduka</h2>
        <img src={prof} alt='Osita Nduka' />
        <div className='prompt'>
          <p> A Software developer with a passion for coding and learning.</p>
          <GitHub /> 
          <LinkedInIcon />
          <FacebookIcon />
        </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
            HTML5, CSS3, Javascript, jQuery, React.js, Node, ReactJS, React Native, Fluter, 
            NPM, BootStrap, Agile development, Version control, Git, GitHub, and Netlify 
            MaterialUI, TailwindCSS, Yarn and Technical project management,
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Javascript, Java, Python, C#, C, C++, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;