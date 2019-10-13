/* eslint-disable no-undef */
const { expect } = require('chai');
const chess = require('../src/chess');
const boards = require('./test-helpers');

describe('generateSlidingMoves tests', () => {
  describe('Rook tests', () => {
    it('Allows no movement in starting position', () => {
      const moves = chess.generateSlidingMoves(boards.board, 21, chess.rookOffset);
      expect(moves).to.eql([]);
    });
    it('Allows vertical and horizontal movement for white rook when open squares are present', () => {
      const moves = chess.generateSlidingMoves(boards.rookTestOne, 21, chess.rookOffset);
      expect(moves).to.eql([22, 23, 31, 41, 51, 61, 71, 81]);
    });
    it('Allows horizontal and vertical movement for black rook when open squares are present', () => {
      const moves = chess.generateSlidingMoves(boards.rookTestOne, 98, chess.rookOffset);
      expect(moves).to.eql([88, 78, 68, 58, 48, 38, 97, 96]);
    });
    it('Allows movement in all directions when white rook in center of the board', () => {
      const moves = chess.generateSlidingMoves(boards.rookTestTwo, 55, chess.rookOffset);
      expect(moves).to.eql([45, 54, 53, 52, 51, 56, 57, 58, 65, 75, 85]);
    });
    it('Allows movement in all directions when black rook in center of the board', () => {
      const moves = chess.generateSlidingMoves(boards.rookTestTwo, 64, chess.rookOffset);
      expect(moves).to.eql([54, 44, 34, 63, 62, 61, 65, 66, 67, 68, 74]);
    });
  });

  describe('Bishop tests', () => {
    it('Allows no movement in starting position', () => {
      const moves = chess.generateSlidingMoves(boards.board, 23, chess.bishopOffset);
      expect(moves).to.eql([]);
    });
    it('Allows diagonal movement in both direction from white starting position', () => {
      const moves = chess.generateSlidingMoves(boards.bishopTestOne, 23, chess.bishopOffset);
      expect(moves).to.eql([32, 41, 34, 45, 56, 67, 78]);
    });
    it('Allows movement in all direction with black bishop in center of board', () => {
      const moves = chess.generateSlidingMoves(boards.bishopTestOne, 55, chess.bishopOffset);
      expect(moves).to.eql([44, 33, 46, 37, 64, 73, 66, 77]);
    });
  });

  describe('Queen tests', () => {
    it('Allows no movement in starting position', () => {
      const moves = chess.generateSlidingMoves(boards.board, 24, chess.omniOffset);
      expect(moves).to.eql([]);
    });
    it('Allows movement in all 8 directions when queen is in the center of the board', () => {
      const moves = chess.generateSlidingMoves(boards.queenTestOne, 55, chess.omniOffset);
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
    expect(b1Moves).to.eql([43, 41]);
    expect(g1Moves).to.eql([48, 46]);
    expect(b8Moves).to.eql([73, 71]);
    expect(g8Moves).to.eql([78, 76]);
  });
  it('Allows all 8 moves when knight in center of the board', () => {
    const e4Moves = chess.generateKnightMoves(boards.knightTestOne, 55);
    expect(e4Moves).to.eql([76, 74, 63, 67, 47, 43, 36, 34]);
  });
});
