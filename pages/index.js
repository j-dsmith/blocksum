import { useState } from 'react';
import Header from '../components/layout/main-header';
import HeroContent from '../components/hero/hero-content';
import InputCard from '../components/ui/input-card';
import BlocksumResults from '../components/blocksum-results';

export default function Home() {
  const [value, setValue] = useState(1);
  const [showResults, toggleResults] = useState(false);

  return (
    <main className="h-screen w-screen p-0 m-0">
      <section className="flex flex-col h-screen bg-black box-border overflow-hidden relative md:justify-center md:w-screen">
        <Header />
        <div className="flex flex-col justify-evenly items-center text-white h-5/6 w-screen px-6 mt-auto md:px-8">
          <HeroContent />
          <div className="border-b-2 border-b-solid border-b-lime-300 w-full my-8 md:w-4/5 lg:w-3/5" />
          <InputCard
            value={value}
            setValue={setValue}
            showResults={showResults}
            toggleResults={toggleResults}
          />
        </div>
      </section>
      {showResults && <BlocksumResults numParagraphs={value} />}
    </main>
  );
}
