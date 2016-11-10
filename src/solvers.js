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
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  // if (n % 2 === 0) {    // if n is even
  //   var queenLocs = [];
  //   var colIndex = 1;

  //   for (var i = 0; i < n; i++) { // calculate where queens should be
  //     if (colIndex < n) {
  //       queenLocs.push([i, colIndex]);
  //       colIndex += 2;
  //     } else {
  //       colIndex = 0;
  //       queenLocs.push([i, colIndex]);
  //       colIndex += 2;
  //     }
  //   }

  //   for (var j = 0; j < n; j++) { // construct solution matrix
  //     var evenRow = [];
  //     for (var k = 0; k < n; k++) {
  //       if (queenLocs.includes([j, k])) { // if queen location, push 1
  //         evenRow.push(1);
  //       } else {
  //         evenRow.push(0);
  //       }
  //     }
  //     solution.push(evenRow);
  //   }
  // } else {              // if n is odd

  // }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
