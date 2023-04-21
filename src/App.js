
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';


 

function App() {
  return (
    <div className='App'>
      <Router>
       <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/' element={<Contact />} />
        <Route path='/' element={<Projects />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
