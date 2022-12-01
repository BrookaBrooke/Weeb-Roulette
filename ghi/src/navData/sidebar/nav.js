import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideBarData } from "./sidebarData";
import "./sidebar.css";

function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <div className="sidebar">
        <Link to="#" className="menu-bars">
          <a onClick={showSidebar}>x</a>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              x
            </Link>
          </li>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={"item.cName"}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
export default SideBar;
