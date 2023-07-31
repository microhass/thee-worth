import { Stack, TextField } from '@mui/material';

const SearchBar = () => {
  return (
    <Stack width={250}>
      <TextField label='Search company' size='small' fullWidth />
    </Stack>
  );
};

export default SearchBar;
