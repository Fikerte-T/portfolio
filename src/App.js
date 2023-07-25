import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <div className="App">
      <Navbar />
      <ScrollToTop>
        <Routes>
            <Route path="/" element={<Navigate to="/portfolio" />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
