import './App.css';
import Navbar from './Component/Navbar';
import General from './Component/General';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Card from './Component/Card';
import Main from './Component/Main';
import Footer from './Component/Footer';


function App() {
  return (
    <>
      <div className="base">
        <Router>
          <Navbar />
          <Main />
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
