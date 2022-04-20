/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
// import { logout } from '../redux/logout/logout';

export default function NavBar() {
  const location = useLocation();
  let user = {};
  if (location.state) {
    // console.log(`NAVLOCATION: ${location.state.user}`);
    user = location.state.user;
  }

  console.log(`NAVUSER: ${user}`);
  const handleLogout = async (e) => {
    e.preventDefault();
    window.location.href = '/';
    // const response = await logout(user);
    // console.log(`LOGOUT: ${response}`);
  };
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];
  return (
    <nav className="navbar navbar-expand-sm  bg">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <GiHamburgerMenu />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav col-12  justify-content-end align-items-center">
            {links.map((link) => (
              <li key={link.id} className="nav-item bdr d-flex align-items-center px-3">
                <NavLink className="nav-Link pt-1" to={link.path}>{link.text}</NavLink>
              </li>
            ))}
            {
              location.state && (
              <li className="nav-item bdr d-flex align-items-center px-3">
                <span role="button" className="nav-Link pt-1" onClick={handleLogout}>
                  Logout
                </span>
              </li>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}
