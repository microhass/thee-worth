import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Profile from '../components/profile/Profile';

const mockStore = configureMockStore();
describe('Profile Component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            id: 1,
            name: 'Mission 1',
            isMember: false,
          },
          {
            id: 2,
            name: 'Mission 2',
            isMember: true,
          },
        ],
      },
      rockets: {
        rockets: [
          {
            id: 1,
            name: 'Rocket 1',
            reserved: true,
          },
          {
            id: 2,
            name: 'Rocket 2',
            reserved: true,
          },
        ],
      },
    });
  });

  it('should render the profile page', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
