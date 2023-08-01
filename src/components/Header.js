import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../styles/styledHeader';
import theeWorthLogo from '../images/logo.png';
import SearchBar from './SearchBar';


const Layout = () => (
  <>
    <Header>
      <div>
        <Link to='/'>
          <img src={theeWorthLogo} alt='Logo' />
          <h1>Thee Worth</h1>
        </Link>
      </div>
      <SearchBar />
    </Header>
    <Outlet />
  </>
);

export default Layout;
