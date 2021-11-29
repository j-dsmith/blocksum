import { useRef, useContext } from 'react';
import ResultsContext from '../store/results-context';
import Footer from '../components/layout/footer';
import ResultsHeader from '../components/layout/results-header';

const BlocksumResults = ({ numParagraphs }) => {
  const resultsCtx = useContext(ResultsContext);
  const { resultsParagraphs, setResultsParagraphs } = resultsCtx;

  // Set ref for results section to be accessed by copy to clipboard function and links
  const resultsRef = useRef();

  // Click handler to copy all text to clipboard
  const handleClick = () => {
    const innerText = resultsRef.current.innerText;
    return navigator.clipboard.writeText(innerText);
  };

  // Set boolean prop for when to show scroll-to-bottom button in results header
  const hidden = resultsParagraphs.length < 8 ? true : false;

  // Render results paragraphs
  const renderResultsBlocks = () => (
    <div className="mb-8" ref={resultsRef}>
      {resultsParagraphs.map((paragraph, idx) => (
        <p key={idx} className="mb-8">
          {paragraph}
        </p>
      ))}
    </div>
  );

  return (
    <section
      id="results"
      className="flex flex-col h-content bg-white py-6 px-8 md:px-32  lg:text-lg xl:px-48 xl:text-2xl 2xl:px-64 2xl:text-2xl"
    >
      <ResultsHeader hidden={hidden} />
      {renderResultsBlocks()}
      <Footer handleClick={handleClick} />
    </section>
  );
};

export default BlocksumResults;
