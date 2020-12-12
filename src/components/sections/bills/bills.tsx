import React, { FunctionComponent } from 'react';

import { BillInterface } from '../../../shared/models';
import { Bill } from '..';

interface BillsProps {
  bills: BillInterface[];
  updateBill: (id: string, isBill: boolean) => Promise<void>;
}

export const Bills: FunctionComponent<BillsProps> = ({ bills, updateBill }) => {
  return (
    <>
      {bills.length ? (
        <ul className="c-bills">
          {bills.map((bill: BillInterface) => (
            <li key={bill.id} className="u-mb-2">
              <Bill bill={bill} updateBill={updateBill} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No Bills</p>
      )}
    </>
  );
};
