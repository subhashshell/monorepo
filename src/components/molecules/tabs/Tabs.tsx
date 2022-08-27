/*
 * Created on Fri Aug 12 2022
 *
 * Copyright (c) 2022 SHELL
 * All rights reserved.
 */

import React, { useState } from "react";

interface ITabItems {
  id: string;
  name: string;
  url: string;
}

export interface TabsPropsInt {
  tabsItems: ITabItems[];
  selectedTab: string;
  onTabChange?: (url: string)=> void;
}

export const Tabs: React.FC<TabsPropsInt> = ({ tabsItems, selectedTab, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(selectedTab);

  const handleTabClick = (item: ITabItems) => {
    setActiveTab(item.id);
    if (onTabChange) {
      onTabChange(item.url);
    }
   
  };

  return (
    <>
      <nav className="c-tabs c-secondary-nav">
        <ul className="c-secondary-nav__list">
          {tabsItems?.map((tabItem: ITabItems) => {
            return (
              <li
              key={tabItem.id}
                className={`c-secondary-nav__list-item ${
                  activeTab === tabItem.id ? "is-active" : ""
                }`}
              >
                <button
                  onClick={() => handleTabClick(tabItem)}
                  className="c-secondary-nav__link"
                >
                  {tabItem.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

