import ScrollLinkBtn from "../ui/scroll-link-btn";

const Footer = ({ children }) => {
  return (
    <div
      id="footer"
      className="flex items-center justify-between w-screen -mb-6 -mx-8 px-8 py-6 md:px-32 md:-mx-32 xl:px-48 xl:-mx-48 2xl:px-64 2xl:-mx-64 bg-gradient-to-tr from-lime-400 via-lime-300 to-yellow-300"
    >
      {children}
      <ScrollLinkBtn href="#landing" scrollDirection="top" />
    </div>
  );
};

export default Footer;
