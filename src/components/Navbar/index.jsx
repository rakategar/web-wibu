import Link from "next/link";
import { Input } from "postcss";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-palete-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4">
        <Link href="/" className="font-bold text-2xl md:mb-0 mb-4 text-center md:text-left">
          Web Wibu
        </Link>
        <InputSearch />
        <UserActionButton/>
      </div>
    </header>
  );
};

export default Navbar;
