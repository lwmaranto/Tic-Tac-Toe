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

    while (
      this.board.isFull() === false &&
      this.board.whoWon() !== "X" &&
      this.board.whoWon() !== "O"
    ) {
      console.log(this.board.whoseTurn(), ", it is your turn.");
      let position = reader.question(
        "Pick a box on the board using numbers 1-9: "
      );
      position = Number(position);
      if (typeof position === "number") {
        this.board.setMove(position);
        console.log(this.board.printBoard());
      } else {
        let positionTwo = reader.question("PLEASE PICK A NUMBER BETWEEN 1-9: ");
        this.board.setMove(position);
        console.log(this.board.printBoard());
      }
    }
    if (this.board.whoWon() !== null) {
      console.log(this.board.whoWon(), "YOU ARE THE WINNER!!!");
    } else {
      console.log("The board is full!");
    }

    //console.log("Here is the box you picked:", position);
  }
}

module.exports = Game;
