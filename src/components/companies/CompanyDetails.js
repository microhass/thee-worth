import { Link, useParams } from 'react-router-dom';
import { fetchCompanyDetails } from '../../redux/companyDetails/companyDetailSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
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

  if (isLoading) return <div className='loading'>Loading...</div>;

  if (isError)
    return <div className='loading'>Company Not Found</div>;

  return (
    <div className='company'>
      <div className='intro'>
        <Link to={company.website}>
          <Avatar
            sx={{ width: 50, height: 50 }}
            src={company.image}
            alt=''
          />
          <div className='owner'>
            <h3>{company.name}</h3>
            <h6>{company.ceo}</h6>
          </div>
        </Link>
        <div className='location'>
          <span>
            💥 {company.address}, {company.country}
          </span>
          <span>💥 {company.phone}</span>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2} id='title'>
                Stock & Price Data (In USD)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {company.details?.map(({ key, value }) => (
              <TableRow key={key}>
                <TableCell>{key}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Paper>
        <h5>Description</h5>
        <Typography>{company.description}</Typography>
      </Paper>
    </div>
  );
};

export default CompanyDetails;
