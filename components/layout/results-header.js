import ScrollLinkBtn from "../ui/scroll-link-btn";

const ResultsHeader = ({ hiddenDesktop, hiddenMobile }) => {
  return (
    <div className="flex items-center justify-between w-screen py-6 px-8 -mx-8 md:-mx-32 md:px-32 xl:px-48 xl:-mx-48 2xl:px-64 2xl:-mx-64">
      <h2 className="font-black font-mono text-3xl xl:text-4xl">Blocksum(s)</h2>
      <ScrollLinkBtn
        href="#footer"
        scrollDirection="bottom"
        hiddenMobile={hiddenMobile}
        hiddenDesktop={hiddenDesktop}
      />
    </div>
  );
};

export default ResultsHeader;
