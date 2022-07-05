import React from "react";

const SidebarHeader = () => {
  return (
    <div className="SidebarHeader">
      <img
        className="SidebarHeader__icon"
        src={"/assets/RocketIcon.png"}
        alt="sidebar rocket icon"
      />
      <p className="SidebarHeader__text">Express SEO by MarbGroup</p>
    </div>
  );
};

export default SidebarHeader;
