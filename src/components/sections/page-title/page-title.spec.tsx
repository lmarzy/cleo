import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { PageTitle } from './page-title';
describe('Header Component', () => {
  afterEach(cleanup);
  test('shows correct title', () => {
    const pageTitle = 'Page Title';

    const { getByText } = render(
      <BrowserRouter>
        <PageTitle title={pageTitle} />
      </BrowserRouter>,
    );

    expect(getByText(pageTitle)).toBeInTheDocument();
  });
});
