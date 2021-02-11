const X = "X";
const O = "O";

export default class Board {
  constructor(startWithX) {
    this.board = [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ];
    this.turn = startWithX ? X : [X, O][Math.floor(Math.random() * 2)];
  }
  printBoard() {
    let resultArr = [];
    for (let i = 0; i < this.board.length; i++) {
      let rowStr = "";
      for (let j = 0; j < this.board[i].length; j++) {
        rowStr = rowStr + this.board[i][j];
      }
      resultArr.push(rowStr);
    }
    let result = resultArr.join("\n");
    return result;
  }
  printLegend() {
    return "1 2 3\n4 5 6\n7 8 9";
  }
  setMove(num) {
    if (num < 1 || num > 9) {
      throw "Invalid Number";
    }
    if (num === 1 && this.board[0][0] === "-") {
      this.board[0][0] = this.turn;
    } else if (num === 2 && this.board[0][1] === "-") {
      this.board[0][1] = this.turn;
    } else if (num === 3 && this.board[0][2] === "-") {
      this.board[0][2] = this.turn;
    } else if (num === 4 && this.board[1][0] === "-") {
      this.board[1][0] = this.turn;
    } else if (num === 5 && this.board[1][1] === "-") {
      this.board[1][1] = this.turn;
    } else if (num === 6 && this.board[1][2] === "-") {
      this.board[1][2] = this.turn;
    } else if (num === 7 && this.board[2][0] === "-") {
      this.board[2][0] = this.turn;
    } else if (num === 8 && this.board[2][1] === "-") {
      this.board[2][1] = this.turn;
    } else if (num === 9 && this.board[2][2] === "-") {
      this.board[2][2] = this.turn;
    } else {
      throw "Box Full";
    }
    this.switchTurn();
  }
  switchTurn() {
    //this.turn === X ? O : X;
    if (this.turn === X) {
      this.turn = O;
    } else {
      this.turn = X;
    }
  }
  whoseTurn() {
    if (this.turn === X) {
      return X;
    } else if (this.turn === O) {
      return O;
    }
  }
  isFull() {
    //return true or false
    //could also have a counter? if counter === 9 return true
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] === "-") {
          return false;
        }
      }
    }
    return true;
  }
  whoWon() {
    //return X O or null
    //3 rows 1:[0][0],[0][1],[0][2] 2:[1][0],[1][1],[1][2] 3:[2][0],[2][1],[2][2]
    //3 columns 1:[0][0],[1][0],[2][0] 2:[0][1],[1][1],[2][1] 3:[0][2],[1][2],[2][2]
    //2 crosses 1:[0][0],[1][1],[2][2] 2: [0][2],[1][1],[2][0]
    if (
      //row 1
      this.board[0][0] === this.board[0][1] &&
      this.board[0][1] === this.board[0][2] &&
      this.board[0][0] !== "-"
    ) {
      return this.board[0][0];
    } else if (
      //row 2
      this.board[1][0] === this.board[1][1] &&
      this.board[1][1] === this.board[1][2] &&
      this.board[1][0] !== "-"
    ) {
      return this.board[1][0];
    } else if (
      //row 3
      this.board[2][0] === this.board[2][1] &&
      this.board[2][1] === this.board[2][2] &&
      this.board[2][0] !== "-"
    ) {
      return this.board[2][0];
    } else if (
      //column 1
      this.board[0][0] === this.board[1][0] &&
      this.board[1][0] === this.board[2][0] &&
      this.board[0][0] !== "-"
    ) {
      return this.board[0][0];
    } else if (
      //column 2
      this.board[0][1] === this.board[1][1] &&
      this.board[1][1] === this.board[2][1] &&
      this.board[0][1] !== "-"
    ) {
      return this.board[0][1];
    } else if (
      //column 3
      this.board[0][2] === this.board[1][2] &&
      this.board[1][2] === this.board[2][2] &&
      this.board[0][2] !== "-"
    ) {
      return this.board[0][2];
    } else if (
      //diagonal 1
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2] &&
      this.board[0][0] !== "-"
    ) {
      return this.board[0][0];
    } else if (
      //diagonal 2
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2] &&
      this.board[2][0] !== "-"
    ) {
      return this.board[0][2];
    } else {
      return null;
    }
  }
}
