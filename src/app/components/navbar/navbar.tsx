"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setActiveDropdown(index), 100));
  };

  const handleMouseLeave = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setActiveDropdown(null), 100));
  };

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Not Found", href: "/anypage" },
    {
      label: "Class Work ↓",
      href: "#",
      dropdown: [
        { label: "useEffect & API", href: "/setstateapi" },
        { label: "Song List / Todo", href: "/todoapp" },
        { label: "Div Artwork", href: "/lesson" },
      ],
    },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-[#90cc75] rounded-t-md border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold">
              MZS CodeWorks
            </Link>
          </div>
          <div className="hidden md:block font-bold">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown ? (
                    <>
                      <button className="text-white hover:bg-black hover:text-[#90cc75] px-3 py-2 rounded-md text-md font-medium">
                        {item.label}
                      </button>
                      {activeDropdown === index && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            {item.dropdown.map(
                              (dropdownItem, dropdownIndex) => (
                                <Link
                                  key={dropdownIndex}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-black hover:black hover:text-[#90cc75]"
                                  role="menuitem"
                                >
                                  {dropdownItem.label}
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white hover:bg-black hover:text-[#90cc75] px-3 py-2 rounded-md text-md font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
