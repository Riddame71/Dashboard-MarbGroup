import React from "react";
import "./SectionItem.scss";

const SectionItem = ({ children }) => {
  return (
    <div className="SectionItem">
      <div className="SectionItem__content">{children}</div>
    </div>
  );
};

export default SectionItem;
