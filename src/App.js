import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getPost } from './redux/posts/posts';
import NotFound from './pages/404/NotFound';
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
    // dispatch(getAdmin());
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/PDG_admin/dashboard" element={<Admin />} />
            <Route exact path="/PDG_admin/login" element={<AdminLogin />} />
            <Route exact path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
