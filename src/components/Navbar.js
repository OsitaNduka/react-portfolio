import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap';
import "../styles/Navbar.css"; 
import prof-pic from '../components/assets/prof-pic'

const Navbar = () => {
  return (
        <div className='navbar'>
          <img src={prof-pic} alt='Osita Nduka' />
            
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