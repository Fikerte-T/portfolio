import Navbar from './components/Navbar';
import './App.css';
// import { portfolio, about, contact } from './components/Navbar';
import { useRef } from 'react';
// import { Routes, Route} from 'react-router-dom';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  const portfolioref = useRef(null);
  const aboutref = useRef(null);
  const contactref = useRef(null);

  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offSetTop,
  //     behavior: 'smooth'
  //   });
  // };

  return (
    <div className="App">
      <Navbar portfolioref = {portfolioref}
              contactref = {contactref}
              aboutref = {aboutref}
      />
      {/* <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Portfolio ref={portfolioref} />
      <About ref={aboutref} />
      <Contact ref={contactref} />
    </div>
  );
}

// export {portfolio, about, contact};
export default App;
