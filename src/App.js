import './App.css';
import TopPage from './components/TopPage';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = 'Houssame Errjem'
  });
  
  return (
    <div className="App">
      <TopPage />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
