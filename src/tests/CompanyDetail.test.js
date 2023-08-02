import React from 'react';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import Company from '../components/companies/Company';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore([]);

describe('Company details Component', () => {
  let company = {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    sector: 'Technology',
    founded: '12-3-2001',
    details: [{ key: 'Price', value: 100.0 }],
  };

  test('renders company details correctly', () => {
    render(
      <BrowserRouter>
        <Company company={company} />
      </BrowserRouter>
    );

    const symbol = screen.getByText('AAPL');
    const foundedDate = screen.getByText('December 3, 2001');
    expect(symbol).toBeInTheDocument();
    expect(foundedDate).toBeInTheDocument();

    const sector1 = screen.getByText('Technology');
    expect(sector1).toBeInTheDocument();
  });
});
