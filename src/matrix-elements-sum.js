const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 0;
  let columnCount = matrix[0].length;
  for (let i = 0; i< columnCount; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] !== 0) {
        sum +=matrix[j][i];
      } else  {
        break;}
    }
  }
  return sum;
}
module.exports = {
  getMatrixElementsSum
};
