import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap';
import "../styles/Navbar.css"; 
import prof from '.../components/assets/prof-pic.jpg';

const Navbar = () => {
  return (
        <div className='navbar'>
          <img src={prof-pic.jpg} alt='Osita Nduka' />
            
            <div className='toggleButton'>
              <button> </button>
            </div>
            <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
            </div>
        </div>
  );
}

export default Navbar;