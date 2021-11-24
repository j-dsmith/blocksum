import Image from 'next/image';

const Header = () => {
  return (
    <header
      id="landing"
      className="w-screen h-1/6 bg-black flex items-center justify-center"
    >
      <div className="w-2/3 md:w-1/3 lg:w-1/4">
        <Image
          src="/logo.png"
          height="409"
          width="2445"
          className=""
          priority="true"
          loading="eager"
        />
      </div>
    </header>
  );
};

export default Header;
