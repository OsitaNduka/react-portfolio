
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectCard from './pages/ProjectCard';


 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/projectcard'element={<ProjectCard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
