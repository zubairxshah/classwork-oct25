import Link from "next/link";
import React from "react";

export default function Navigation() {
  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "API & useEffect",
      href: "/setstateapi",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  return (
    <nav className="bg-[#7dbe83] rounded-t-md border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="border-solid">
                <h1 className="text-2xl font-semibold text-shadow-xl text-white text-shadow-xl text-background">
                  MZS CodeWorks
                </h1>
              </Link>
            </div>
          </div>
          <div className="hidden md:block font-bold">
            <div className="ml-4 flex items-center">
              {navItems.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <div className="h-6 border-l-2 border-white mx-2"></div>
                  )}
                  <Link
                    className="hover:first-letter:text-white hover:underline px-2 text-black"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
