import Header from "./Header";
import HeroContent from "./hero-content";
import InputCard from "./input-card";

const Layout = ({ children }) => {
  return (
    <section className="h-screen bg-black">
      <div className="flex flex-col justify-evenly items-start text-white  h-full w-content mx-6">
        <Header />
        <HeroContent />
        <div className="border-b-2 border-b-solid border-b-lime-300 w-2/3" />
        <InputCard />
      </div>
      <main>{children}</main>
    </section>
  );
};

export default Layout;
