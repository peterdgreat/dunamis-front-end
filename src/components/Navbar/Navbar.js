/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { NavLink } from 'react-router-dom';
// import { logout } from '../redux/logout/logout';
import { useSelector } from 'react-redux';

export default function NavBar() {
  const admin = useSelector((state) => state.admin);
  const handleLogout = async (e) => {
    e.preventDefault();
    window.location.href = '/';
  };
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
          Dunamis Photography
        </NavLink>
      </div>
      {
              admin?.admin?.id && (
                <ul>
                  <li className="nav-item bdr d-flex align-items-center px-3">
                    <span role="button" className="nav-Link pt-1" onClick={handleLogout}>
                      Logout
                    </span>
                  </li>
                  <li className="nav-item bdr d-flex align-items-center px-3">
                    <NavLink className="nav-Link pt-1" to="/PDG_admin/dashboard">
                      Dashboard
                    </NavLink>
                  </li>
                </ul>
              )
            }
    </nav>
  );
}
