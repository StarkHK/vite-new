Array.prototype.filterPoly = function (callBackFunc, thisArgs) {
  const len = this.length;
  const result = [];

  for (let k = 0; k < len; k++) {
    const kValue = this[k];

    if (
      Object.hasOwn(this, k) &&
      callBackFunc.call(thisArgs, kValue, k, this)
    ) {
      result.push(kValue);
    }
  }

  return result;
};
