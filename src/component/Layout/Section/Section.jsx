import React from "react";
import { useLocation } from "react-router";
import "./Section.scss";
const sectionHeaders = {
  "/": "Website Performance Overview Dashboard",
  "/content": "Automate Meta Titles and Meta Descriptions",
};

const Section = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div className="Section">
      <div className="Section__header">
        <p className="Section__header__text">{sectionHeaders[pathname]}</p>
      </div>
      <div className="Section__body">{children}</div>
    </div>
  );
};

export default Section;
