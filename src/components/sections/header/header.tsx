import React, { ReactElement, useState } from 'react';

import { Nav } from '../nav/nav';
import { Container } from '../../shared';

import './header.scss';

export const Header = (): ReactElement => {
  const [navVisible, toggleNavVisibility] = useState(false);

  return (
    <header className="c-header">
      <h1>Cleo - Bills</h1>
      <button className="c-header__togglenav" type="button" onClick={() => toggleNavVisibility(!navVisible)}>
        {navVisible ? 'Hide' : 'Show'} Site Navigation
      </button>
      <Nav visible={navVisible} closeNav={toggleNavVisibility} />
    </header>
  );
};
