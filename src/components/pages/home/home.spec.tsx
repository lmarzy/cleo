import React from 'react';
import { render } from '@testing-library/react';

import { HomePage } from './home';

describe('Home Page', () => {
  const { getByText } = render(<HomePage />);

  test('shows correct page title', () => {
    const pageTitle = getByText('Home Page');
    expect(pageTitle).toBeInTheDocument();
  });
});
