import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './header';
describe('Header Component', () => {
  afterEach(cleanup);
  test('shows correct title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(getByText('React Apollo')).toBeInTheDocument();
  });

  test('toggles site navigation', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const btnShow = getByText('Show Site Navigation');
    expect(btnShow).toBeInTheDocument();

    fireEvent.click(btnShow);

    const btnHide = getByText('Hide Site Navigation');
    expect(btnHide).toBeInTheDocument();
  });
});
