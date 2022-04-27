import React from 'react';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import hamburger from './assets/hamburger.png';

export default function NavBar() {
  const admin = useSelector((state) => state.admin);
  const handleLogout = async (e) => {
    e.preventDefault();
    window.location.href = '/';
  };
  return (
    <nav className="navbar fixed-top navbar-expand-lg justify-content-between  text-white d-flex container-fluid">
      <NavLink className="navbar-brand  text-white" to="/">
        DUNAMIS PHOTOGRAPHY
      </NavLink>
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
      {admin?.admin?.id && (
        <div
          className="collapse justify-content-end navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="d-flex ">
            <li className="nav-item bdr d-flex align-items-center px-3">
              <NavLink
                className="nav-Link btn btn-dark  text-white"
                to="/PDG_admin/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item bdr d-flex align-items-center px-3">
              <button
                type="button"
                className=" btn nav-Link btn-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
