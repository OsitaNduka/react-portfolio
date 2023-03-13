import React from 'react';
import './App.css';
import Home from './Home';
import {Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <div className='App'>
      <nav className='nav'>
        <a href='#' className='nav-item'>Home</a>
        </nav>
        <Routes>
           <Route path='/' element={<Home />} />
        </Routes>
      
    </div>
    
  );
}

export default App;
