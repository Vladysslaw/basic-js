const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {};
  turns = Math.pow(2, disksNumber) - 1;
  seconds = Math.floor(turns / (turnsSpeed / 3600));
  obj.turns = turns;
  obj.seconds = seconds;
  return obj;
};
