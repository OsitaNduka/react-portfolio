
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';


 

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
