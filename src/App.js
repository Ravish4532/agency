import React from 'react';
import Navbar from './Navbar';
import Masthead from './Masthead';
import Services from './Services';
import Portfolio from './Portfolio';
import About from './About';
import Team from './Team';
import Client from './Client';
import Contact from './Contact';
import Footer from './Footer';
import "./css/styles.css"


const App = () => {
  return (
    <div className="App">
      
      <Navbar />
      <Masthead />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Client />
      <Contact />
      <Footer />
      </div>
  );
}

export default App;
