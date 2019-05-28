import React, { Component } from "react";
import "./matrix.css";
import "./input.css";

export default class Input extends Component {
  handleInputM = e => {
    this.props.set_M(e.target.value);
  };
  handleInputN = e => {
    this.props.set_N(e.target.value);
  };
  handleInputX = e => {
    this.props.set_X(e.target.value);
  };

  render() {
    console.log(this.props.state);
    return (
      <div>
        <div className="headerArea">
          <p className="text">Enter your data</p>
          <div className="input">
            <input
              className="inputAlign"
              type="numbers"
              value={this.props.M}
              placeholder="Rows"
              onChange={this.handleInputM}
              onKeyPress={this.props.handleKeyPress}
            />
            <input
              className="inputAlign"
              type="numbers"
              value={this.props.N}
              placeholder="Column"
              onChange={this.handleInputN}
              onKeyPress={this.props.handleKeyPress}
            />
            <input
              className="inputAlign"
              type="numbers"
              value={this.props.X}
              placeholder="Amount"
              onChange={this.handleInputX}
              onKeyPress={this.props.handleKeyPress}
            />
          </div>
        </div>
      </div>
    );
  }
}
