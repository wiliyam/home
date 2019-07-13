import React, { Component } from "react";
import "./drawer.css";
const Drawer = props => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <div>
        <ul>
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>PORTFOLIO</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Drawer;
