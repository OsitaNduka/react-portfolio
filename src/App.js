import React from 'react';
import './App.css';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './components/Navbar';
import {Routes, Route, Link, Router} from 'react-router-dom'; 

function App() {
  return (
    <Router>
     <Navbar /> 
     <div className='container'>
       
      
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/Contact' element={<Contact />} />
           <Route path='/Projects' element={<Projects />} />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
