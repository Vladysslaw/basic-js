const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',
  getLength() {
    let arr = this.chain.split('~~');
    let i = 0;
    arr.forEach(item => {
      i++;
    })
    return i;
  },
  addLink(value) {
    if (this.chain == '') {
      this.chain = `( ${value} )`;
    } else {
      this.chain += `~~( ${value} )`;
    }
    return this;
  },
  removeLink(position) {
    if (typeof(position) != 'number' || position < 0 || position > this.getLength()) {
      this.chain = '';
      throw Error;
    }
    let arr = this.chain.split('~~');
    let newArr = [];
    arr.forEach((item, index) => {
      if (position != index + 1) {
        newArr.push(item);
      }
    this.chain = newArr.join('~~');
    })
    return this;
  },
  reverseChain() {
    let arr = this.chain.split('~~');
    arr.reverse();
    this.chain = arr.join('~~');
    return this;
  },
  finishChain() {
    this.newChain = this.chain;
    this.chain = '';
    return this.newChain;
  }
};

module.exports = chainMaker;
