import React from "react";
import "./Sidebar.scss";
import SidebarHeader from "./SidebarHeader";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <SidebarHeader />
      <SidebarItems />
    </div>
  );
};

export default Sidebar;
