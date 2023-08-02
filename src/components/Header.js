import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { TbChevronLeft } from 'react-icons/tb';
import Header from '../styles/styledHeader';
import theeWorthLogo from '../images/logo.png';
import SearchBar from './SearchBar';

const Layout = () => {
  const { companyCode } = useParams();

  return (
    <>
      <Header>
        <div>
          <Link to="/">
            <img src={theeWorthLogo} alt="Logo" />
            <h1>Thee Worth</h1>
            {!!companyCode && (
              <span>
                <TbChevronLeft />
                {' '}
                Back
              </span>
            )}
          </Link>
        </div>
        <SearchBar />
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
