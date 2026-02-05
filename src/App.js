import React from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen text-gray-100 selection:bg-primary-500 selection:text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="bg-dark-950 py-8 text-center text-gray-500 text-sm border-t border-dark-800">
        <p>© {new Date().getFullYear()} Lucas Lopez | Java Backend Developer. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
