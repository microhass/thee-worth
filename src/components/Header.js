import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import Header from '../styles/styledHeader';
import spaceLogo from '../images/planet.png';

const links = [
  {
    name: 'rockets',
    href: '/',
  },
  {
    name: 'missions',
    href: '/missions',
  },
  {
    name: 'my profile',
    href: '/profile',
  },
];

const Layout = () => (
  <>
    <Header>
      <div>
        <Link to="/">
          <img src={spaceLogo} alt="Logo" />
          <h1>Thee Worth</h1>
        </Link>
      </div>
     
    </Header>
    <Outlet />
  </>
);

export default Layout;
