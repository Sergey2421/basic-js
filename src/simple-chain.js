require("../extensions/custom-error");

const chainMaker = {
  chains : [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if( position < 0 && position > this.chains.length || typeof position !== 'number' || !Number.isInteger(position) || isNaN(position)) {
      this.chains = [];
      throw new Error();
    } else this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    let str = this.chains.join('~~');
    this.chains = [];
    return str;
  }
};

module.exports = chainMaker;
