import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Bill } from './bill';

const mockData = {
  categoryId: 1,
  iconUrl: 'https://pbs.twimg.com/profile_images/915824582455627776/nsyHCFq9.jpg',
  id: '5a5caa1efe33900100fd8ed5',
  isBill: true,
  name: 'Vodafone',
  transactions: [
    {
      amount: 12.34,
      date: '2018-01-13',
      id: 36,
    },
    {
      amount: 14.34,
      date: '2018-02-13',
      id: 37,
    },
  ],
};

describe('Bill Component', () => {
  afterEach(cleanup);
  const mockFn = jest.fn();

  test('shows correct text', () => {
    const { getByText, queryByText } = render(
      <BrowserRouter>
        <Bill bill={mockData} updateBill={mockFn} />
      </BrowserRouter>,
    );

    const viewTransactions = getByText('View Transactions');

    expect(getByText('Vodafone')).toBeInTheDocument();
    expect(getByText('Remove Bill')).toBeInTheDocument();

    fireEvent.click(viewTransactions);

    expect(queryByText('View Transactions')).not.toBeInTheDocument();
    expect(getByText('Hide Transactions')).toBeInTheDocument();

    mockData.transactions.forEach((transaction) => expect(getByText(transaction.date)).toBeInTheDocument());
    mockData.transactions.forEach((transaction) => expect(getByText(`£${transaction.amount}`)).toBeInTheDocument());
  });
});
