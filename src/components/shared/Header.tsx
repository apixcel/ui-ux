"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";

const Header = () => {
  const location = usePathname();

  return (
    <header className="py-3 lg:py-7 lg:px-6">
      <div
        className={`${
          location === "/" && "text-white"
        } container mx-auto flex justify-between items-center`}
      >
        <a href="/" className="text-xl font-bold">
          DesignSolutions
        </a>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Dropdown />
      </div>
    </header>
  );
};

export default Header;
