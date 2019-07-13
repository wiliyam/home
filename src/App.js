import React, { Component } from "react";
import "./App.css";
import Drawer from "./components/navigation/drawer/drawer";
import NavBar from "./components/navigation/navbar/navbar";
import BackDrop from "./components/backdrop/backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleHandler = () => {
    this.setState(preState => {
      return { sideDrawerOpen: !preState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <NavBar draweClick={this.drawerToggleHandler} />
        <Drawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}

export default App;
