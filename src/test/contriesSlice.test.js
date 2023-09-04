import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Home from '../pages/Home';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Home Page', () => {
  it('renders countries correctly', async () => {
    const initialState = {
      countries: {
        countries: [
          {
            cca2: 'ES',
            name: { common: 'Spain' },
            population: 46704314,
            latlng: [40.0, -4.0],
          },
          {
            cca2: 'FR',
            name: { common: 'France' },
            population: 67022000,
            latlng: [46.0, 2.0],
          },
        ],
        status: 'succeeded',
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );

    const spainElement = screen.getByText('Spain');
    expect(spainElement).toBeInTheDocument();

    const franceElement = screen.getByText('France');
    expect(franceElement).toBeInTheDocument();
  });
});
