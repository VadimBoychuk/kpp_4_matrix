import React, { Component } from "react";
import { connect } from "react-redux";
import Matrix from "./containers/matrix.jsx";
import Input from "./containers/input.jsx";
import Error from "./containers/error.jsx";
import "./App.css";
import * as actionCreators from "./actions/actions";

class App extends Component {
  handleKeyPress = e => {
    if (e.target.value !== "") {
      if (e.key === "Enter") {
        this.createNewTable();
      }
    }
  };

  handleClick = () => {
    this.createNewTable();
  };

  createNewTable = () => {
    let matr = [];
    for (let i = 0; i < this.props.M; i++) {
      let str = [];
      for (let j = 0; j < this.props.N; j++) {
        let item = {
          id: `${i}-${j}`,
          am: Math.floor(100 + Math.random() * (999 + 1 - 100))
        };
        str.push(item);
      }
      matr.push(str);
    }
    this.props.set_matrix(matr);
    const averageString = matr[0].map((row, index) =>
      matr.map((cell, i) => cell[index])
    );
    const average = averageString.map(row => row.reduce((a, b) => a + b.am, 0));
    const averVal = average.map((value, index) =>
      (value / average.length).toFixed(1)
    );
    this.props.set_averVal(averVal);
    console.log("-------------", averVal);
    console.log("yyyyyyyyyyyyyyyyyyy", matr);
    return averVal;
  };

  render() {
    return (
      <div className="App">
        <Input handleKeyPress={this.handleKeyPress} />
        <Matrix handleClick={this.handleClick} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    num: state.num,
    matrix: state.matrix,
    averVal: state.averVal,
    M: state.M,
    N: state.N,
    X: state.X
  };
};

const mapDispatchToProps = dispatch => {
  return {
    set_matrix: matrix => dispatch(actionCreators.set_matrix(matrix)),
    set_averVal: averVal => dispatch(actionCreators.set_averVal(averVal))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
