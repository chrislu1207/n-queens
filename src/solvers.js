/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// var board = new Board(5);

window.findNRooksSolution = function(n) {
  var solution = [];

  for (var i = 0; i < n; i++) {
    var array = [];
    for (var j = 0; j < n; j++) {
      if (i === j) {
        array.push(1);  
      } else {
        array.push(0);
      }
    }
    solution.push(array);
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var solutions = {};
  var previousBoardState = undefined;

  var boardInspector = function(board, rowIndex, colIndex) {
    if (!board._isInBounds(rowIndex, colIndex)) {
      console.log('Out of bounds, returning');
      return;
    }

    if (board.get(rowIndex)[colIndex] === 0) {
      board.togglePiece(rowIndex, colIndex);
    }

    var numPieces = _.reduce(board.rows(), function(memo, row) {
      return memo + _.reduce(row, function(memo, col) {
        return memo + col;
      }, 0);
    }, 0);

    if (board.hasAnyRooksConflicts()) {
      console.log('Conflict detected at', rowIndex, colIndex);
      board.togglePiece(rowIndex, colIndex);
      console.log('Untoggling', rowIndex, colIndex);
      if (colIndex === n - 1) {
        colIndex = 0;
        console.log('At end of row, moving to', rowIndex + 1, colIndex);
        boardInspector(board, rowIndex + 1, colIndex);
      } else {
        console.log('Moving on to', rowIndex, colIndex + 1);
        boardInspector(board, rowIndex, colIndex + 1);
      }
    } else if (!board.hasAnyRooksConflicts()) {
      console.log('No conflicts!');
      if (!previousBoardState) {
        previousBoardState = board;
      }

      if (numPieces === n) {
        console.log('Number of pieces =', n, '!!SOLUTION FOUND!!  Solution:', board.rows());
        solutions[JSON.stringify(board.rows())] = board.rows();
        console.log('Total solutions now:', Object.keys(solutions).length);
        console.log('Toggling solution off');
        board.togglePiece(rowIndex, colIndex);
        if (colIndex === n - 1) {
          colIndex = 0;
          console.log('At end of row, moving to', rowIndex + 1, colIndex);
          boardInspector(board, rowIndex + 1, colIndex);
        } else {
          console.log('Moving on to', rowIndex, colIndex + 1);
          boardInspector(board, rowIndex, colIndex + 1);
        }
      } else {
        console.log('but only', numPieces, 'rooks');
        if (colIndex === n - 1) {
          colIndex = 0;
          console.log('At end of row, moving to', rowIndex + 1, colIndex);
          boardInspector(board, rowIndex + 1, colIndex);
        } else {
          console.log('Moving on to', rowIndex, colIndex + 1);
          boardInspector(board, rowIndex, colIndex + 1);
        }
      }
    }
  };

  console.log('INSPECTING', n, 'BY', n, 'BOARD');
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var board = new Board({n: n});
      console.log('STARTING AT', i, j);
      board.togglePiece(i, j);
      boardInspector(board, 0, 0);
    }
  }

  for (var key in solutions) {
    console.log(key);
  }

  solutionCount = Object.keys(solutions).length;

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
