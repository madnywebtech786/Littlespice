"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  ChevronDown,
  Menu as MenuIcon,
  X,
} from "lucide-react";

const navItems = [
  { name: "HOME", href: "#", active: true },
  { name: "ABOUT", href: "#" },
  {
    name: "MENU",
    href: "#",
    dropdown: [
      { name: "Menu Style 1", href: "#" },
      { name: "Menu Details", href: "#" },
    ],
  },

  { name: "CONTACT", href: "#" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        isSticky ? "shadow-md py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <h2 className="text-3xl text-primary-red">Little Spicy</h2>
          </Link>

          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-sm font-medium uppercase transition-colors hover:text-primary-red ${
                      item.active ? "text-primary-red" : "text-dark-text"
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </Link>
                  {item.dropdown && (
                    <ul className="absolute left-0 top-full mt-4 w-52 bg-white shadow-lg rounded-md py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.href}
                            className="block px-5 py-2 text-sm text-gray-text hover:bg-light-background hover:text-primary-red"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
          
            <Link href="#" className="hidden lg:block ml-4">
              <div
                className="bg-primary-red text-white font-semibold text-sm py-[14px] px-8 transition-all duration-300 hover:bg-dark-text"
                style={{
                  clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                }}
              >
                Order Now
              </div>
            </Link>
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-in fade-in-20 slide-in-from-top-4 duration-300">
          <nav className="py-4">
            <ul>
              {navItems.map((item) => (
                <li key={item.name} className="border-b border-gray-200">
                  <Link
                    href={item.href}
                    className="flex justify-between items-center px-6 py-3 text-sm font-medium uppercase hover:text-primary-red transition-colors"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="h-4 w-4" />}
                  </Link>
                  {/* Note: Mobile dropdowns would need separate state logic for expansion */}
                </li>
              ))}
            </ul>
            <div className="px-6 py-4">
              <Link href="#">
                <div
                  className="bg-primary-red text-white font-semibold text-sm py-[14px] px-8 w-full text-center"
                  style={{
                    clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                  }}
                >
                  Order Now
                </div>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
