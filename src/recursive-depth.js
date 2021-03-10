const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxdepth = 0
    for (let elem of arr) {
      if (Array.isArray(elem)) {
        let depth = this.calculateDepth(elem);
        if (depth > maxdepth) {
          maxdepth = depth;
        }
      } 
    }
    return maxdepth + 1;
  }
};