import { useParams } from 'react-router-dom';
import { fetchCompanyDetails } from '../../redux/companyDetails/companyDetailSlice'; 
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CompanyDetails = () => {
  const dispatch = useDispatch();
  const { companyCode } = useParams();

  const { isLoading, companyDetails } = useSelector((state) => state.companyDetail);

  useState(() => {
    dispatch(fetchCompanyDetails({ companyCode }));
  }, [companyCode]);

  if (isLoading) return <div className='loading'>Loading...</div>;
  console.log(companyDetails);

  return <div>CompanyDetails</div>;
};

export default CompanyDetails;
