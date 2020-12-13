import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';

import { API } from '../../../services/api';

import { Bills, PageTitle } from '../../sections';
import { Container, Tabs } from '../../shared';

import { BillInterface } from '../../../shared/models';

export const BillsPage: FunctionComponent = (): ReactElement => {
  const [bills, setBills] = useState<BillInterface[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [activeTab, setActiveTab] = useState(0);

  const getBills = async () => {
    try {
      setIsLoading(true);
      const data = await API.getBills();
      setBills(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setIsLoading(false);
  };

  const updateBill = async (id: string, isBill: boolean): Promise<void> => {
    try {
      setIsLoading(true);
      await API.updateBill(id, isBill);
      getBills();
      setActiveTab(isBill ? 0 : 1);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getBills();
  }, []);

  if (isLoading || !bills) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>error: ${error}</p>;
  }

  const billType = (type: boolean) => bills.filter((bill: BillInterface) => bill.isBill === type);

  return (
    <section>
      <PageTitle title="Bills" />
      <Container>
        <Tabs
          items={[`Bills ${billType(true).length}`, `Potential Bills ${billType(false).length}`]}
          activeTab={activeTab}
        >
          <div>
            <Bills bills={billType(true)} updateBill={updateBill} />
          </div>
          <div>
            <Bills bills={billType(false)} updateBill={updateBill} />
          </div>
        </Tabs>
      </Container>
    </section>
  );
};
