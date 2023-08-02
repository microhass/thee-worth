import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Companies from '../components/companies';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureMockStore([]);

describe('Companies Component', () => {
  let store;

  beforeEach(() => {
    const mockCompanies = [
      {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        sector: 'Technology',
        founded: '12-3-2001',
      },
      {
        symbol: 'ABNB',
        name: 'Airbnb',
        sector: 'Consumer Cyclical',
        founded: '3-3-2001',
      },
    ];

    const initialState = {
      companies: {
        companies: mockCompanies,
        queryResults: mockCompanies,
        isLoading: false,
      },
      companyDetail: {
        companyDetails: {},
        isLoading: false,
        isError: false,
      },
    };

    store = mockStore(initialState);

    store.dispatch = jest.fn();
  });

  test('renders companies correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Companies />
        </BrowserRouter>
      </Provider>,
    );

    const company1 = screen.getByText('Apple Inc.');
    const company2 = screen.getByText('Airbnb');
    expect(company1).toBeInTheDocument();
    expect(company2).toBeInTheDocument();

    const sector1 = screen.getByText('Technology');
    expect(sector1).toBeInTheDocument();
  });

  test('renders loading message when isLoading is true', () => {
    store.getState().companies.isLoading = true;

    render(
      <Provider store={store}>
        <Companies />
      </Provider>,
    );

    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });
});
