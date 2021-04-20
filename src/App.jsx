import { useEffect, useState } from 'react';
import About from './Components/About';
import './styles/App.css';
import Header from './Components/Header';
import Particles from './Components/Particles';
import ToggleButton from 'react-toggle-button';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import Footer from './Components/Footer';


function App() {
  const [theme, setTheme] = useState(0);
  useEffect(() => {
    const chooseTheme = () => {
      if (theme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.removeItem('theme');
      }
    };

    chooseTheme();
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  // let state = 0;
  return (
    <div className="App dark:bg-light-gray">
      <Particles />
      <div className="absolute right-10 top-10">
        <ToggleButton
          value={theme || false}
          onToggle={() => {
            setTheme(!theme);
          }}
          inactiveLabel={''}
          activeLabel={''}
          colors={{
            activeThumb: {
              base: '#e9d66e',
            },
            inactiveThumb: {
              base: '#50a3a2',
            },
            active: {
              base: '#f4f8fd',
              hover: '#f4f8fd',
            },
            inactive: {
              base: 'rgb(95,96,98)',
              hover: 'rgb(95,96,98)',
            },
          }}
        />
      </div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
