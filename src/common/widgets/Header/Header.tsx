import React from "react";
import Image from "next/image";
import Link from "next/link";
import { icons } from "@libs/Icons";

const Header = () => {
  return (
    <header className="bg-background shadow-md relative">
      {/* Top section (Navbar 1) */}
      <div className="bg-background px-6 py-6 flex justify-between items-center mx-12">
        {/* Logo on the left */}
        <div className=" absolute top-3 flex items-center ">
          <Image
            src="/Main Logo.png"
            alt="Jade Reforestry Logo"
            width={310}
            height={100}
            className="z-20"
          />
        </div>

        {/* Search Bar in the center */}
        <div className="flex-grow flex justify-center">
          <div className="relative w-2/4">
            <input
              type="text"
              placeholder="Zoeken..."
              className="w-full py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-primary p-1 rounded-full"
            >
             <div className="border border-white p-2 rounded-full text-white"> {icons.Searchbtn}</div>
            </button>
          </div>
        </div>


        {/* Language and Login */}
        <div className="flex items-center space-x-6">
          <div className="text-[#013e12] font-medium cursor-pointer">Netherlands</div>
          <button className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-[#004c1f]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.7 12.35A7.4 7.4 0 017.3 12.35M4.23 18.21a7.4 7.4 0 0115.54 0"
              />
            </svg>
            <span className="text-[#004c1f] font-medium">Inloggen</span>
          </button>
        </div>
      </div>

      {/* Bottom section (Navbar 2) */}
      <div className="bg-green-950 relative z-10">
        {/* Navigation Bar */}
        <nav>
          <ul className="flex justify-end mx-28 space-x-6 py-5 font-primary font-light text-white">
            {[
              { label: "Home", href: "/" },
              { label: "Over Ons", href: "/repair-services" },
              { label: "Agroforestry", href: "/about" },
              { label: "De Kwekerij", href: "/blog" },
              { label: "Projecten & Fotso's", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((menuItem) => (
              <li key={menuItem.label}>
                <Link href={menuItem.href}>
                  <div className="hover:underline">{menuItem.label}</div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
