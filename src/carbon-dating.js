const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity == undefined || typeof(sampleActivity) != 'string') {
    return false;
  }
  sampleActivity = +sampleActivity;
  if (isNaN(sampleActivity) || sampleActivity == 0 || (sampleActivity < 0 || sampleActivity > 15)) {
      return false;
  }
  let t, k;
  k = 0.693 / HALF_LIFE_PERIOD;
  t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  return t;
};