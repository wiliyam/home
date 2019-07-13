import React, { Component } from "react";
import "./navbar.css";
import menuIcon from "../../../assets/menu.png";
import Drawer from "../drawer/drawer";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="col-12 d-flex p-0 ">
        <div className="d-flex container purple topBotomBordersIn">
          <div className="icon">
            <img src={menuIcon} width="40" onClick={this.props.draweClick} />
          </div>
          <div className="nav-items">
            <a>HOME</a>
            <a>PORTFOLIO</a>
            <a>ABOUT</a>
            <a>CONTACT</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
