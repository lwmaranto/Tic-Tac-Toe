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
    if (num === 1) {
      this.board[0][0] = this.turn;
    }
    this.switchTurn();
  }
  switchTurn() {
    if (this.turn === X) {
      this.turn = O;
    }
  }
  whoseTurn() {}
  isFull() {}
  whoWon() {}
}
