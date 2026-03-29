import { useState, useCallback } from "react";
export default function useMap(initialState) {
  const [map, setMap] = useState(new Map(initialState));

  const set = useCallback((key, value) => {
    setMap((prev) => {
      const copy = new Map(prev);
      copy.set(key, value);
      return copy;
    });
  }, []);

  const setAll = useCallback((entries) => {
    setMap(() => new Map(entries));
  }, []);

  const remove = useCallback((key) => {
    setMap((prev) => {
      const copy = new Map(prev);
      copy.delete(key);
      return copy;
    });
  }, []);

  const reset = useCallback(() => {
    setMap(() => new Map());
  }, []);

  return { map, set, setAll, reset, remove };
}
