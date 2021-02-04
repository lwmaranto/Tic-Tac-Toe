const X = "X";
const O = "O";

class Board {
  constructor() {
    this.board = [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ];
    this.turn = [X, O][Math.floor(Math.random() * 2)];
  }
  printBoard() {
    let result = "";
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        result = result + this.board[i][j];
      }
      result = result + "\n";
    }
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
    this.turn === X ? O : X;
  }
  whoseTurn() {
    if (this.turn === X) {
      return X;
    } else if (this.turn === O) {
      return O;
    }
  }
  isFull() {}
  whoWon() {}
}
