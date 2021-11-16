import { useRef } from "react";
import Link from "next/link";
import generateBlocks from "../../helpers/generate-text";

const BlocksumResults = ({ paragraphs }) => {
  const resultsRef = useRef();

  return (
    <section id="results" className="h-content bg-white p-6 flex flex-col">
      <div className="" ref={resultsRef}>
        {paragraphs.map((paragraph, idx) => (
          <p key={idx} className="mb-8">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex items-center justify-between w-full">
        <button
          onClick={() =>
            navigator.clipboard.writeText(resultsRef.current.innerText)
          }
          className="flex items-center justify-between w-1/3 h-12 px-2 border border-black border-solid text-black font-mono text-lg font-bold hover:bg-black hover:text-white transition-colors"
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
        <Link href="#landing">
          <button className="flex justify-center items-center h-12 w-12 bg-black text-lime-300 hover:opacity-80 transition-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </Link>
      </div>
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
