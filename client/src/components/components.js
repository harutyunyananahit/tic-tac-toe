import React from 'react';
import '../styles/index.css';

function Square(props) {
  return (
    <button className="square" onClick = {props.onClick}>
      {props.value}
    </button>
  );
}

export class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  createBoard() {
    let row = [], boardRow =[];
    for(let i=0; i<3; i++) {
      for (let j=0; j<3; j++) {
        row.push(this.renderSquare(j + i * 3));
      };
      boardRow.push(<div key={i} className="board-row">{row}</div>);
      row = [];
    }
    const board = <div> {boardRow} </div>;
    return board;
  }
  render() {
    return (
    <div>
      {this.createBoard()}
    </div>
    );
  }
}
