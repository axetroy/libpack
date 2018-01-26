import React, { Component } from "react";

const env = process.env.NODE_ENV;

class Example extends Component {
  render() {
    return (
      <div>
        Hello world
        <h3>This is react component</h3>
        <h3>This is react component 123123 abc 123123</h3>
        {env}
      </div>
    );
  }
}

export default Example;
