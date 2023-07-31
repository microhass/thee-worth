import { Stack, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
  const { companies } = useSelector((state) => state.companies);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch()
  
  useEffect(()=>{
    
  }, [query])

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
