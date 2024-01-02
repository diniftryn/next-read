import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="border-b max-w-4xl mx-auto py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-base font-medium px-5">
          Read | Build Knowledge
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
