
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Serv from './components/Serv';
// Example import in your index.js or App.js file
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { useEffect } from 'react';
import Services from './components/Services';
import Skills from './components/Skills';
function App() {
 

  return (
   <>
  
   <div className="app ">
   <Header/>
    <Hero/>
    
   <br /><br />
    <Serv/>
    <br />
    <About />
    <br />
    <br />
    <Portfolio />
    <Skills />
    <Services /><br />
    <Contact />
    
    
    </div>
    
   
   </>
  );
}

export default App;
