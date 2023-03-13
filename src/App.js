import React from 'react';
import './App.css';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './components/Navbar';
import {Routes, Route, Link} from 'react-router-dom'; 

function App() {
  return (
    <div>
    <Navbar />
      
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/Contact' element={<Contact />} />
           <Route path='/Projects' element={<Projects />} />
        </Routes>
      
    </div>
    
  );
}

export default App;
