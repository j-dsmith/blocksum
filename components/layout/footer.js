import ScrollLinkBtn from '../ui/scroll-link-btn';

const Footer = ({ handleClick }) => {
  return (
    <div
      id="footer"
      className="flex items-center justify-between w-screen -mb-6 -mx-8 px-8 py-6 md:px-32 md:-mx-32 xl:px-48 xl:-mx-48 2xl:px-64 2xl:-mx-64 bg-gradient-to-tr from-lime-400 via-lime-300 to-yellow-300"
    >
      <button
        onClick={() => handleClick()}
        className="flex items-center justify-between w-1/2 xs:w-1/3 max-w-[8rem] h-10 xs:h-12 px-3 border border-black border-solid text-black font-mono text-lg font-bold hover:bg-black hover:text-white transition-colors"
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
      <ScrollLinkBtn href="#landing" scrollDirection="top" />
    </div>
  );
};

export default Footer;
