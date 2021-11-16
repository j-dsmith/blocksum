import Link from "next/link";

const ScrollLinkBtn = ({
  href,
  scrollDirection,
  hiddenMobile,
  hiddenDesktop,
}) => {
  if (hiddenMobile || hiddenDesktop) {
    return <div />;
  }
  return (
    <Link href={href}>
      {scrollDirection === "top" ? (
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
      ) : (
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      )}
    </Link>
  );
};

export default ScrollLinkBtn;
