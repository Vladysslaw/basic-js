const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }
  if(isNaN(date.getTime())) {
    throw Error;
  }
  let month = date.getMonth();
  let str = '';
  if (month == 0 || month == 1 || month == 11) {
    str = 'winter';
  } else if (month >= 2 && month <= 4) {
    str = 'spring';
  } else if (month >= 5 && month <= 7) {
    str = 'summer';
  } else if (month >= 8 && month <= 10) {
    str = 'fall';
  } 
  return str;
};
