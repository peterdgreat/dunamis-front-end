import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavItems from './Navbar.style';
import hamburger from './assets/hamburger.png';
import './Navbar.css';

export default function NavBar() {
  const navigate = useNavigate();
  const admin = useSelector((state) => state.admin);
  const handleLogout = async (e) => {
    e.preventDefault();
    window.location.href = '/';
  };
  return (
    <nav className=" navbg fixed-top navbar navbar-expand-lg justify-content-between  text-white d-flex container-fluid">

      <NavItems
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="navbar-brand  nav-text"
        onClick={() => { navigate('/'); }}
      >
        DUNAMIS PHOTOGRAPHY
      </NavItems>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src={hamburger} alt="hamburger" />
      </button>
      <div
        className="collapse justify-content-end navbar-collapse pt-2"
        id="navbarSupportedContent"
      >
        <ul className="d-flex flex-column flex-md-row  ">
          <li className="nav-item pt-5 pt-md-0 bdr d-flex align-items-center px-3">
            <NavItems
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => { navigate('/portfolio'); }}
            >
              Portfolio
            </NavItems>
          </li>
          <li className="nav-item pt-5 pt-md-0  bdr d-flex align-items-center px-3">
            <NavItems
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => { navigate('/about'); }}
            >
              About
            </NavItems>
          </li>
          {admin?.admin?.id && (
            <>
              <li className="nav-item bdr d-flex align-items-center px-3  pt-5 pt-md-0 ">

                <NavItems
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  className="nav-Link"
                  onClick={() => { navigate('/PDG_admin/dashboard'); }}
                >
                  Dashboard
                </NavItems>
              </li>
              <li className="nav-item bdr d-flex align-items-center px-3  pt-5 pt-md-0 ">
                <NavItems
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  type="button"
                  className=" btn"
                  onClick={handleLogout}
                >
                  Logout
                </NavItems>
              </li>
            </>
          )}
        </ul>
      </div>

    </nav>
  );
}
