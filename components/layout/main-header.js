import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-transparent w-screen flex items-start justify-center">
      <div className="h-[55px] w-[268px] relative">
        {/* <Image src="/blocksum.png" layout="fill" className="" /> */}
        <h1 className="font-black text-4xl text-center">BLOCKSUM</h1>
      </div>
    </header>
  );
};

export default Header;
