const Board = require("./board");
const reader = require("readline-sync");

class Game {
  constructor() {
    this.board = new Board();
  }
  toStart() {
    console.log("Hi Welcome to Tic Tac Toe");
    console.log("This is the board Legend:");
    console.log(this.board.printLegend());
    console.log("This is the current board:");
    console.log(this.board.printBoard());
    console.log("Pick an X player and an O player");

    while (this.board.isFull() === false && this.board.whoWon() === null) {
      console.log(this.board.whoseTurn(), ", it is your turn.");
      let position = reader.question(
        "Pick a box on the board using numbers 1-9: "
      );
      this.board.setMove(position);
      console.log(this.board.printBoard());
    }
    console.log(this.board.whoWon(), "YOU ARE THE WINNER!!!");

    //console.log("Here is the box you picked:", position);
  }
}

module.exports = Game;
