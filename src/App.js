import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
