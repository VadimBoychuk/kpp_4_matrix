import React, { Component } from "react";

export default class Error extends Component {
  // amountError = () => {
  //   if (X > M * N) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  render() {
    console.log(this.props.X);
    return (
      <div>
        {this.props.X > this.props.M * this.props.N ? (
          <p>Enter X more smaller then {this.props.M * this.props.N}</p>
        ) : null}
      </div>
    );
  }
}
