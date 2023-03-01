import Button from "./Button";
import Nav from "./Nav";
import LogoNonton from "../public/logo-nonton.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="py-10 flex items-center">
      <div className="w-2/12">
        <Image src={LogoNonton} alt="logo-nonton-kuy" />
      </div>
      <div className="w-6/12 flex">
        <Nav />
      </div>
      <div className="w-4/12 flex justify-between items-center">
        <input
          type="text"
          name="Search"
          className="border-b border-white text-white bg-transparent w-[274px] bg-search focus:outline-none"
          placeholder="Cari"
        />
        <Button variant="red-only">Langganan</Button>
        <Button variant="outline-white">Masuk</Button>
      </div>
    </nav>
  );
};

export default Navbar;
