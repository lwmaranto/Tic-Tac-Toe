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
      game.setMove("5");
      game.setMove(1);
      expect(game.printBoard()).toEqual("X--\nXO-\n---");
    });
  });

  describe("printLegend method", () => {
    it("legend", () => {
      const game = new Board();
      expect(game.printLegend()).toEqual("1 2 3\n4 5 6\n7 8 9");
    });
  });

  describe("setMove method", () => {
    it("sets move", () => {
      const game = new Board(true);
      game.setMove(4);
      expect(game.board[1][0]).toEqual(X);
    });
    // it("Invalid Number", () => {
    //   const game = new Board(true);
    //   game.setMove(20);
    //   expect(game.setMove()).toThrowError(/Invalid Number/);
    // });
  });

  describe("isFull method", () => {
    it("game board full", () => {
      const game = new Board(true);
      game.setMove(1);
      game.setMove(2);
      game.setMove(3);
      game.setMove(4);
      game.setMove(5);
      game.setMove(6);
      game.setMove(7);
      game.setMove(8);
      game.setMove(9);
      expect(game.isFull()).toEqual(true);
    });
    it("game board not full", () => {
      const game = new Board(true);
      game.setMove(1);
      game.setMove(2);
      expect(game.isFull()).toEqual(false);
    });
    // it("Invalid Number", () => {
    //   const game = new Board(true);
    //   game.setMove(20);
    //   expect(game.setMove()).toThrowError(/Invalid Number/);
    // });
  });

  describe("whoWon method", () => {
    it("X won", () => {
      const game = new Board(true);
      game.setMove(1);
      game.setMove(2);
      game.setMove(3);
      game.setMove(4);
      game.setMove(5);
      game.setMove(6);
      game.setMove(7);
      game.setMove(8);
      game.setMove(9);
      expect(game.whoWon()).toEqual(X);
      //XOX
      //OXO
      //XOX
    });
    it("O won", () => {
      const game = new Board(true);
      game.setMove(6);
      game.setMove(5);
      game.setMove(3);
      game.setMove(7);
      game.setMove(2);
      game.setMove(1);
      game.setMove(8);
      game.setMove(9);
      expect(game.whoWon()).toEqual(O);
      //OXX
      //-OX
      //OXO
    });

    it("No one won not full", () => {
      const game = new Board(true);
      game.setMove(1);
      game.setMove(3);
      game.setMove(2);
      game.setMove(4);
      game.setMove(5);
      game.setMove(6);
      game.setMove(7);
      game.setMove(8);
      expect(game.whoWon()).toEqual(null);
      //XXO
      //OXO
      //XO-
    });

    it("No one won full", () => {
      const game = new Board(true);
      game.setMove(5);
      game.setMove(1);
      game.setMove(2);
      game.setMove(3);
      game.setMove(6);
      game.setMove(4);
      game.setMove(7);
      game.setMove(8);
      game.setMove(9);
      expect(game.whoWon()).toEqual(null);
      //OXO
      //OXX
      //XOX
    });

    // it("Invalid Number", () => {
    //   const game = new Board(true);
    //   game.setMove(20);
    //   expect(game.setMove()).toThrowError(/Invalid Number/);
    // });
  });
});
