/* eslint-disable no-multi-spaces */
const boards = {

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

  rookTestOne: [
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 5, 0, 0, 9, 10, 4, 3, 5, 7,
    7, 0, 1, 1, 1, 1, 1, 1, 1, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, -1, -1, -1, -1, -1, -1, -1, 0, 7,
    7, -5, -3, -4, -9, -10, 0, 0, -5, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  ],

  rookTestTwo: [
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 5, 3, 4, 9, 10, 4, 3, 5, 7,
    7, 1, 1, 1, 1, 1, 1, 1, 1, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 5, 0, 0, 0, 7,
    7, 0, 0, 0, -5, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, -1, -1, -1, -1, -1, -1, -1, -1, 7,
    7, -5, -3, -4, -9, -10, -4, -3, -5, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  ],

  bishopTestOne: [
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 5, 3, 4, 9, 10, 4, 3, 5, 7,
    7, 1, 0, 1, 0, 1, 1, 1, 1, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, -4, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, -1, -1, -1, -1, -1, -1, -1, -1, 7,
    7, -5, -3, -4, -9, -10, -4, -3, -5, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  ],

  queenTestOne: [
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 5, 3, 4, 0, 10, 4, 3, 5, 7,
    7, 1, 1, 1, 1, 1, 1, 1, 1, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 9, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, -1, -1, -1, -1, -1, -1, -1, -1, 7,
    7, -5, -3, -4, -9, -10, -4, -3, -5, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  ],

  knightTestOne: [
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 5, 3, 4, 9, 10, 4, 3, 5, 7,
    7, 1, 0, 1, 0, 1, 1, 1, 1, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, -3, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, -1, -1, -1, -1, -1, -1, -1, -1, 7,
    7, -5, -3, -4, -9, -10, -4, -3, -5, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  ],

  kingTestOne: [
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 5, 3, 4, 9, 10, 4, 3, 5, 7,
    7, 1, 1, 1, 0, 1, 1, 1, 1, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 10, 0, 0, 0, 7,
    7, 0, 0, -10, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, -1, -1, -1, -1, -1, -1, -1, -1, 7,
    7, -5, -3, -4, -9, -10, -4, -3, -5, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  ],

  kingTestTwo: [
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 5, 3, 4, 9, 10, 4, 3, 5, 7,
    7, 1, 1, 1, 1, 1, 1, 1, 1, 7,
    7, 0, 0, 0, 0, 10, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, -10, 0, 0, 0, 7,
    7, -1, -1, -1, -1, -1, -1, -1, -1, 7,
    7, -5, -3, -4, -9, 0, -4, -3, -5, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  ],
  kingTestThree: [
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 5, 3, 4, 9, 0, 4, 3, 5, 7,
    7, 1, 1, 1, 1, 1, 1, 1, 1, 7,
    7, 0, 0, 0, 0, -10, 0, 0, 0, 7,
    7, 0, 0, 0, 0, -1, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 1, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 10, 0, 0, 0, 7,
    7, -1, -1, -1, -1, -1, -1, -1, -1, 7,
    7, -5, -3, -4, -9, 0, -4, -3, -5, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  ],
  pawnTestOne: [
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 5, 3, 4, 9, 10, 4, 3, 5, 7,
    7, 0, 1, 0, 1, 0, 1, 1, 0, 7,
    7, 1, 0, -1, 0, 0, 0, 0, 0, 7, // three test here
    7, 0, 0, 0, 0, 0, 0, 0, 1, 7, // one test here
    7, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, -1, 0, 0, 0, 1, 0, 0, 0, 7, // three test here
    7, 0, 0, -1, -1, 0, -1, -1, -1, 7,
    7, -5, -3, -4, -9, -10, -4, -3, -5, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  ],

  movementTest: [
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
    7,  5,  3,  0,  9,  10,  4,  0,  5, 7,
    7,  1,  4,  1,  0,  1,   1,  1,  1, 7,
    7,  0,  1,  0,  0,  0,   3,  0,  0, 7,
    7,  0,  0,  0,  0,  0,   0,  0,  0, 7,
    7,  0,  0,  0, -1, -1,   0,  0,  0, 7,
    7,  0,  0,  0,  0,  0,  -3,  0,  0, 7,
    7, -1,  0,  0,  0, -1,  -1, -1,  0, 7,
    7, -5, -3, -4, -9, -10, -4,  0, -5, 7,
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
  ],

  checkTest: [
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
    7,  5,  3,  0,  9,  10,  4,  0,  5, 7,
    7,  1,  4,  1,  0,  1,   1,  1,  1, 7,
    7,  0,  1,  0,  0,  0,   3,  0,  0, 7,
    7,  0,  0,  0,  0,  0,   0,  0,  0, 7,
    7, -4,  0,  0, -1, -1,   0,  0,  0, 7,
    7,  0,  0,  0,  0,  0,  -3,  0,  0, 7,
    7, -1,  0,  0,  0, -1,  -1, -1,  0, 7,
    7, -5, -3,  0, -9, -10,  0,  5, -5, 7,
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
  ],
  checkTestTwo: [
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
    7,  5,  3,  0,  9,  10,  4,  0,  5, 7,
    7,  1,  4,  1,  0,  0,   1,  1,  1, 7,
    7,  0,  1,  0,  0,  0,   3,  0,  0, 7,
    7,  0,  0,  0,  0,  0,   0,  0,  0, 7,
    7,  0,  0,  0, -1, -5,   0,  0,  0, 7,
    7,  0,  0,  0,  0,  0,  -3,  0,  0, 7,
    7, -1,  0,  0,  0, -1,  -1, -1,  0, 7,
    7, -5, -3,  0, -9, -10,  0,  0, -5, 7,
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
  ],

  checkmateWhite: [
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
    7, -5,  0,  0,  0,  10,  0,  0,  0, 7,
    7,  0, -9,  0,  0,  0,   0,  1,  1, 7,
    7,  0,  1,  0,  0,  0,   3,  0,  0, 7,
    7,  0,  0,  0,  0,  0,   0,  0,  0, 7,
    7,  0,  0,  0, -1, -5,   0,  0,  0, 7,
    7,  0,  0,  0,  0,  0,  -3,  0,  0, 7,
    7, -1,  0,  0,  0, -1,  -1, -1,  0, 7,
    7, -5, -3,  0,  0, -10,  0,  0, -5, 7,
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
  ],
  checkmateBlack: [
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
    7,  5,  3,  0,  0,  10,  4,  0,  5, 7,
    7,  1,  0,  1,  0,  0,   1,  1,  1, 7,
    7,  0,  1,  0,  0,  0,   3,  0,  0, 7,
    7,  0,  4,  0,  0,  0,   0,  0,  0, 7,
    7,  0,  0,  0, -1,  0,   0,  0,  0, 7,
    7,  0,  0,  0,  0,  0,  -3,  0,  0, 7,
    7, -1,  0,  0,  0,  9,  -1, -1,  0, 7,
    7, -5, -3,  0,  0, -10,  0,  0, -5, 7,
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
    7,  7,  7,  7,  7,  7,   7,  7,  7, 7,
  ],

};

module.exports = boards;
