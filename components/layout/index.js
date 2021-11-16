import Header from "./main-header";
import HeroContent from "../hero/hero-content";
import InputCard from "../ui/input-card";

const Layout = ({ children }) => {
  return (
    <section className="flex flex-col h-content bg-black box-border overflow-x-hidden relative md:justify-center md:w-screen">
      <div
        id="landing-content"
        className="flex flex-col justify-evenly items-center text-white h-screen w-screen px-6 mt-auto md:px-8"
      >
        <Header />
        <HeroContent />
        <div className="border-b-2 border-b-solid border-b-lime-300 w-full my-8 md:w-4/5 lg:w-3/5" />
        <InputCard />
      </div>
      <main>{children}</main>
    </section>
  );
};

export default Layout;
