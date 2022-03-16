import { React, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getRockets } from './redux/Rockets/rockets';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {

  const dispatchRocket = useDispatch();
  useEffect(() => {
    dispatchRocket(getRockets());
  }, []);

  return (
    <div>
        <Router>
   <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path={'/about'} element={<About />} />
        </Routes>
  
      </div>
    </Router>
    </div>
  );
}

export default App;
