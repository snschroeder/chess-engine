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

describe('genDirtyMoves test', () => {
  it('correctly generates all white moves in start position', () => {
    const whiteMoves = chess.genDirtyMoves(boards.board, 'w');
    let moveCount = 0;
    whiteMoves.forEach((piece) => {
      moveCount += piece.length - 2;
    });
    const dirtyMoves = chess.genShortDirtyMoves(boards.board, 'w');
    expect(moveCount).to.eql(20);
    expect(whiteMoves.length).to.eql(16);
    expect(dirtyMoves).to.eql([43, 41, 48, 46, 41, 51, 42, 52, 43, 53, 44, 54, 45, 55, 46, 56, 47, 57, 48, 58]);
  });
  it('correctly generates all black moves in start position', () => {
    const blackMoves = chess.genDirtyMoves(boards.board, 'b');
    let moveCount = 0;
    blackMoves.forEach((piece) => {
      moveCount += piece.length - 2;
    });
    const dirtyMoves = chess.genShortDirtyMoves(boards.board, 'b');
    expect(moveCount).to.eql(20);
    expect(blackMoves.length).to.eql(16);
    expect(dirtyMoves).to.eql([71, 61, 72, 62, 73, 63, 74, 64, 75, 65, 76, 66, 77, 67, 78, 68, 73, 71, 78, 76]);
  });
  it('correctly generates white moves from arbitrary position', () => {
    const whiteMoves = chess.genDirtyMoves(boards.movementTest, 'w');
    const dirtyMoves = chess.genShortDirtyMoves(boards.movementTest, 'w');
    expect(whiteMoves.length).to.eql(15);
    expect(dirtyMoves).to.eql([
      43, 41, 34, 23, 34, 44, 54, 64, 34, 27, 41, 51, 23, 41, 43, 54,
      65, 43, 53, 45, 55, 47, 57, 48, 58, 52, 67, 65, 54, 58, 34, 27,
    ]);
  });
  it('correctly generates black moves from arbitrary position', () => {
    const blackMoves = chess.genDirtyMoves(boards.movementTest, 'b');
    const dirtyMoves = chess.genShortDirtyMoves(boards.movementTest, 'b');
    expect(blackMoves.length).to.eql(14);
    expect(dirtyMoves).to.eql([
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
  it('returns true for white and false for black when only the white king is in check', () => {
    const whiteCheck = chess.checkForCheck(boards.checkTestTwo, 'w');
    const blackCheck = chess.checkForCheck(boards.checkTestTwo, 'b');
    expect(whiteCheck).to.be.true;
    expect(blackCheck).to.be.false;
  });
});

describe('genAllPseudoLegalMoves tests', () => {
  it('generates all moves for white in start position', () => {
    const whiteMoves = chess.genAllPseudoLegalMoves(boards.board, 'w');
    const shortenedMoves = chess.genShortPseudoLegalMoves(boards.board, 'w');
    let moveCount = 0;
    whiteMoves.forEach((piece) => {
      moveCount += piece.length - 2;
    });
    expect(whiteMoves.length).to.eql(16);
    expect(moveCount).to.eql(20);
    expect(shortenedMoves).to.eql([43, 41, 48, 46, 41, 51, 42, 52, 43, 53, 44, 54, 45, 55, 46, 56, 47, 57, 48, 58]);
  });
  it('generates all moves for black in start position', () => {
    const blackMoves = chess.genAllPseudoLegalMoves(boards.board, 'b');
    const shortenedMoves = chess.genShortPseudoLegalMoves(boards.board, 'b');
    let moveCount = 0;
    blackMoves.forEach((piece) => {
      moveCount += piece.length - 2;
    });
    expect(blackMoves.length).to.eql(16);
    expect(moveCount).to.eql(20);
    expect(shortenedMoves).to.eql([71, 61, 72, 62, 73, 63, 74, 64, 75, 65, 76, 66, 77, 67, 78, 68, 73, 71, 78, 76]);
  });
  it('generates all moves for white in arbitrary position', () => {
    const whiteMoves = chess.genAllPseudoLegalMoves(boards.movementTest, 'w');
    const shortenedMoves = chess.genShortPseudoLegalMoves(boards.movementTest, 'w');
    expect(whiteMoves.length).to.eql(15);
    expect(shortenedMoves).to.eql([
      43, 41, 34, 23, 34, 44, 54, 64, 34, 27, 41, 51, 23, 41, 43, 54,
      65, 43, 53, 45, 55, 47, 57, 48, 58, 52, 67, 65, 54, 58, 34, 27,
    ]);
  });
  it('generates all moves for black in arbitrary position', () => {
    const blackMoves = chess.genAllPseudoLegalMoves(boards.movementTest, 'b');
    const shortenedMoves = chess.genShortPseudoLegalMoves(boards.movementTest, 'b');
    expect(blackMoves.length).to.eql(14);
    expect(shortenedMoves).to.eql([
      54, 55, 97, 84, 88, 68, 57, 55, 71, 61, 75, 77, 67, 84, 73, 71, 82, 71,
      84, 75, 66, 57, 48, 83, 72, 61, 84, 74, 84, 88, 78, 68, 58, 48, 38, 97,
    ]);
  });
  it('returns only moves that resolve white king in check', () => {
    const whiteMoves = chess.genAllPseudoLegalMoves(boards.checkTestTwo, 'w');
    const shortenedPLegalMoves = chess.genShortPseudoLegalMoves(boards.checkTestTwo, 'w');
    expect(whiteMoves.length).to.eql(14);
    expect(whiteMoves).to.eql([
      [5, 21],
      [3, 22],
      [9, 24, 35],
      [10, 25, 34],
      [4, 26, 35],
      [5, 28],
      [1, 31],
      [4, 32, 65],
      [1, 33],
      [1, 36],
      [1, 37],
      [1, 38],
      [1, 42],
      [3, 46, 65],
    ]);
    expect(shortenedPLegalMoves).to.eql([35, 34, 35, 65, 65]);
  });
  it('returns only moves that resolve black king in check', () => {
    const blackMoves = chess.genAllPseudoLegalMoves(boards.checkTest, 'b');
    const shortenedPLegalMoves = chess.genShortPseudoLegalMoves(boards.checkTest, 'b');
    expect(blackMoves).to.eql([
      [-4, 61],
      [-1, 64],
      [-1, 65],
      [-3, 76, 97],
      [-1, 81],
      [-1, 85],
      [-1, 86],
      [-1, 87],
      [-5, 91],
      [-3, 92],
      [-9, 94],
      [-10, 95, 84],
      [-5, 98, 97],
    ]);
    expect(shortenedPLegalMoves).to.eql([97, 84, 97]);
  });
  it('returns no moves when white king is in checkmate', () => {
    const whiteMoves = chess.genAllPseudoLegalMoves(boards.checkmateWhite, 'w');
    const shortenedPLegalMoves = chess.genShortPseudoLegalMoves(boards.checkmateWhite, 'w');
    expect(whiteMoves).to.eql([
      [10, 25],
      [1, 37],
      [1, 38],
      [1, 42],
      [3, 46],
    ]);
    expect(shortenedPLegalMoves).to.eql([]);
  });
  it('returns no moves when black king in checkmate', () => {
    const blackMoves = chess.genAllPseudoLegalMoves(boards.checkmateBlack, 'b');
    const shortenedPLegalMoves = chess.genShortPseudoLegalMoves(boards.checkmateBlack, 'b');
    expect(blackMoves).to.eql([
      [-1, 64],
      [-3, 76],
      [-1, 81],
      [-1, 86],
      [-1, 87],
      [-5, 91],
      [-3, 92],
      [-10, 95],
      [-5, 98],
    ]);
    expect(shortenedPLegalMoves).to.eql([]);
  });
});

describe('isValidMove tests', () => {
  it('returns true when a valid white move is provided', () => {
    const whiteMove = chess.isValidMove(boards.board, 'w', 1, 33, 43);
    expect(whiteMove).to.be.true;
  });
  it('returns true when a valid black move is provided', () => {
    const blackMove = chess.isValidMove(boards.board, 'b', -3, 92, 71);
    expect(blackMove).to.be.true;
  });
  it('returns false when an invalid white move is provided', () => {
    const whiteMove = chess.isValidMove(boards.board, 'w', 10, 25, 88);
    expect(whiteMove).to.be.false;
  });
  it('returns false when an invalid black move is provided', () => {
    const blackMove = chess.isValidMove(boards.board, 'b', -9, 94, 33);
    expect(blackMove).to.be.false;
  });
});


describe('evaluateBoard tests', () => {
  it('returns 0 in start position', () => {
    expect(chess.evaluateBoard(boards.board)).to.eql(0);
  });
  it('returns the correct positive value when white has a piece advantage', () => {
    expect(chess.evaluateBoard(boards.checkmateBlack)).to.eql(19);
  });
  it('returns the correct negative value when black has a piece advantage', () => {
    expect(chess.evaluateBoard(boards.checkmateWhite)).to.eql(-34);
  });
});
