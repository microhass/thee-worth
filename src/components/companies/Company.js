import PropTypes from 'prop-types';
import { BsBuilding, BsArrowRightCircle } from 'react-icons/bs';
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Company = ({ company }) => (
  <Box width="100%" margin="0 auto" id="card-container">
    <Link to={`/company/${company.symbol}`}>
      <div className="card">
        <Stack
          justifyContent="space-between"
          gap="1rem"
          marginBottom="1.5rem"
        >
          <BsBuilding fontSize="1.5rem" />
          <Typography variant="body1" gutterBottom>
            {company.symbol}
          </Typography>
        </Stack>
        <Typography
          variant="body2"
          component="div"
          className="card-content"
          color="text.secondary"
        >
          <span>
            <BsArrowRightCircle fontSize="1.3rem" />
          </span>
          <span>
            <h6>{company.name}</h6>
          </span>
          <span>
            <h6>{company.cik}</h6>
          </span>
          <span>
            <h6>
              {new Date(company.founded).toLocaleString('en-us', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </h6>
          </span>
        </Typography>
      </div>
    </Link>
  </Box>
);

Company.propTypes = {
  company: PropTypes.shape({
    symbol: PropTypes.string,
    name: PropTypes.string,
    sector: PropTypes.string,
    cik: PropTypes.string,
    founded: PropTypes.string,
  }),
};

Company.defaultProps = {
  company: {
    symbol: 'X',
    name: 'Company X',
    sector: 'Technology',
    cik: '001',
    founded: '1-1-2001',
  },
};

export default Company;
