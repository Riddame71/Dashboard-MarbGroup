import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";

const sidebarLinks = [
  {
    name: "overview",
    label: "Overview",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    name: "content",
    label: "Content SEO",
    href: "/content",
    icon: <ArticleIcon />,
  },
];

const SidebarItems = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className="SidebarItems">
      {sidebarLinks.map((l, i) => (
        <Link
          key={i}
          className={`SidebarItems__item ${
            pathname === l.href ? "SidebarItems__item--selected" : ""
          }`}
          to={l.href}
        >
          <div className="SidebarItems__item__text">
            <span className="SidebarItems__item__text__icon">{l.icon}</span>
            {l.label}
            <div className="SidebarItems__item__icon">
              <ChevronRightIcon />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SidebarItems;
