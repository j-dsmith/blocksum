import CounterBtn from "./counter-btn";

const NumberInput = ({ value, setValue }) => {
  return (
    <div className="flex mx-4 border-t border-b border-solid border-lime-300">
      <CounterBtn calcType="decrement" value={value} setValue={setValue} />
      <input
        name="numParagraphs"
        id="numParagraphs"
        className="text-white text-center bg-black w-12 xl:w-16 2xl:w-20 outline-none focus:outline-none "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <CounterBtn calcType="increment" value={value} setValue={setValue} />
    </div>
  );
};

export default NumberInput;
