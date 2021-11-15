import { Fragment, useState } from "react";
import BlocksumResults from "../components/blocksum-results";
import Header from "../components/Header";
import HeroContent from "../components/hero-content";
import InputCard from "../components/input-card";

export default function Home() {
  const [value, setValue] = useState(1);
  const [numBlocks, setNumBlocks] = useState(0);

  return (
    <Fragment>
      <section className="h-screen bg-black">
        <div className="flex flex-col justify-evenly items-start text-white  h-full w-content ml-5 mr-8">
          <Header />
          <HeroContent />
          <div className="border-b-2 border-b-solid border-b-lime-300 w-2/3" />
          <InputCard
            value={value}
            setValue={setValue}
            setNumBlocks={setNumBlocks}
          />
        </div>
      </section>

      <BlocksumResults numBlocks={numBlocks} />
    </Fragment>
  );
}
