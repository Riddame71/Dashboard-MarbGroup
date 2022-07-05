import React, { useState } from "react";
import "./ContentTab.scss";
const Tabs = [
  {
    name: "home",
    label: "Homepage",
  },
  {
    name: "product",
    label: "Product Pages",
  },
  {
    name: "collection",
    label: "Collection Pages",
  },
  {
    name: "blog",
    label: "Blog Articles",
  },
];

const ContentTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="ContentTab">
      {Tabs.map((t, i) => (
        <div onClick={() => setSelectedTab(i)} key={i}>
          <div
            className={`ContentTab__item ${
              selectedTab === i ? "ContentTab__item--selected" : ""
            }`}
          >
            {t.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentTab;
