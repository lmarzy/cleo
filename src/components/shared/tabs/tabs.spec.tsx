import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Tabs } from './tabs';
describe('Tabs Component', () => {
  afterEach(cleanup);
  test('shows correct text in the document', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Tabs items={['Tab 1', 'Tab 2']} activeTab={0}>
          <div>Tab 1 Content</div>
          <div>Tab 2 Content</div>
        </Tabs>
      </BrowserRouter>,
    );

    expect(getByText('Tab 1')).toBeInTheDocument();
    expect(getByText('Tab 2')).toBeInTheDocument();
    expect(getByText('Tab 1 Content')).toBeInTheDocument();
  });

  test('Changes tab content on click', () => {
    const { getByText, queryByText } = render(
      <BrowserRouter>
        <Tabs items={['Tab 1', 'Tab 2']} activeTab={0}>
          <div>Tab 1 Content</div>
          <div>Tab 2 Content</div>
        </Tabs>
      </BrowserRouter>,
    );

    const tabOne = getByText('Tab 1');
    const tabTwo = getByText('Tab 2');

    fireEvent.click(tabTwo);

    expect(queryByText('Tab 1 Content')).not.toBeInTheDocument();
    expect(getByText('Tab 2 Content')).toBeInTheDocument();

    fireEvent.click(tabOne);

    expect(getByText('Tab 1 Content')).toBeInTheDocument();
    expect(queryByText('Tab 2 Content')).not.toBeInTheDocument();
  });
});
