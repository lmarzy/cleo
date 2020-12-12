import React, { FunctionComponent, ReactElement, useState } from 'react';

import './tabs.scss';

interface TabsProps {
  children: ReactElement[];
  items: string[];
  activeTab: number;
}

export const Tabs: FunctionComponent<TabsProps> = ({ children, items, activeTab }): ReactElement => {
  const [activeTabIndex, setActiveTabIndex] = useState(activeTab);

  const handleTabSelection = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="c-tabs">
      <ul className="c-tabs__nav">
        {items.map((item: string, index: number) => {
          let buttonClasses = 'c-tabs__button';

          if (index === activeTabIndex) {
            buttonClasses += ' isActive';
          }

          return (
            <li key={item}>
              <button type="button" className={buttonClasses} onClick={() => handleTabSelection(index)}>
                {item}
              </button>
            </li>
          );
        })}
      </ul>
      {children[activeTabIndex]}
    </div>
  );
};
