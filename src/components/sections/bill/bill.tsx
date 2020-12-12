import React, { FunctionComponent, useState } from 'react';
import { BillInterface, TransactionInterface } from '../../../shared/models';

import { Button } from '../../shared';
import { Transactions } from '..';

import './bill.scss';

interface BillProps {
  bill: BillInterface;
  updateBill: (id: string, isBill: boolean) => Promise<void>;
}

export const Bill: FunctionComponent<BillProps> = ({ bill, updateBill }) => {
  const [showTransactions, toggleTransactionsVisibility] = useState(false);

  return (
    <section className="c-bill">
      <div className="c-bill__img">
        <img src={bill.iconUrl} alt={bill.name} />
      </div>
      <div className="c-bill__body">
        <div className={showTransactions ? 'u-mb-2' : null}>
          <h2 className="c-bill__title">{bill.name}</h2>
          <p className="c-bill__transactions">Transactions - {bill.transactions.length}</p>
          <Button type="button" variant="secondary" onClick={() => updateBill(bill.id, bill.isBill)}>
            {bill.isBill ? 'Remove Bill' : 'Add as Bill'}
          </Button>
          <Button type="button" variant="primary" onClick={() => toggleTransactionsVisibility(!showTransactions)}>
            {showTransactions ? 'Hide Transactions' : 'View Transactions'}
          </Button>
        </div>
        {showTransactions && <Transactions transactions={bill.transactions} />}
      </div>
    </section>
  );
};
