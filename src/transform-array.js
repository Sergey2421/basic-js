require("../extensions/custom-error");
module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error;
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (typeof arr[i + 1] !== "undefined") {
        i++;
        continue;
      } else continue;
    }
    if (arr[i] === '--discard-prev') {
      if (arr[i - 2] !== '--discard-next' && typeof arr[i - 1] !== "undefined") {
        new_arr.pop();
        continue;
      } else continue;
    }
    if (arr[i] === '--double-next') {
      if (typeof arr[i + 1] !== "undefined") {
        new_arr.push(arr[i + 1]);
        continue;
      } else continue;
    }
    if (arr[i] === '--double-prev') {
      if (arr[i - 2] !== '--discard-next' && typeof arr[i - 1] !== "undefined") {
        new_arr.push(arr[i - 1]);
        continue;
      } else continue;
    }
    new_arr.push(arr[i]);
  }
  return new_arr;
};
