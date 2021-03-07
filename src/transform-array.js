const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--double-next') {
      newArr.push(arr[i+1]);
      continue;
    } else if (arr[i] == '--double-prev') {
      if (arr[i-2] == '--discard-next') {
        continue;
      }
      newArr.push(arr[i-1]);
    } else if (arr[i] == '--discard-prev') {
      if (arr[i-2] == '--discard-next') {
        continue;
      }
      newArr.pop();
    } else if (arr[i] == '--discard-next') {
      continue;
    } else if (arr[i - 1] == '--discard-next') {
      continue;
    } else {
      newArr.push(arr[i]);
    }
  }
  let newestArr = [];
  newArr.forEach(item => {
    if (item != undefined) {
      newestArr.push(item);
    }
  });
  return newestArr;
}