import { apiConstants } from '../shared/constants';
import { request } from './request';

import { BillInterface } from '../shared/models';

const billsUrl = `${apiConstants.base}bills`;

export const API = {
  getBills: (): Promise<BillInterface[]> => request<BillInterface[]>(billsUrl),
  updateBill: (id: string, isBill: boolean): Promise<BillInterface> =>
    request<BillInterface>(`${billsUrl}/${id}`, 'PATCH', JSON.stringify({ isBill: !isBill })),
};
