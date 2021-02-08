describe("Board Class", () => {
  it("it attaches a constructor method to the Board Class", () => {
    expect(typeof Board.constructor).toBe("function");
  });

  it("the instance has `board`, and `turn` properties", () => {
    const game = new Board();
    expect([X, O]).toContain(game.whoseTurn());
  });

  describe("printBoard method", () => {
    it("empty board", () => {
      const game = new Board();
      expect(game.printBoard()).toEqual("---\n---\n---");
    });
    it("half full", () => {
      const game = new Board(true);
      game.setMove(4);
      game.setMove(5);
      game.setMove(1);
      expect(game.printBoard()).toEqual("X--\nXO-\n---");
    });
  });
  //   describe("setMove method", () => {
  //     it("Invalid Number", () => {
  //       const game = new Board(true);
  //       game.setMove(20);
  //       expect(game.setMove()).toThrowError(/Invalid Number/);
  //     });
  //   });
});
