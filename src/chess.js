/* eslint-disable object-property-newline */
// const boards = require('../test/test-helpers')

const chess = {
  black: 'b',
  white: 'w',

  board: [
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 5, 3, 4, 9, 10, 4, 3, 5, 7,
    7, 1, 1, 1, 1, 1, 1, 1, 1, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, -1, -1, -1, -1, -1, -1, -1, -1, 7,
    7, -5, -3, -4, -9, -10, -4, -3, -5, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  ],

  squares: {
    21: 'a1', 22: 'b1', 23: 'c1', 24: 'd1', 25: 'e1', 26: 'f1', 27: 'g1', 28: 'h1',
    31: 'a2', 32: 'b2', 33: 'c2', 34: 'd2', 35: 'e2', 36: 'f2', 37: 'g2', 38: 'h2',
    41: 'a3', 42: 'b3', 43: 'c3', 44: 'd3', 45: 'e3', 46: 'f3', 47: 'g3', 48: 'h3',
    51: 'a4', 52: 'b4', 53: 'c4', 54: 'd4', 55: 'e4', 56: 'f4', 57: 'g4', 58: 'h4',
    61: 'a5', 62: 'b5', 63: 'c5', 64: 'd5', 65: 'e5', 66: 'f5', 67: 'g5', 68: 'h5',
    71: 'a6', 72: 'b6', 73: 'c6', 74: 'd6', 75: 'e6', 76: 'f6', 77: 'g6', 78: 'h6',
    81: 'a7', 82: 'b7', 83: 'c7', 84: 'd7', 85: 'e7', 86: 'f7', 87: 'g7', 88: 'h7',
    91: 'a8', 92: 'b8', 93: 'c8', 94: 'd8', 95: 'e8', 96: 'f8', 97: 'g8', 98: 'h8',
  },

  history: [],
  currentTurn: ['w', 'b'],

  rookOffset: [-10, -1, 1, 10],
  bishopOffset: [-11, -9, 9, 11],
  omniOffset: [-11, -10, -9, -1, 1, 9, 10, 11],


  generateSlidingMoves(board, pos, pattern) {
    const offset = [...pattern];
    const side = Math.sign(board[pos]);
    const moves = [];

    for (let j = 0; j < offset.length; j += 1) {
      for (let i = 1; i < 8; i += 1) {
        if (offset[j] !== 0) {
          const xSide = Math.sign(board[pos + (i * offset[j])]);
          if (board[pos + (i * offset[j])] === 7 || side === xSide) {
            offset[j] = 0;
          } else if (board[pos + (i * offset[j])] === 0) {
            moves.push(pos + (i * offset[j]));
          } else if (side !== xSide) {
            moves.push(pos + (i * offset[j]));
            offset[j] = 0;
          }
        }
      }
    }
    return moves;
  },

  generateKnightMoves(board, pos) {
    const knightOffset = [21, 19, 8, 12, -8, -12, -19, -21];
    const side = Math.sign(board[pos]);
    const moves = [];

    knightOffset.forEach((jump) => {
      const xSide = Math.sign(board[pos + jump]);
      if (board[pos + jump] !== 7) {
        if (board[pos + jump] === 0 || side !== xSide) {
          moves.push(pos + jump);
        }
      }
    });
    return moves;
  },

  generateKingMoves(board, pos) {
    const offset = [-11, -10, -9, -1, 1, 9, 10, 11];
    const side = Math.sign(board[pos]);
    const moves = [];

    offset.forEach((move) => {
      const xSide = Math.sign(board[pos + move]);
      if (board[pos + move] !== 7 || side === xSide) {
        if (board[pos + move] === 0 || side !== xSide) {
          moves.push(pos + move);
        }
      }
    });

    // for (let i = 0; i < offset.length; i += 1) {
    //   const xSide = Math.sign(board[pos + offset[i]]);
    //   if (board[pos + offset[i]] !== 7 || side === xSide) {
    //     if (board[pos + offset[i]] === 0 || side !== xSide) {
    //       moves.push(pos + offset[i]);
    //     }
    //   }
    // }
    return moves;
  },

  generatePawnMoves(board, pos) {
    const side = Math.sign(board[pos]);
    const moves = [];

    if (side === 1) {
      const offset = [10, 20, 9, 11];
      
    } else if (side === -1) {
      const offset = [-10, -20, -9, -11];
    }
    return moves;
  },

  evaluateBoard() {
    return this.board.reduce((a, b) => a + b) - 1127;
  },
  // generateMoves(color) {

  // },
  // checkForCheck(color) {

  // },
  // moveResInCheck(move) {

  // },
  // generateAllLegalMoves(color) {

  // },
  // isValidMove(move) {

  // },
  // turn(piece, move) {

  // },
  // undo {

  // },

  // enPassant {

  // },
  // promotion {

  // },
  // castle {

  // },

  // threefoldRep() {

  // },
};


