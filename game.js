const Board = require("./board");
const reader = require("readline-sync");

class Game {
  constructor() {
    this.board = new Board();
  }
  toStart() {
    console.log("Hi Welcome to Tic Tac Toe");
    console.log("Pick an X player and an O");
    console.log(this.board.whoseTurn(), ", it is your turn");
  }
}

module.exports = Game;
