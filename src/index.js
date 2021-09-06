module.exports = function solveSudoku(matrix) {
  const playgroundSize = 9;
  const boxSize = 3;

  function isValid(matrix, row, col, pos) {

    for (let i = 0; i < playgroundSize; i++) {
      const x = boxSize * Math.floor(row / boxSize) + Math.floor(i / boxSize);
      const y = boxSize * Math.floor(col / boxSize) + i % boxSize;

      if (matrix[row][i] == pos || matrix[i][col] == pos || matrix[x][y] == pos) return false;
    };
    
    return true;
  };

  //------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------

  for (let row = 0; row < playgroundSize; row++) {
    for (let col = 0; col < playgroundSize; col++) {

      if (matrix[row][col] == 0) {
        
        for (let i = 1; i <= playgroundSize; i++) {
          if (isValid(matrix, row, col, i)) {
            matrix[row][col] = i;

            if (solveSudoku(matrix)) return matrix;
            else matrix[row][col] = 0;
          }
        }

      return false;
      }
    }
  }

  return matrix;
};


