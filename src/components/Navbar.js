import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='header'>
        <Link to='/'>
            <h1>Osita Nduka</h1>
        </Link>
        <ul className={isActive ? 'nav-bar active' : 'nav-bar'}>
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
    </div>
  )
}

export default Navbar;