import React, { FunctionComponent } from 'react';
import { TransactionInterface } from '../../../shared/models';

import './transactions.scss';

interface TransactionsProps {
  transactions: TransactionInterface[];
}

export const Transactions: FunctionComponent<TransactionsProps> = ({ transactions }) => (
  <table className="c-transactions">
    <thead>
      <tr>
        <th>Date</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      {transactions &&
        transactions.map((transaction: TransactionInterface) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{`£${transaction.amount}`}</td>
          </tr>
        ))}
    </tbody>
  </table>
);
