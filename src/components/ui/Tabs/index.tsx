import * as React from "react";
import SelectTabButton from "./SelectTabButton";

import "./index.css";

type TabsProps = {
  tabButtons: {
    name: string;
    element: React.ReactNode;
  }[];
};

const Tabs: React.FC<TabsProps> = ({ tabButtons }) => {
  const [currentTab, setCurrentTab] = React.useState<React.ReactNode>();
  const [currentTabKey, setCurrentTabKey] = React.useState<number>(0);

  const setTab = (key: number, element: React.ReactNode) => {
    setCurrentTabKey(key);
    setCurrentTab(element);
  };

  return (
    <div className="Tabs">
      <section className="buttons">
        {tabButtons.map((tab, i) => (
          <SelectTabButton
            name={tab.name}
            activeKey={currentTabKey}
            setTab={setTab}
            tabKey={i}
          >
            {tab.element}
          </SelectTabButton>
        ))}
      </section>
      <section className="content">{currentTab}</section>
    </div>
  );
};

export default Tabs;
