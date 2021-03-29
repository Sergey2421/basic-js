require("../extensions/custom-error");
const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  return parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > 15 || isNaN(parseFloat(sampleActivity)) || typeof(parseFloat(sampleActivity)) === 'string' || typeof(sampleActivity) !== 'string' ? false : Math.ceil((Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity)))/(Math.LN2/HALF_LIFE_PERIOD));
};
