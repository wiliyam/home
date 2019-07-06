import React, { Component } from "react";
import "./welcome.css";
import { Spring, config } from "react-spring/renderprops";

const welcome = () => {
  return (
    <div className="home">
      <Spring
        from={{ opacity: 0, marginLeft: -5000 }}
        to={{ opacity: 1, marginLeft: 0 }}
        config={config.molasses}
      >
        {props => (
          <div style={props}>
            <div style={c1style}>
              <Spring
                from={{ opacity: 0, marginTop: -5000 }}
                to={{ opacity: 1, marginTop: 0 }}
                config={{ delay: 1000 }}
              >
                {props => <h1 style={props}>Hello there..</h1>}
              </Spring>
            </div>
          </div>
        )}
      </Spring>
      <Spring
        from={{ opacity: 0, marginLeft: -5000 }}
        to={{ opacity: 1, marginLeft: 0 }}
        config={config.gentle}
      >
        {props => (
          <div style={props}>
            <div style={c2style}>
              <Spring
                from={{ opacity: 0, marginBottom: -5000 }}
                to={{ opacity: 1, marginBottom: 0 }}
                config={{ delay: 2000 }}
              >
                {props => <h2 style={props}>Glad to see you..</h2>}
              </Spring>
            </div>
          </div>
        )}
      </Spring>
      <Spring
        from={{ opacity: 0, marginLeft: -5000 }}
        to={{ opacity: 1, marginLeft: 0 }}
        config={config.wobbly}
      >
        {props => (
          <div style={props}>
            <div style={c3style}>
              <Spring
                from={{ opacity: 0, marginBottom: -5000 }}
                to={{ opacity: 1, marginBottom: 0 }}
                config={{ delay: 2000 }}
              >
                {props => (
                  <h3 style={props}>We are currently in under development</h3>
                )}
              </Spring>
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
};
const c1style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};
const c2style = {
  background: "#5EC649",
  color: "white",
  padding: "1.5rem"
};
const c3style = {
  background: "#F7AF25",
  color: "white",
  padding: "1.5rem"
};

export default welcome;
