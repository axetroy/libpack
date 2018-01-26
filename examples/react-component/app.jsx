import React, { Component } from "react";
import { render } from "react-dom";

import Example from "./index.jsx";

console.log("Hello world");

class App extends Component {
  render() {
    return (
      <div>
        <Example />
      </div>
    );
  }
}

const element = document.createElement("div");
document.body.appendChild(element);
render(<App />, element);
