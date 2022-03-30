import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getPost } from './redux/posts/posts';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import ImageGAllery from './components/ImageGallery/ImageGallery';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <ImageGAllery />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
