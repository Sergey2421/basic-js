require("../extensions/custom-error");

module.exports = function countCats(arr) {
return arr.reduce((sum, elem) => {
  sum += elem.reduce((sum, elem) => {
    if (elem == '^^') sum++;
    return sum;
  }, 0);
  return sum;
}, 0)
};
