import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getPost } from './redux/posts/posts';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Admin from './pages/Admin/Admin';
import AdminLogin from './pages/Login/AdminLogin';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PDG_admin/dashboard" element={<Admin />} />
            <Route path="/PDG_admin/login" element={<AdminLogin />} />
            <Route path="/about" element={<About />} />
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
