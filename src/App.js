import React from 'react';
import './App.css';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import {Routes, Route, Link} from 'react-router-dom'; 

function App() {
  return (
    <div className='App'>
      <nav className='nav'>
        <Link to='/' className='nav-item'>Home</Link>
        <Link to='/contact' className='nav-item'>Contact</Link>
        <Link to='/projects' className='nav-item'>Projects</Link>
        </nav>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/Contact' element={<Contact />} />
           <Route path='/Projects' element={<Projects />} />
        </Routes>
      
    </div>
    
  );
}

export default App;
