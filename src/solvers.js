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

  // if (n === 1) {
  //   return 1;
  // }

  // var boardInspector = function(board, n) { // helper function??
  //   console.log('Entered boardInspector');
  //   for (var j = 0; j < n; j++) {
  //     for (var k = 0; k < n; k++) {
  //       if (board.get(j)[k] === 0) {
  //         board.togglePiece(j, k);
  //         console.log('Toggled', j, k, 'to', board.get(j)[k]);
  //       }
  //       var numPieces = _.reduce(board.rows(), function(memo, row) {
  //         return memo + _.reduce(row, function(memo, col) {
  //           return memo + col;
  //         }, 0);
  //       }, 0);
  //       console.log('Number of rooks:', numPieces);
  //       if (board.hasAnyRooksConflicts()) {
  //         board.togglePiece(j, k);
  //         console.log('Has rook conflict. toggling back');
  //         break;
  //       } else if (numPieces === n) {
  //         solutionCount++;
  //         console.log('No conflicts, exiting loop');
  //         break;
  //       } else {
  //         console.log('Going deeper');
  //         boardInspector(board, n);  
  //       }
  //     }
  //   }
  // };

  // for (var i = 1; i < n; i++) {     // for each n passed in, construct a nxn board
  //   console.log('Starting iterations');
  //   var board = new Board({n: i});
  //   boardInspector(board, n); 
  // }

  var boardInspector = function(board, n, rowIndex, colIndex) {
    console.log('Inspecting board for n =', n);
    board.togglePiece(rowIndex, colIndex);
    console.log('Toggling', rowIndex, colIndex);
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (board.get(i)[j] === 0) {
          board.togglePiece(i, j);
          console.log(i, j, 'is 0, toggling to 1');
        }
        if (board.hasAnyRooksConflicts()) {
          console.log('Conflict detected, returning');
          board.togglePiece(i, j);
          console.log('Toggling', i, j, 'back');
          return;
        }
        var numPieces = _.reduce(board.rows(), function(memo, row) {
          return memo + _.reduce(row, function(memo, col) {
            return memo + col;
          }, 0);
        }, 0);
        console.log('Number of rooks:', numPieces);
        if (numPieces === n) {
          console.log('Solution!');
          solutionCount++;
          return;
        } else {
          console.log('No dice, inspecting board starting at', i, j + 1);
          boardInspector(board, n, i, j + 1);
        }
      }
    }
  };

  var board = new Board({n: n});
  boardInspector(board, n, 0, 0);
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