console.log(chess.generateKingMoves(chess.board, 24, chess.omniOffset));


module.exports = chess;

// aboard: [
//   7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
//   7, 7, 7, 7, 7, 5, 3, 4, 9, 10, 4, 3, 5, 7, 7,
//   7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7,
//   7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7,
//   7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7,
//   7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7,
//   7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7,
//   7, 7, 7, 7, 7, -1, -1, -1, -1, -1, -1, -1, -1, 7, 7,
//   7, 7, 7, 7, 7, -5, -3, -4, -9, -10, -4, -3, -5, 7, 7,
//   7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
//   7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
//   7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
//   7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
//   7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
//   7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
// ],

//   squares: {
//   a1: 21, b1: 22, c1: 23, d1: 24, e1: 25, f1: 26, g1: 27, h1: 28,
//     a2: 31, b2: 32, c2: 33, d2: 34, e2: 35, f2: 36, g2: 37, h2: 38,
//       a3: 41, b3: 42, c3: 43, d3: 44, e3: 45, f3: 46, g3: 47, h3: 48,
//         a4: 51, b4: 52, c4: 53, d4: 54, e4: 55, f4: 56, g4: 57, h4: 58,
//           a5: 61, b5: 62, c5: 63, d5: 64, e5: 65, f5: 66, g5: 67, h5: 68,
//             a6: 71, b6: 72, c6: 73, d6: 74, e6: 75, f6: 76, g6: 77, h6: 78,
//               a7: 81, b7: 82, c7: 83, d7: 84, e7: 85, f7: 86, g7: 87, h7: 88,
//                 a8: 91, b8: 92, c8: 93, d8: 94, e8: 95, f8: 96, g8: 97, h8: 98,
//   },
// squares: {
//   20: 'a1', 21: 'b1', 22: 'c1', 23: 'd1', 24: 'e1', 25: 'f1', 26: 'g1', 27: 'h1',
//     35: 'a2', 36: 'b2', 37: 'c2', 38: 'd2', 39: 'e2', 40: 'f2', 41: 'g2', 42: 'h2',
// 50: 'a3', 51: 'b3', 52: 'c3', 53: 'd3', 54: 'e3', 55: 'f3', 56: 'g3', 57: 'h3',
// 65: 'a4', 66: 'b4', 67: 'c4', 68: 'd4', 69: 'e4', 70: 'f4', 71: 'g4', 72: 'h4',
// 80: 'a5', 81: 'b5', 82: 'c5', 83: 'd5', 84: 'e5', 85: 'f5', 86: 'g5', 87: 'h5',
// 95: 'a6', 96: 'b6', 97: 'c6', 98: 'd6', 99: 'e6', 100: 'f6', 101: 'g6', 102: 'h6',
// 110: 'a7', 111: 'b7', 112: 'c7', 113: 'd7', 114: 'e7', 115: 'f7', 116: 'g7', 117: 'h7',
// 125: 'a8', 126: 'b8', 127: 'c8', 128: 'd8', 129: 'e8', 130: 'f8', 131: 'g8', 132: 'h8',
//   },

// rookOffset: [-15, -1, 1, 15],
//   bishopOffset: [-16, -14, 14, 16],
//     queenOffset: [-16, -15, -14, -1, 1, 14, 15, 16],
// const knightOffset = [17, 13, -13, -17, 31, 29, -31, -29];
