import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Missions from '../components/missions/Missions';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureMockStore([]);

describe('Missions Component', () => {
  let store;
  let mockMissions;

  beforeEach(() => {
    mockMissions = [
      {
        id: 1,
        name: 'Mission 1',
        description: 'Description of Mission 1',
        reserved: true,
      },
      {
        id: 2,
        name: 'Mission 2',
        description: 'Description of Mission 2',
        reserved: false,
      },
    ];

    const initialState = {
      missions: {
        missions: mockMissions,
        isLoading: false,
      },
    };
    store = mockStore(initialState);

    store.dispatch = jest.fn();
  });

  test('renders missions data correctly', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const mission1Name = screen.getByText('Mission 1');
    const mission2Name = screen.getByText('Mission 2');
    expect(mission1Name).toBeInTheDocument();
    expect(mission2Name).toBeInTheDocument();

    const mission1Description = screen.getByText('Description of Mission 1');
    const mission2Description = screen.getByText('Description of Mission 2');
    expect(mission1Description).toBeInTheDocument();
    expect(mission2Description).toBeInTheDocument();
  });

  test('renders loading message when isLoading is true', () => {
    store.getState().missions.isLoading = true;

    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });
});
