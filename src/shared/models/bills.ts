import { TransactionInterface } from './transactions';

export interface BillInterface {
  categoryId: number;
  iconUrl: string;
  id: string;
  isBill: boolean;
  name: string;
  transactions: TransactionInterface[];
}
