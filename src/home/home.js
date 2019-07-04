import React, { Component } from "react";
import "./home.css";

import Button from "@material-ui/core/Button";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default Home;
