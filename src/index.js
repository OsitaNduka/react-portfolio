import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './Contact';
import Projects from './Projects';
import Home from './Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Projects' element={<Projects/>}/>
        </Route>
    </Routes>
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
