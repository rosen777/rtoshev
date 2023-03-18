import { useState } from "react";
import "./Tabs.css";

type TabType = {
  name: string;
  content: string;
};

type TabsProps = {
  title: string;
  tabs: TabType[];
};

export const Tabs = ({ title, tabs }: TabsProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activateTab = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="TabView">
      {title && <h4 className="title">{title}</h4>}
      {Object.keys(tabs).length === 0 ? (
        <div>No Tabs</div>
      ) : (
        <div>
          <div className="tabs">
            {tabs.map((tab: TabType, index: number) => (
              <label
                key={index}
                className={index === activeTabIndex ? "active-tab" : "tab"}
                onClick={() => activateTab(index)}>
                {tab.name}
              </label>
            ))}
          </div>
          <div className="content">{tabs[activeTabIndex].content}</div>
        </div>
      )}
    </div>
  );
};
