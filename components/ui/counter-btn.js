const CounterBtn = ({ calcType, value, setValue }) => {
  const decrement = () => {
    if (value === 1) {
      return;
    }
    setValue(value - 1);
  };

  const increment = () => {
    if (value === 25) {
      return;
    }
    setValue(value + 1);
  };

  return (
    <button
      className="border border-solid border-lime-300 text-white w-8 xl:w-12 hover:bg-gradient-to-tr  from-lime-300 to-yellow-300 hover:text-black"
      onClick={calcType === "increment" ? increment : decrement}
    >
      {calcType === "increment" ? "+" : "–"}
    </button>
  );
};

export default CounterBtn;
