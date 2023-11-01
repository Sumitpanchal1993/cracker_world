import './App.css';
import Navbar from './Component/Navbar';
import General from './Component/General';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Card from './Component/Card';


function App() {
  return (
    <>
      <div className="base">
        <Router>
          <Navbar />
          <General/>
          <div className="prd">

          <Card/>
          <Card/>
          <Card/>
          </div>
          <Routes>
            <Route></Route>
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
