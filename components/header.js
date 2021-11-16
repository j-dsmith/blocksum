import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-transparent h-1/6 w-screen fixed top-0 left-0 flex items-center justify-center">
      <div className="h-[55px] w-[268px] relative">
        {/* <Image src="/blocksum.png" layout="fill" className="" /> */}
        <h1 className="font-black text-4xl text-center">BLOCKSUM</h1>
      </div>
    </header>
  );
};

export default Header;
