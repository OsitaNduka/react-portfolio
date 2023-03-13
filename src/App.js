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
        <link to='#' className='nav-item'>Home</link>
        <link to='#' className='nav-item'>Contact</link>
        <link to='#' className='nav-item'>Projects</link>
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
