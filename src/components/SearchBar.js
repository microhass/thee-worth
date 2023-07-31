import { Stack, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { companyActions } from '../redux/companies/companySlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(companyActions.filterData({ query }));
  }, [query]);

  return (
    <Stack width={250}>
      <TextField
        label='Search company'
        size='small'
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Stack>
  );
};

export default SearchBar;
