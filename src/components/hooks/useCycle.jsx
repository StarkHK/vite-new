import { useCallback, useState } from "react";

export default function useCycle(...args) {
  const [index, setIndex] = useState(0);

  const cycle = useCallback(() => {
    setIndex((ind) => (ind + 1) % args.length);
  }, []);

  return { index, cycle };
}
