import React, { ReactElement, FunctionComponent } from 'react';

import './page-title.scss';

interface PageTitleProps {
  title: string;
}

export const PageTitle: FunctionComponent<PageTitleProps> = ({ title }): ReactElement => (
  <header className="c-page-title">
    <h1 className="c-page-title__text">{title}</h1>
  </header>
);
