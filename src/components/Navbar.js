import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"; 
import prof from '../components/assets/prof-pic.jpg';

const Navbar = () => {
  return (
        <div className='navbar'>
          <img src={prof} alt='Osita Nduka' />
            
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