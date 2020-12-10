import React, { FunctionComponent, ReactElement } from 'react';
import { useApiRequest } from '../../../hooks';

import { Container, Tabs, TabBody } from '../../shared';

export const HomePage: FunctionComponent = (): ReactElement => {
  const { data, error, isLoaded } = useApiRequest(
    'https://jsonplaceholder.typicode.com/todos',
  );

  console.log(data);

  return (
    <Container>
      <h1>Home Page</h1>
      <Tabs items={['tab1', 'tab2']} activeTab={1}>
        <TabBody>Tab 1</TabBody>
        <TabBody>Tab 2</TabBody>
      </Tabs>
    </Container>
  );
};
