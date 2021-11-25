const HeroContent = () => {
  return (
    <div
      className="text-4xl font-bold font-sans w-screen px-8 text-center xs:text-5xl md:text-6xl md:w-4/5 lg:w-4/6 xl:w-3/5 2xl:text-8xl"
      style={{
        textShadow:
          'rgba(192,219,255,.48) 0 0 80px,rgba(65,120,255,.24) 0 0 32px',
      }}
    >
      <p className="relative z-10">Random text generator for your next</p>{' '}
      <span
        className="bg-clip-text bg-gradient-to-tr text-black from-lime-300 to-yellow-300 relative z-0"
        style={{ WebkitTextFillColor: 'transparent', textShadow: 'none' }}
      >
        blockchain
      </span>{' '}
      <p className="inline">project.</p>
    </div>
  );
};

export default HeroContent;
