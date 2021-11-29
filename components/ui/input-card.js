import { useContext } from 'react';
import Link from 'next/link';
import ResultsContext from '../../store/results-context';
import generateBlocks from '../../helpers/generate-text';
import NumberInput from './number-input';

const InputCard = ({ value, setValue, toggleResults }) => {
  // Get results context -> empty array and setter
  const resultsCtx = useContext(ResultsContext);
  const { setResultsParagraphs } = resultsCtx;

  const handleClick = () => {
    // Generate random text blocks and set resultsParagraphs context to array of these blocks
    setResultsParagraphs([...generateBlocks(value)]);
    // Toggle results to true -> triggers showing results on home page
    toggleResults(true);
  };

  return (
    <div className="w-screen h-28 mb-8 flex flex-col justify-between items-center px-8 md:w-4/5 md:h-32 lg:w-4/5 xl:h-36 2xl:h-40">
      <div className="flex text-md font-mono xs:text-lg md:text-2xl xl:text-3xl 2xl:text-4xl">
        Generate <NumberInput value={value} setValue={setValue} /> block(s)
      </div>
      <Link href="#results">
        <button
          type="submit"
          className="w-full py-2 font-mono text-black text-lg font-bold bg-gradient-to-tr from-lime-400 via-lime-300 to-yellow-300 hover:opacity-80 transition-opacity md:w-4/5 md:py-3 lg:w-2/5 2xl:py-4 2xl:text-2xl 2xl:w-1/3"
          onClick={handleClick}
        >
          Go
        </button>
      </Link>
    </div>
  );
};

export default InputCard;
