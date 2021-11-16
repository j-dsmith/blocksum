import { useState } from "react";
import Link from "next/link";
import NumberInput from "./number-input";

const InputCard = ({}) => {
  const [value, setValue] = useState(1);

  return (
    <div className="w-screen h-28 flex flex-col justify-between items-center px-8 md:w-4/5 md:h-32 lg:w-3/5 xl:h-36 2xl:h-40">
      <div className="flex text-lg font-mono xs:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
        Verify <NumberInput value={value} setValue={setValue} /> blocks
      </div>
      <Link href={`/results/${value}#results`}>
        <button
          type="submit"
          className="w-full py-2 font-mono text-black text-lg font-bold bg-gradient-to-tr from-lime-400 via-lime-300 to-yellow-300 hover:opacity-80 transition-opacity md:w-4/5 md:py-3 lg:w-3/5 2xl:py-4 2xl:text-xl 2xl:w-2/5"
        >
          Go
        </button>
      </Link>
    </div>
  );
};

export default InputCard;
