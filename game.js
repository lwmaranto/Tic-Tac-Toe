import { Board } from "./board";

export default class Game {
  constructor() {
    this.board = new Board();
  }
  toStart() {
    console.log("Hi Welcome to Tic Tac Toe");
  }
}
