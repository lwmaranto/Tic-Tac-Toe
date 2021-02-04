class Board {
  constructor() {
    this.board = [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ];
    this.turn = ["X", "O"][Math.floor(Math.random() * 2)];
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
  printLegend() {}
  setMove() {}
  whoseTurn() {}
  isFull() {}
  whoWon() {}
}
