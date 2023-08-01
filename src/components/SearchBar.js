import { Stack, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { companyActions } from '../redux/companies/companySlice';
import { useParams } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { companyCode } = useParams();

  useEffect(() => {
    dispatch(companyActions.filterData({ query }));
  }, [query]);

  return (
    <Stack width={250}>
      <TextField
        label={companyCode ? 'Disabled' : 'Search company'}
        size='small'
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={!!companyCode}
      />
    </Stack>
  );
};

export default SearchBar;
