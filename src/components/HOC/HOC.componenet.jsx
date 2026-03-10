import { useState } from "react";

const HighOrderComponent = (Component, incValue) => {
  const HOCFunction = () => {
    const [value, setValue] = useState(0);

    const handleValue = () => {
      setValue(value + incValue);
    };

    return <Component value={value} incFunction={handleValue} />;
  };

  return HOCFunction;
};

export default HighOrderComponent;
