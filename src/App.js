import React from 'react';
import './App.css';
import Home from './Home';
import {Routes, Route, Link} from 'react-router-dom'; 

function App() {
  return (
    <div className='App'>
      <nav className='nav'>
        <link to='#' className='nav-item'>Home</a>
        <link to='#' className='nav-item'>Contact</a>
        <link to='#' className='nav-item'>Projects</a>
        </nav>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/Projects' element={<Projects />} />
        </Routes>
      
    </div>
    
  );
}

export default App;
