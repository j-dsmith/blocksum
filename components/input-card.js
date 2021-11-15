import Link from "next/link";
import NumberInput from "./number-input";

const InputCard = ({ value, setValue, setNumBlocks }) => {
  const handleSubmit = () => {
    setNumBlocks(value);
  };

  return (
    <div className="w-full h-24 flex flex-col justify-between">
      <div className="flex text-xl font-mono">
        Verify <NumberInput value={value} setValue={setValue} /> blocks
      </div>
      <Link href="#results">
        <button
          type="submit"
          className="w-1/3 px-1 py-2 border border-solid border-lime-300 font-mono text-black text-lg font-bold bg-gradient-to-tr  from-lime-300 to-yellow-300"
          onClick={handleSubmit}
        >
          Go
        </button>
      </Link>
    </div>
  );
};

export default InputCard;
