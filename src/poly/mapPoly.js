Array.prototype.mapPoly = function (callBackFunc) {
  let temp = [];
  const len = this.length;

  for (let k = 0; k < len; k++) {
    temp.push(callBackFunc(this[k], k, this));
  }
  return temp;
};
