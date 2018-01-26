import { h, render, Component } from "preact";

import Example from "./index.jsx";

/** @jsx h */

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

render(<App />, document.body);
