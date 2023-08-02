import { Person } from '@mui/icons-material';
import { BsBuilding } from 'react-icons/bs';
import { TbBuildingCottage, TbReportMoney } from 'react-icons/tb';
import { FaExchangeAlt } from 'react-icons/fa';
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
      <Link to={`/${company.symbol}`}>
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
                <TbBuildingCottage className='icon' />
                <h6>Name</h6>
                <h6>{company.name}</h6>
              </span>
              <span>
                <TbReportMoney className='icon' />
                <h6>Sector</h6>
                <h6>{company.sector}</h6>
              </span>
              <span>
                <FaExchangeAlt className='icon' />
                <h6>Founded In</h6>
                <h6>{company.founded}</h6>
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default Company;

//  {
//     "symbol" : "SPY",
//     "name" : "SPDR S&P 500 ETF Trust",
//     "price" : 441.4,
//     "exchange" : "New York Stock Exchange Arca",
//     "exchangeShortName" : "NYSE",
//     "type" : "etf"
//   }

//
//   symbol: 'AMGN',
//   name: 'Amgen Inc.',
//   sector: 'Healthcare',
//   subSector: 'Healthcare',
//   headQuarter: 'Thousand Oaks, CA',
//   dateFirstAdded: '2020-08-31',
//   cik: '0000318154',
//   founded: '1980-04-08',
// },
