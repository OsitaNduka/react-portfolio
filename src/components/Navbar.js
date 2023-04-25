import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"; 

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
            <Link to='/projectcard'>ProjectCard</Link>
            </div>
        </div>
  );
}

export default Navbar;