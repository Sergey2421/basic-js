require("../extensions/custom-error");
module.exports = function repeater(str, options) {
  let result = [];
  let additionArr = [];
  if (options.addition !== undefined) {
    options.additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    for (let i = 0; i < options.additionRepeatTimes; i++)
      additionArr.push(options.addition + '');
  }
  options.repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  for (let j = 0; j < options.repeatTimes; j++)
    result.push(str + additionArr.join(options.additionSeparator || '|'));
  return result.join(options.separator || '+');
};
  