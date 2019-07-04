import React from "react";
import Home from "./home/home";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Confetti />
      </div>
      <Home />
    </React.Fragment>
  );
}

export default App;
