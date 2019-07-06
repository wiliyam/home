import React from "react";
import Welcome from "./components/welcome/welcome";
import Confetti from "react-confetti";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Anime from "./components/anime/anime";

function App() {
  return (
    <React.Fragment>
      <AppBar />
      <div className="App">
        <Confetti />
      </div>
      <Welcome />
      <Anime />
    </React.Fragment>
  );
}

export default App;
