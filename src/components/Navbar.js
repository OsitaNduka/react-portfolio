import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar"; 

const Navbar = () => {
  return (
        <div className='navbar'>
            Osita Nduka
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