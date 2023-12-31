import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TbMapPin, TbPhoneCall } from 'react-icons/tb';

import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { fetchCompanyDetails } from '../../redux/companyDetails/companyDetailSlice';
import './detail.css';

const CompanyDetails = () => {
  const dispatch = useDispatch();
  const { companyCode } = useParams();

  const {
    isError,
    isLoading,
    companyDetails: company,
  } = useSelector((state) => state.companyDetail);

  useState(() => {
    dispatch(fetchCompanyDetails({ companyCode }));
  }, [companyCode]);

  const mapNum = (key, value) => {
    if (key === 'Exchange') return value;

    if (key === 'Full Time Employees') {
      return new Intl.NumberFormat(navigator.language, {}).format(
        value,
      );
    }

    return new Intl.NumberFormat(navigator.language, {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  if (isLoading) return <div className="loading">Loading...</div>;

  if (isError) {
    return <div className="loading">Company Not Found</div>;
  }

  return (
    <div className="company">
      <div className="intro">
        <Link to={company.website} target="_blank">
          <Avatar
            sx={{ width: 50, height: 50 }}
            src={company.image}
            alt={company.symbol}
          />
          <div className="owner">
            <h3>{company.name}</h3>
            <h6>{company.ceo}</h6>
          </div>
        </Link>
        <div className="location">
          <span>
            <TbMapPin className="icon" />
            {' '}
            {company.address}
            ,
            {' '}
            {company.country}
          </span>
          <span>
            <TbPhoneCall className="icon" />
            {' '}
            {company.phone}
          </span>
        </div>
      </div>

      <TableContainer component={Paper} id="company-table">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2} id="title">
                Stock & Price Data (In USD)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {company.details?.map(({ key, value }) => (
              <TableRow key={key}>
                <TableCell>{key}</TableCell>
                <TableCell>
                  {mapNum(key, value)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CompanyDetails;
