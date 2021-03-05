const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // remove line with error and write your code here
  let ears = 0;
  matrix.forEach(arr => {
    arr.forEach(item => {
      if (item == '^^') {
        ears++;
      }
    });
  });
  return ears;
};
