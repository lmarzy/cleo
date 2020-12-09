import React, { ReactElement, FunctionComponent } from 'react';

import './page-title.scss';

interface PageTitleProps {
  title: string;
}

export const PageTitle: FunctionComponent<PageTitleProps> = ({
  title,
}): ReactElement => <h1 className="c-page-title">{title}</h1>;
