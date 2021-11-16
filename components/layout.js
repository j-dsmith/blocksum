import Header from "./Header";
import HeroContent from "./hero-content";

import InputCard from "./input-card";

const Layout = ({ children }) => {
  return (
    <section
      id="landing-content"
      className="flex  h-screen bg-black box-border overflow-x-hidden relative md:justify-center md:w-screen"
    >
      <div className="flex flex-col justify-evenly items-center text-white h-5/6 w-screen px-6 mt-auto md:px-8">
        <Header />
        <HeroContent />
        <div className="border-b-2 border-b-solid border-b-lime-300 w-full md:w-4/5 lg:w-3/5" />
        <InputCard />
      </div>
      <main>{children}</main>
    </section>
  );
};

export default Layout;
