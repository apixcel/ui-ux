"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Projects",
    path: "/project-showcase",
  },
  {
    name: "Team",
    path: "/team",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const location = usePathname();

  return (
    <header className="py-3 lg:py-7 lg:px-6 bg-slate-800 text-white">
      <div className={`container mx-auto flex justify-between items-center`}>
        <Link href="/" className="text-xl font-bold">
          DesignSolutions
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-7">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.path}
                  className={`${link.path === location && "font-semibold"}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Dropdown />
      </div>
    </header>
  );
};

export default Header;
