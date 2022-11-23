import React from "react";
import { createBootstrapComponent } from "react-bootstrap/esm/ThemeProvider";
function SideBar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="'col-auto min-vh-100 bg-dark">
          <ul>
            <li>
              <a className="nav-link px-2">
                <i className="bi-house" />{" "}
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
