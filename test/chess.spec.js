/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
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

describe('generatePawnMoves tests', () => {
  it('Generates the 2 correct moves for each white pawn in the starting position', () => {
    const a2Moves = chess.generatePawnMoves(boards.board, 31);
    const b2Moves = chess.generatePawnMoves(boards.board, 32);
    const c2Moves = chess.generatePawnMoves(boards.board, 33);
    const d2Moves = chess.generatePawnMoves(boards.board, 34);
    const e2Moves = chess.generatePawnMoves(boards.board, 35);
    const f2Moves = chess.generatePawnMoves(boards.board, 36);
    const g2Moves = chess.generatePawnMoves(boards.board, 37);
    const h2Moves = chess.generatePawnMoves(boards.board, 38);
    expect(boards.board[31]).to.eql(1);
    expect(boards.board[32]).to.eql(1);
    expect(boards.board[33]).to.eql(1);
    expect(boards.board[34]).to.eql(1);
    expect(boards.board[35]).to.eql(1);
    expect(boards.board[36]).to.eql(1);
    expect(boards.board[37]).to.eql(1);
    expect(boards.board[38]).to.eql(1);
    expect(a2Moves).to.eql([41, 51]);
    expect(b2Moves).to.eql([42, 52]);
    expect(c2Moves).to.eql([43, 53]);
    expect(d2Moves).to.eql([44, 54]);
    expect(e2Moves).to.eql([45, 55]);
    expect(f2Moves).to.eql([46, 56]);
    expect(g2Moves).to.eql([47, 57]);
    expect(h2Moves).to.eql([48, 58]);
  });
  it('Generates the 2 correct moves for each black pawn in the starting position', () => {
    const a7Moves = chess.generatePawnMoves(boards.board, 81);
    const b7Moves = chess.generatePawnMoves(boards.board, 82);
    const c7Moves = chess.generatePawnMoves(boards.board, 83);
    const d7Moves = chess.generatePawnMoves(boards.board, 84);
    const e7Moves = chess.generatePawnMoves(boards.board, 85);
    const f7Moves = chess.generatePawnMoves(boards.board, 86);
    const g7Moves = chess.generatePawnMoves(boards.board, 87);
    const h7Moves = chess.generatePawnMoves(boards.board, 88);
    expect(boards.board[81]).to.eql(-1);
    expect(boards.board[82]).to.eql(-1);
    expect(boards.board[83]).to.eql(-1);
    expect(boards.board[84]).to.eql(-1);
    expect(boards.board[85]).to.eql(-1);
    expect(boards.board[86]).to.eql(-1);
    expect(boards.board[87]).to.eql(-1);
    expect(boards.board[88]).to.eql(-1);
    expect(a7Moves).to.eql([71, 61]);
    expect(b7Moves).to.eql([72, 62]);
    expect(c7Moves).to.eql([73, 63]);
    expect(d7Moves).to.eql([74, 64]);
    expect(e7Moves).to.eql([75, 65]);
    expect(f7Moves).to.eql([76, 66]);
    expect(g7Moves).to.eql([77, 67]);
    expect(h7Moves).to.eql([78, 68]);
  });

  it('Does not allow 2 square move for white when not on 2nd rank', () => {
    const a3Moves = chess.generatePawnMoves(boards.pawnTestOne, 41);
    const h4Moves = chess.generatePawnMoves(boards.pawnTestOne, 58);
    expect(boards.pawnTestOne[41]).to.eql(1);
    expect(boards.pawnTestOne[58]).to.eql(1);
    expect(a3Moves).to.eql([51]);
    expect(h4Moves).to.eql([68]);
  });
  it('Does not allow 2 square move for black when not on 7nd rank', () => {
    const a6Moves = chess.generatePawnMoves(boards.pawnTestOne, 71);
    expect(boards.pawnTestOne[71]).to.eql(-1);
    expect(a6Moves).to.eql([61]);
  });
  it('Generates white pawn capture moves and forward moves when appropriate', () => {
    const e6Moves = chess.generatePawnMoves(boards.pawnTestOne, 75);
    expect(boards.pawnTestOne[75]).to.eql(1);
    expect(e6Moves).to.eql([85, 84, 86]);
  });
  it('Generates black pawn capture moves and forward moves when appropriate', () => {
    const c3Moves = chess.generatePawnMoves(boards.pawnTestOne, 43);
    expect(boards.pawnTestOne[43]).to.eql(-1);
    expect(c3Moves).to.eql([33, 34, 32]);
  });
});

