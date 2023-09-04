import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../pages/Home';
import store from '../redux/store';

describe('Home', () => {
  it('should render the Home page', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(screen.getByText('Search by country name')).toBeInTheDocument();
  });

  it('should display loading message when status is "loading"', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    store.dispatch({ type: 'countries/setStatus', payload: 'loading' });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
