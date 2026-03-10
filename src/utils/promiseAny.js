export default function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      return new AggregateError([]);
    }

    let pending = iterable.length;
    const errors = new Array(iterable.length);

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        resolve(value);
      } catch (err) {
        errors[index] = err;
        pending--;
      }

      if (pending === 0) {
        resolve(new AggregateError(errors));
      }
    });
  });
}
