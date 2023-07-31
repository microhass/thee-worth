import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SingleRocket from '../components/rockets/SingleRocket';
import { rocketActions } from '../redux/rockets/rocketSlice';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureMockStore([]);

describe('SingleRocket Component', () => {
  let store;
  let mockRocket;

  beforeEach(() => {
    mockRocket = {
      id: 123,
      name: 'Test Rocket',
      image: 'test-image-url',
      description: 'Description of Test Rocket',
      reserved: true,
    };

    const initialState = {};
    store = mockStore(initialState);

    store.dispatch = jest.fn();
  });

  test('renders rocket data correctly', () => {
    render(
      <Provider store={store}>
        <SingleRocket rocket={mockRocket} />
      </Provider>,
    );

    const rocketName = screen.getByText(mockRocket.name);
    expect(rocketName).toBeInTheDocument();

    const rocketDescription = screen.getByText(mockRocket.description);
    expect(rocketDescription).toBeInTheDocument();

    const reservedBadge = screen.getByText('Reserved');
    expect(reservedBadge).toBeInTheDocument();

    const rocketImage = screen.getByAltText(mockRocket.name);
    expect(rocketImage).toHaveAttribute('src', mockRocket.image);
  });

  test('dispatches toggleRocketReservation action when clicking reservation buttons', () => {
    render(
      <Provider store={store}>
        <SingleRocket rocket={mockRocket} />
      </Provider>,
    );

    const cancelButton = screen.getByTitle('Cancel Reservation');
    fireEvent.click(cancelButton);
    expect(store.dispatch)
      .toHaveBeenCalledWith(rocketActions.toggleRocketReservation(mockRocket.id));

    mockRocket.reserved = false;
    render(
      <Provider store={store}>
        <SingleRocket rocket={mockRocket} />
      </Provider>,
    );
    const reserveButton = screen.getByTitle('Reserve Rocket');
    fireEvent.click(reserveButton);
    expect(store.dispatch)
      .toHaveBeenCalledWith(rocketActions.toggleRocketReservation(mockRocket.id));
  });
});
