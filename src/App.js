import './App.css';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import ScrollToTopBtn from './components/ScrollToTopBtn';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTopBtn />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
