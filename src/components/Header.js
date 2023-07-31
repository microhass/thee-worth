import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../styles/styledHeader';
import spaceLogo from '../images/planet.png';
import SearchBar from './SearchBar';


const Layout = () => (
  <>
    <Header>
      <div>
        <Link to='/'>
          <img src={spaceLogo} alt='Logo' />
          <h1>Thee Worth</h1>
        </Link>
      </div>
      <SearchBar />
    </Header>
    <Outlet />
  </>
);

export default Layout;
