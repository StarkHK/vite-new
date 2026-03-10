Array.prototype.reducePoly = function (callBackFunc, initialValue) {
  const noInitialValue = initialValue === undefined;
  const len = this.length;

  if (noInitialValue === undefined && len === 0) {
    throw new TypeError("somethings is wrong I can feel it");
  }

  let acc = noInitialValue ? this[0] : initialValue;
  let startingIndex = noInitialValue ? 1 : 0;

  for (let k = startingIndex; k < len; k++) {
    if (Object.hasOwn(this, k)) {
      acc = callBackFunc(acc, this[k], k, this);
    }
  }

  return acc;
};
