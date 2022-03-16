/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function NavBar() {

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
            <NavLink className="nav-Link pt-1"activeClassName="active-link"  to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
      </div>
      </div>
    </nav>
  );
}