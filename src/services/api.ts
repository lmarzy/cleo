import { apiConstants } from '../shared/constants';
import { services } from './services';

import { BillInterface } from '../shared/models';

const billsUrl = `${apiConstants.base}bills`;

export const API = {
  getBills: (): Promise<BillInterface[]> => services.get<BillInterface[]>(billsUrl),
  updateBill: (id: string, isBill: boolean): Promise<BillInterface[]> =>
    services.patch<BillInterface[]>(`${billsUrl}/${id}`, JSON.stringify({ isBill: !isBill })),
};
