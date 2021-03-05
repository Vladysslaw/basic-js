const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // remove line with error and write your code here
  if (!Array.isArray(members)) {
    return false;
  }
  let arr = [];
  members.forEach(name => {
    /* if (Array.isArray(name)) {
      name = name.join('');
    } */
    if (typeof(name) == 'string') {
      for (let i = 0; i < name.length; i++) {
        if (name[i] != ' ') {
          arr.push(name[i]);
          break;
        }
      }
    }
  });
  arr = arr.join('').toUpperCase().split('').sort().join('');
  return arr;
};
