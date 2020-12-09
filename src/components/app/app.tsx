import React, { ReactElement, FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from '../pages';
import { Header, Footer } from '../sections';

import 'styles/app.scss';

export const App: FunctionComponent = (): ReactElement => (
  <>
    <Header />
    <main>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </main>
    <Footer />
  </>
);
