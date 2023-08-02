import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies } from '../../redux/companies/companySlice';
import { useEffect } from 'react';
import Company from './Company';
import './index.css';

const Companies = () => {
  const dispatch = useDispatch();

  const { companies, queryResults, isLoading } = useSelector(
    (state) => state.companies
  );

  useEffect(() => {
    if (companies?.length !== 0) return;
    dispatch(fetchCompanies());
  }, [dispatch, companies?.length]);

  if (isLoading) return <div className='loading'>Loading...</div>;

  if (queryResults.length === 0)
    return <div className='loading'>No results found!</div>;

  return (
    <main>
      {queryResults.map((company, i) => (
        <Company key={`${company.symbol}${i}`} company={company} />
      ))}
    </main>
  );
};

export default Companies;
