import generateBlocks from "../helpers/generate-text";

const BlocksumResults = ({ numBlocks }) => {
  const paragraphs = generateBlocks(numBlocks);
  if (numBlocks > 0) {
    return (
      <section className="h-content bg-white p-8">
        {paragraphs.map((paragraph, idx) => (
          <p key={idx} className="mb-8">
            {paragraph}
          </p>
        ))}
      </section>
    );
  }
  return <div />;
};

export default BlocksumResults;
