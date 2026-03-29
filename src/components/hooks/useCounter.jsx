import { useState } from "react";

export default function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(initialValue ? initialValue : 0);
  };

  return { count, increment, decrement, reset, setCount };
}
