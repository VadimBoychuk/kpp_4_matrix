import React, { Component } from "react";
import "./matrix.css";

export default class Matrix extends Component {
  state = {
    percent: 0
  };
  handleDelete = id => {
    const list = this.props.matrix.filter((row, index) => index !== id);
    this.props.set_matrix(list);

    const averageString = list[0].map((row, index) =>
      list.map((cell, i) => cell[index])
    );
    const average = averageString.map(row => row.reduce((a, b) => a + b.am, 0));
    const averVal = average.map((value, index) =>
      (value / average.length).toFixed(1)
    );
    this.props.set_averVal(averVal);
  };

  percentOf = (value, sum) => {
    return `${Math.round((value * 100) / sum)}%`;
  };

  hidePercent = () => {
    this.setState({
      percent: null
    });
  };

  handleAddNewRow = () => {
    let matr = [];
    let str = [];
    let rowID = this.props.matrix.length;
    for (let j = 0; j < this.props.N; j++) {
      let columnID = str.length;
      let item = {
        id: `${rowID}-${columnID}`,
        // "_" +
        // Math.random()
        //   .toString(36)
        //   .substr(2, 9),
        am: Math.floor(100 + Math.random() * (999 + 1 - 100))
      };
      str.push(item);
    }
    matr.push(str);
    let k = [...this.props.matrix, matr[0]];
    this.props.set_matrix(k);

    const averageString = k[0].map((row, index) =>
      k.map((cell, i) => cell[index])
    );
    const average = averageString.map(row => row.reduce((a, b) => a + b.am, 0));
    const averVal = average.map((value, index) =>
      (value / k.length).toFixed(1)
    );
    this.props.set_averVal(averVal);
  };

  cellSum = row => {
    const nums = row.map(td => {
      return td.am;
    });

    const rowSum = nums.reduce(function(row, current) {
      return row + current;
    }, 0);
    return rowSum;
  };

  showCloseNums = num => {
    let items = [];
    this.props.matrix.map(row =>
      row.forEach(item => {
        items.push(item);
      })
    );
    let nums = items.map(a => ({ ...a }));
    let numbers = nums.map(item => {
      item.am = Math.abs(item.am - num);

      return item;
    });

    let sortedNumbers = numbers.sort((a, b) => a.am - b.am);
    let arr = [];
    for (let i = 0; i < this.props.X; i++) {
      arr.push(sortedNumbers[i].id);
    }
    this.props.set_id(arr);
    return arr;
  };

  showPercent = percent => {
    this.setState({ percent });
  };

  hideCloseNums = () => {
    const arr = [];
    this.props.set_id(arr);
  };

  handleAddition = id => {
    const newMatrix = this.props.matrix.map(row =>
      row.map(item => (item.id === id ? { ...item, am: item.am + 1 } : item))
    );
    this.props.set_matrix(newMatrix);

    const averageString = newMatrix[0].map((row, index) =>
      newMatrix.map((cell, i) => cell[index])
    );
    const average = averageString.map(row => row.reduce((a, b) => a + b.am, 0));
    const averVal = average.map((value, index) =>
      (value / average.length).toFixed(1)
    );
    this.props.set_averVal(averVal);
  };

  render() {
    return (
      <div>
        <header>
          <button className="submitButton" onClick={this.props.handleClick}>
            Submit
          </button>
        </header>
        <div className="tablealign">
          <table className="table">
            {this.props.matrix.map((row, index) => {
              const a = this.cellSum(row);
              return (
                <tr>
                  {row.map((item, index) => {
                    let rowID = item.id.split("-")[0];
                    return (
                      <React.Fragment>
                        {this.props.arr && this.props.arr.includes(item.id) ? (
                          <td
                            key={item.id}
                            onMouseOver={() => this.showCloseNums(item.am)}
                            onMouseLeave={() => this.hideCloseNums()}
                            onClick={() => this.handleAddition(item.id)}
                            className="column-hover"
                          >
                            {item.am}
                          </td>
                        ) : (
                          <td
                            key={item.id}
                            onMouseOver={() => this.showCloseNums(item.am)}
                            onClick={() => this.handleAddition(item.id)}
                            className="column"
                          >
                            {rowID != this.state.percent
                              ? item.am
                              : this.percentOf(item.am, a)}
                          </td>
                        )}
                      </React.Fragment>
                    );
                  })}
                  <td
                    onMouseOver={() => this.showPercent(index)}
                    onMouseLeave={() => this.hidePercent()}
                    className="columnSum"
                  >
                    {a}
                  </td>
                  <button
                    className="deleteButton"
                    onClick={() => this.handleDelete(index)}
                  >
                    Delete
                  </button>
                </tr>
              );
            })}
            {
              <tr>
                {this.props.averVal.map((value, index) => (
                  <td className="columnAver">{value}</td>
                ))}
                <button className="deleteButton" onClick={this.handleAddNewRow}>
                  Add new row
                </button>
              </tr>
            }
          </table>
        </div>
      </div>
    );
  }
}
