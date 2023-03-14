import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='header'>
            <h1>Osita Nduka</h1>
        </div>
        <nav className='item'>
            <ul className='ul'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;