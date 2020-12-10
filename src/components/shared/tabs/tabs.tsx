import React, { FunctionComponent, ReactElement, useState } from 'react';

interface TabsProps {
  children: ReactElement[];
  items: string[];
  activeTab: number;
}

export const Tabs: FunctionComponent<TabsProps> = ({
  children,
  items,
  activeTab,
}): ReactElement => {
  const [activeTabIndex, setActiveTabIndex] = useState(activeTab);

  // const childMap = React.Children.map(children, (child) => {
  //   if (items[0] === activeTab) {
  //     return <div className="c-tabs__body">{child.props.label}</div>;
  //   }
  // });

  const handleTabSelection = (index: number) => {
    setActiveTabIndex(index);
  };

  console.log(activeTab);

  return (
    <div className="c-tabs">
      <ul className="c-tabs__nav">
        {items.map((item: string, index: number) => (
          <li key={item}>
            <button type="button" onClick={() => handleTabSelection(index)}>
              {item}
            </button>
          </li>
        ))}
      </ul>
      {children[activeTabIndex]}
    </div>
  );
};
