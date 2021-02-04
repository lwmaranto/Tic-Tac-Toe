class Board {
  constructor() {
    this.board = [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ];
    this.turn = ["X", "O"][Math.floor(Math.random() * 2)];
  }
}
