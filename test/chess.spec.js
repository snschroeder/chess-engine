/* eslint-disable no-undef */
const { expect } = require('chai');
const chess = require('../src/chess');
const boards = require('./test-helpers');

describe('generateSlidingMoves tests', () => {
  describe('Rook tests', () => {
    it('Allows no movement in starting position', () => {
      const a1Moves = chess.generateSlidingMoves(boards.board, 21, chess.rookOffset);
      const h1Moves = chess.generateSlidingMoves(boards.board, 28, chess.rookOffset);
      const a8Moves = chess.generateSlidingMoves(boards.board, 91, chess.rookOffset);
      const h8Moves = chess.generateSlidingMoves(boards.board, 98, chess.rookOffset);
      expect(boards.board[21]).to.eql(5);
      expect(boards.board[28]).to.eql(5);
      expect(boards.board[91]).to.eql(-5);
      expect(boards.board[98]).to.eql(-5);
      expect(a1Moves).to.eql([]);
      expect(h1Moves).to.eql([]);
      expect(a8Moves).to.eql([]);
      expect(h8Moves).to.eql([]);
    });
    it('Allows vertical and horizontal movement for white rook when open squares are present', () => {
      const moves = chess.generateSlidingMoves(boards.rookTestOne, 21, chess.rookOffset);
      expect(boards.rookTestOne[21]).to.eql(5);
      expect(moves).to.eql([22, 23, 31, 41, 51, 61, 71, 81]);
    });
    it('Allows horizontal and vertical movement for black rook when open squares are present', () => {
      const moves = chess.generateSlidingMoves(boards.rookTestOne, 98, chess.rookOffset);
      expect(boards.rookTestOne[98]).to.eql(-5);
      expect(moves).to.eql([88, 78, 68, 58, 48, 38, 97, 96]);
    });
    it('Allows movement in all directions when white rook in center of the board', () => {
      const moves = chess.generateSlidingMoves(boards.rookTestTwo, 55, chess.rookOffset);
      expect(boards.rookTestTwo[55]).to.eql(5);
      expect(moves).to.eql([45, 54, 53, 52, 51, 56, 57, 58, 65, 75, 85]);
    });
    it('Allows movement in all directions when black rook in center of the board', () => {
      const moves = chess.generateSlidingMoves(boards.rookTestTwo, 64, chess.rookOffset);
      expect(boards.rookTestTwo[64]).to.eql(-5);
      expect(moves).to.eql([54, 44, 34, 63, 62, 61, 65, 66, 67, 68, 74]);
    });
  });

  describe('Bishop tests', () => {
    it('Allows no movement in starting position', () => {
      const moves = chess.generateSlidingMoves(boards.board, 23, chess.bishopOffset);
      expect(boards.board[23]).to.eql(4);
      expect(moves).to.eql([]);
    });
    it('Allows diagonal movement in both direction from white starting position', () => {
      const moves = chess.generateSlidingMoves(boards.bishopTestOne, 23, chess.bishopOffset);
      expect(boards.bishopTestOne[23]).to.eql(4);
      expect(moves).to.eql([32, 41, 34, 45, 56, 67, 78]);
    });
    it('Allows movement in all direction with black bishop in center of board', () => {
      const moves = chess.generateSlidingMoves(boards.bishopTestOne, 55, chess.bishopOffset);
      expect(boards.bishopTestOne[55]).to.eql(-4);
      expect(moves).to.eql([44, 33, 46, 37, 64, 73, 66, 77]);
    });
  });

  describe('Queen tests', () => {
    it('Allows no white queen movement in starting position', () => {
      const moves = chess.generateSlidingMoves(boards.board, 24, chess.omniOffset);
      expect(boards.board[24]).to.eql(9);
      expect(moves).to.eql([]);
    });
    it('Allows movement in all 8 directions when white queen is in the center of the board', () => {
      const moves = chess.generateSlidingMoves(boards.queenTestOne, 55, chess.omniOffset);
      expect(boards.queenTestOne[55]).to.eql(9);
      expect(moves).to.eql([44, 45, 46, 54, 53, 52, 51, 56, 57, 58, 64, 73, 82, 65, 75, 85, 66, 77, 88]);
    });
  });
});

describe('generateKnightMoves tests', () => {
  it('Allows the 2 correct moves from start position', () => {
    const b1Moves = chess.generateKnightMoves(boards.board, 22);
    const g1Moves = chess.generateKnightMoves(boards.board, 27);
    const b8Moves = chess.generateKnightMoves(boards.board, 92);
    const g8Moves = chess.generateKnightMoves(boards.board, 97);
    expect(boards.board[22]).to.eql(3);
    expect(boards.board[27]).to.eql(3);
    expect(boards.board[92]).to.eql(-3);
    expect(boards.board[97]).to.eql(-3);
    expect(b1Moves).to.eql([43, 41]);
    expect(g1Moves).to.eql([48, 46]);
    expect(b8Moves).to.eql([73, 71]);
    expect(g8Moves).to.eql([78, 76]);
  });
  it('Allows all 8 moves when knight in center of the board', () => {
    const e4Moves = chess.generateKnightMoves(boards.knightTestOne, 55);
    expect(boards.knightTestOne[55]).to.eql(-3);
    expect(e4Moves).to.eql([76, 74, 63, 67, 47, 43, 36, 34]);
  });
});

describe('generateKingMoves test', () => {
  it('Does not allow movement from white or black king in starting pos', () => {
    const e1Moves = chess.generateKingMoves(boards.board, 25, chess.omniOffset);
    const e8Moves = chess.generateKingMoves(boards.board, 95, chess.omniOffset);
    expect(boards.board[25]).to.eql(10);
    expect(boards.board[95]).to.eql(-10);
    expect(e1Moves).to.eql([]);
    expect(e8Moves).to.eql([]);
  });
  it('Allows movement in all directions when kings are in the center', () => {
    const e4Moves = chess.generateKingMoves(boards.kingTestOne, 55);
    const c5Moves = chess.generateKingMoves(boards.kingTestOne, 63);
    expect(boards.kingTestOne[55]).to.eql(10);
    expect(boards.kingTestOne[63]).to.eql(-10);
    expect(e4Moves).to.eql([44, 45, 46, 54, 56, 64, 65, 66]);
    expect(c5Moves).to.eql([52, 53, 54, 62, 64, 72, 73, 74]);
  });
  it('Correctly removes illegal moves', () => {
    const e3Moves = chess.generateKingMoves(boards.kingTestTwo, 45);
    const e6Moves = chess.generateKingMoves(boards.kingTestTwo, 75);
    expect(boards.kingTestTwo[45]).to.eql(10);
    expect(boards.kingTestTwo[75]).to.eql(-10);
    expect(e3Moves).to.eql([44, 46, 54, 55, 56]);
    expect(e6Moves).to.eql([64, 65, 66, 74, 76]);
  });
  it('Correctly allows captures', () => {
    const e3Moves = chess.generateKingMoves(boards.kingTestThree, 45);
    const e6Moves = chess.generateKingMoves(boards.kingTestThree, 75);
    expect(boards.kingTestThree[45]).to.eql(-10);
    expect(boards.kingTestThree[75]).to.eql(10);
    expect(e3Moves).to.eql([34, 35, 36, 44, 46, 54, 56]);
    expect(e6Moves).to.eql([64, 66, 74, 76, 84, 85, 86]);
  });
});
