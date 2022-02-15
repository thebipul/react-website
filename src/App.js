import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router,Routes,
  Route } from 'react-router-dom';
import Footer from './components/pages/Footer/footer';
import Intro from './components/pages/homepage/intro';
import About from './components/pages/about/about';
import Skills from './components/pages/skills/skills';
import Experience from './components/pages/experience/experience';
import Hobbies from './components/pages/hobbies/hobbies';
import Projects from './components/pages/projects/projects';

function App() {
  return (
    <Router>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Experience/>
      <Hobbies/>
      <Projects/>
      <Footer/>
    </Router>
  );
}

export default App;
