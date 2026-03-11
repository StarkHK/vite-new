import { useCallback, useState } from "react";

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);

  const push = useCallback((element) => setArray((a) => [...a, element]));
  const filter = useCallback((callback) => setArray((a) => a.filter(callback)));
  const clear = useCallback(() => setArray([]), []);
  const update = useCallback(
    (index, item) =>
      setArray((a) => [
        ...a.slice(0, index),
        item,
        ...a.slice(index + 1, a.length),
      ]),
    [],
  );
  const remove = useCallback(
    (index) =>
      setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]),
    [],
  );

  return { array, set: setArray, push, filter, clear, update, remove };
}
