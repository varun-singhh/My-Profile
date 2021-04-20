import React from 'react';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Particles from './Particles';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
  return (
    <div>
      <Particles/>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
