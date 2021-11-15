const NumberInput = ({ value, setValue }) => {
  const decrement = () => {
    if (value === 1) {
      return;
    }
    setValue(value - 1);
  };

  const increment = () => {
    if (value === 8) {
      return;
    }
    setValue(value + 1);
  };

  return (
    <div className="flex mx-4">
      <button
        className="border border-solid border-lime-300 text-white w-8 hover:bg-gradient-to-tr  from-lime-300 to-yellow-300 hover:text-black"
        onClick={decrement}
      >
        -
      </button>
      <input
        name="numParagraphs"
        id="numParagraphs"
        className="text-white text-center bg-black w-10 border border-solid border-lime-300 border-r-0 border-l-0 outline-none fous:outline-none"
        defaultValue={value}
      />
      <button
        className="border border-solid border-lime-300 text-white w-8 hover:bg-gradient-to-tr from-lime-300 to-yellow-300 hover:text-black"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default NumberInput;
