import React from "react";
import Image from "next/image";
import Link from "next/link";
import { icons } from "@libs/Icons";

const Header = () => {
  return (
    <header className="bg-background shadow-md relative">
      {/* Top section (Navbar 1) */}
      <div className="bg-background px-6 py-6 flex justify-between items-center mx-20">
        {/* Logo on the left */}
        <div className="absolute top-4 flex items-center">
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
            <button className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-primary p-1 rounded-full">
              <div className="border border-white p-2 rounded-full text-white">
                {icons.Searchbtn}
              </div>
            </button>
          </div>
        </div>

        {/* Language and Login */}
        <div className="flex items-center space-x-6 font-primary ">
          {/* Dropdown for Netherlands */}
          <div className="relative group">
            <div className="text-[#013e12] font-medium cursor-pointer inline-flex items-center">
              <div className="font-light">Netherlands  </div>

              <div className="text-3xl text-secondary">{icons.DownArrow}</div>
            </div>
            {/* Dropdown Menu */}
            <div className="absolute left-0 z-50 mt-2 hidden  group-hover:block bg-white   rounded-sm ">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer  ">Canada</li>
                <hr/>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer ">Bangladesh</li>
                <hr/>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer ">USA</li>
              </ul>
            </div>
          </div>

          {/* Login Button */}
          <button className="inline-flex items-center space-x-1">
            <div className="text-xl text-secondary">
            {icons.Profile}
            </div>
            <div className="text-[#004c1f] font-light">Inloggen</div>
          </button>
          <div className="text-xl text-secondary">{icons.Cart}</div>
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