describe('generateMoves test', () => {
  it('correctly generates all white moves in start position', () => {
    const whiteMoves = chess.generateMoves(boards.board, 'w');
    let moveCount = 0;
    whiteMoves.forEach((piece) => {
      moveCount += piece.length - 2;
    });
    const dirtyMoves = chess.genDirtyMoves(boards.board, 'w')
    expect(moveCount).to.eql(20);
    expect(whiteMoves.length).to.eql(16);
    expect(dirtyMoves).to.eql([43, 41, 48, 46, 41, 51, 42, 52, 43, 53, 44, 54, 45, 55, 46, 56, 47, 57, 48, 58]);
  });
  it('correctly generates all black moves in start position', () => {
    const blackMoves = chess.generateMoves(boards.board, 'b');
    let moveCount = 0;
    blackMoves.forEach((piece) => {
      moveCount += piece.length -2;
    });
    const dirtyMoves = chess.genDirtyMoves(boards.board, 'b')
    expect(moveCount).to.eql(20);
    expect(blackMoves.length).to.eql(16);
    expect(dirtyMoves).to.eql([71, 61, 72, 62, 73, 63, 74, 64, 75, 65, 76, 66, 77, 67, 78, 68, 73, 71, 78, 76]);
  });
  it('correctly generates white moves from arbitrary position', () => {
    const whiteMoves = chess.generateMoves(boards.movementTest, 'w');
    const moves = [];
    whiteMoves.forEach((piece) => moves.push(...piece.moves));
    expect(whiteMoves.length).to.eql(15);
    expect(moves).to.eql([
      43, 41, 34, 23, 34, 44, 54, 64, 34, 27, 41, 51, 23, 41, 43, 54,
      65, 43, 53, 45, 55, 47, 57, 48, 58, 52, 67, 65, 54, 58, 34, 27]);
  });
  it('correctly generates black moves from arbitrary position', () => {
    const blackMoves = chess.generateMoves(boards.movementTest, 'b');
    const moves = [];
    blackMoves.forEach((piece) => moves.push(...piece.moves));
    expect(blackMoves.length).to.eql(14);
    expect(moves).to.eql([
      54, 55, 97, 84, 88, 68, 57, 55, 71, 61, 75, 77, 67, 84, 73, 71, 82, 71,
      84, 75, 66, 57, 48, 83, 72, 61, 84, 74, 84, 88, 78, 68, 58, 48, 38, 97,
    ]);
  });
});

describe('checkForCheck tests', () => {
  it('returns false for black and white in start position', () => {
    const whiteCheck = chess.checkForCheck(boards.board, 'w');
    const blackCheck = chess.checkForCheck(boards.board, 'b');
    expect(whiteCheck).to.be.false;
    expect(blackCheck).to.be.false;
  });
  it('returns true for both white and black when their kings are in check', () => {
    const whiteCheck = chess.checkForCheck(boards.checkTest, 'w');
    const blackCheck = chess.checkForCheck(boards.checkTest, 'b');
    expect(whiteCheck).to.be.true;
    expect(blackCheck).to.be.true;
  });
  it('returns true for white and false for black when only one kings is in check', () => {
    const whiteCheck = chess.checkForCheck(boards.checkTestTwo, 'w');
    const blackCheck = chess.checkForCheck(boards.checkTestTwo, 'b');
    expect(whiteCheck).to.be.true;
    expect(blackCheck).to.be.false;
  });
});

describe('generateAllLegalMoves tests', () => {
  it('generates all moves for white in start position', () => {
    const whiteMoves = chess.generateAllLegalMoves(boards.board, 'w');

  });
  it('generates all moves for black in start position', () => {
    const blackMoves = chess.generateAllLegalMoves(boards.board, 'b');
  });
  it('generates all moves for white in arbitrary position', () => {
    const whiteMoves = chess.generateAllLegalMoves(boards.movementTest, 'w');
  });
  it('generates all moves for black in arbitrary position', () => {
    const blackMoves = chess.generateAllLegalMoves(boards.movementTest, 'b');
  });
  it('returns only moves that resolve white king in check', () => {
    const whiteMoves = chess.generateAllLegalMoves(boards.board, 'w');
  });
  it('returns only moves that black king in check', () => {
    const blackMoves = chess.generateAllLegalMoves(boards.board, 'b');
  });
  it('returns no moves when white king is in checkmate', () => {
    const whiteMoves = chess.generateAllLegalMoves(boards.board, 'w');
  });
  it('returns no moves when black king in checkmate', () => {
    const blackMoves = chess.generateAllLegalMoves(boards.board, 'b');
  });
});

describe('isValidMove tests', () => {
  it('returns true when a valid white move is provided', () => {

  });
  it('returns true when a valid black move is provided', () => {

  });
  it('returns false when an invalid white move is provided', () => {

  });
  it('returns false when an invalid black move is provided', () =>{

  });
});

describe('checkForCheck tests', () => {
  it('returns true when white king in check', () => {

  });
  it('returns true when black king in check', () => {

  });
});
