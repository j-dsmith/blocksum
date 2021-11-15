import generateBlocks from "../../helpers/generate-text";

const BlocksumResults = ({ paragraphs }) => {
  return (
    <section id="results" className="h-content bg-white p-8">
      {paragraphs.map((paragraph, idx) => (
        <p key={idx} className="mb-8">
          {paragraph}
        </p>
      ))}
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
