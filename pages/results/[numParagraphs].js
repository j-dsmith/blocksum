import { useRef } from "react";
import generateBlocks from "../../helpers/generate-text";
import Footer from "../../components/layout/footer";
import ResultsHeader from "../../components/layout/results-header";

const BlocksumResults = ({ paragraphs }) => {
  //* Set ref for results section to be accessed by copy to clipboard function and links
  const resultsRef = useRef();
  //* Click handler for copy button to copy all text to clipboard
  const handleClick = (text) => {
    return navigator.clipboard.writeText(text);
  };
  //* Set boolean prop for when to show scroll-to-bottom button in results header
  const hidden = paragraphs.length < 8 ? true : false;

  return (
    <section
      id="results"
      className="flex flex-col h-content bg-white py-6 px-8 md:px-32  lg:text-lg xl:px-48 xl:text-2xl 2xl:px-64 2xl:text-2xl"
    >
      <ResultsHeader hidden={hidden} />
      <div className="mb-8" ref={resultsRef}>
        {paragraphs.map((paragraph, idx) => (
          <p key={idx} className="mb-8">
            {paragraph}
          </p>
        ))}
      </div>

      <Footer>
        <button
          onClick={() => handleClick(resultsRef.current.innerText)}
          className="flex items-center justify-between w-1/2 xs:w-1/3 max-w-[8rem] h-12 px-3 border border-black border-solid text-black font-mono text-lg font-bold hover:bg-black hover:text-white transition-colors"
        >
          Copy
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
            />
          </svg>
        </button>
      </Footer>
    </section>
  );
};

export default BlocksumResults;

export async function getServerSideProps({ params }) {
  const { numParagraphs } = params;
  const paragraphs = generateBlocks(numParagraphs);

  return {
    props: { paragraphs },
  };
}
