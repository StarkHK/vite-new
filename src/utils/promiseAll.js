export default function polyAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unResolved = iterable.length;

    if (unResolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        let value = await item;
        result[index] = value;
        unResolved -= 1;

        if (unResolved === 0) {
          resolve(result);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}
