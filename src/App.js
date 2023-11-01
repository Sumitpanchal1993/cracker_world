import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <>
      <div className="base">
        <Router>
          <Navbar />
          <Routes>
            <Route></Route>
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
