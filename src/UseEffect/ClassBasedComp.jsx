//!

import React, { Component } from 'react'

export default class ClassBasedComp extends Component {
  state = {
    count: 0,
  };
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
      console.log("no re Render...😁 componentDidmount");
    }
    componentDidUpdate() {
        window.document.title=`You Clicked it ${this.state.count}`
    }
    componentWillUnmount() {
        console.log("data Cleared");
    }
  render() {
      return <div>
          <h1>{ this.state.count}</h1>
          <button onClick={this.inc}>+</button>
    </div>;
  }
}
