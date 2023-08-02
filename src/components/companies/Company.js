import { BsBuilding } from 'react-icons/bs';
import { TbBuildingCommunity, TbFocusCentered, TbPlant } from 'react-icons/tb';
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Company = ({ company }) => {
  return (
    <Box width={'250px'} margin={'0 auto'}>
      <Link to={`/company/${company.symbol}`}>
        <Card elevation={4} className='card'>
          <CardContent>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              marginBottom={'1.5rem'}
            >
              <BsBuilding fontSize={'1.5rem'} />
              <Typography variant='body1' gutterBottom>
                {company.symbol}
              </Typography>
            </Stack>
            <Typography
              variant='body2'
              component={'div'}
              className='card-content'
              color={'text.secondary'}
            >
              <span>
                <TbBuildingCommunity className='icon' />
                <h6>Name</h6>
                <h6>{company.name}</h6>
              </span>
              <span>
                <TbFocusCentered className='icon' />
                <h6>Sector</h6>
                <h6>{company.sector}</h6>
              </span>
              <span>
                <TbPlant className='icon' />
                <h6>Founded</h6>
                <h6>
                  {new Date(company.founded).toLocaleString('en-us', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </h6>
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default Company;
