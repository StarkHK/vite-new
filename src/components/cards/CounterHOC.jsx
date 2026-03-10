import HighOrderComponent from "../HOC/HOC.componenet";

const CounterHOC = ({ value, incFunction }) => {
  return (
    <>
      <button onClick={incFunction}>INC value</button>

      <span>{value}</span>
    </>
  );
};

export default HighOrderComponent(CounterHOC, 5);
