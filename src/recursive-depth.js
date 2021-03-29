require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let deep = 0;
    for (let i = 0; i < arr.length; i++)
      if (Array.isArray(arr[i])) {
        deep = Math.max(this.calculateDepth(arr[i]), deep);
      }
    return ++deep;
  }
};