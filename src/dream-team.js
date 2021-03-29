require("../extensions/custom-error");
module.exports = function createDreamTeam(members) {
  return Array.isArray(members) ? members.reduce((name, elem) => {
    if (typeof elem === 'string') {
      name += elem.match(/[a-zA-z]/i)[0].toUpperCase();
    }
    return name;
  }, '').split('').sort().join('') : false;
};
