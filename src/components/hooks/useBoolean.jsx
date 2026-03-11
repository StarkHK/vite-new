const useBoolean = (initialValue = false) => {
  const [booleanState, setBooleanState] = useState(initialValue);

  const setTrue = () => {
    setBooleanState(true);
  };

  const setFalse = () => {
    setBooleanState(false);
  };

  return { booleanState, setTrue, setFalse };
};
