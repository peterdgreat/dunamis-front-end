import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { trackPromise } from 'react-promise-tracker';
import { getPost } from './redux/posts/posts';
import NotFound from './pages/404/NotFound';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Banner from './components/Banner/Banner';
import Admin from './pages/Admin/Admin';
import AdminLogin from './pages/Login/AdminLogin';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    trackPromise(
      dispatch(getPost()),
    );
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <Banner />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/PDG_admin/dashboard" element={<Admin />} />
            <Route exact path="/PDG_admin/login" element={<AdminLogin />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
