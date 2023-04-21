
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './components/Navbar';


 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
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
