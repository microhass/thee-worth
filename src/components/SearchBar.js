import { Stack, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { companyActions } from '../redux/companies/companySlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { companyCode } = useParams();

  useEffect(() => {
    dispatch(companyActions.filterData({ query }));
  }, [query, dispatch]);

  return (
    <Stack width={250}>
      <TextField
        label={companyCode ? 'Disabled' : 'Search company'}
        size="small"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={!!companyCode}
      />
    </Stack>
  );
};

export default SearchBar;
