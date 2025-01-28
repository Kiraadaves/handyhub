"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

interface NavItem {
  label: string;
  href: string;
}
interface NavProps {
  navItems: NavItem[];
  onNavItemClick: (label: string) => void;
  activeTab: string;
}

const LandingNavbar = ({ navItems, onNavItemClick, activeTab }: NavProps) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMdScreen(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMdScreen(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleOpenMobileNav = () => {
    //isMdScreen && setMobileNav(true);
  };

  const handleCloseMobileNav = () => {
    setMobileNav(false);
  };

  return (
    <div className="shadow-md">
      <nav className="px-8 relative">
        <div className="flex  justify-between py-4 items-center">
          <div>
            <h1 className="animate__animated animate__slideInLeft  text-[1.5rem] border rounded-full p-4 shadow-lg text-[#ffffff] bg-[#00D084] font-bold">
              <Link href={"/"}>HandyHub</Link>
            </h1>
          </div>
          {isMdScreen && !mobileNav && (
            <div className={``}>
              <button onClick={handleOpenMobileNav} className="text-[#00D084]">
                <GiHamburgerMenu className="w-12 h-7" />
              </button>
            </div>
          )}

          <div className="hidden lg:flex gap-6 items-center animate__animated animate__slideInRight">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => onNavItemClick(item.label)}
                className={`${
                  item.label === "Get Started"
                    ? "border px-4 py-3 rounded-lg font-bold bg-[#ffffff] border-[#00D084] hover:bg-[#00D084] text-[#00D084] hover:text-[#ffffff] transition-all duration-500 ease-in"
                    : "hover-underline nav-item pb-[2px]"
                } ${
                  activeTab === item.label
                    ? item.label === "Get Started"
                      ? "active:bg-[#00D084] active:text-[#ffffff] focus:bg-[#00D084] focus:text-[#ffffff]"
                      : "active font-bold text-[#00d083]"
                    : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {mobileNav && isMdScreen && (
          <div className="animate__animated animate__slideInRight w-[45%] absolute z-50 top-4 right-0 bg-[#ffffff] shadow-lg pl-4 pb-4 rounded-lg">
            <div className={`flex justify-end`}>
              <button onClick={handleCloseMobileNav} className="text-[#00D084]">
                <IoMdClose className="w-12 h-9" />
              </button>
            </div>
            {navItems.map((item) => (
              <button
                key={item.href}
                className={`${
                  item.label === "Get Started"
                    ? "border px-4 py-3 rounded-lg font-bold bg-[#ffffff] border-[#00D084] hover:bg-[#00D084] text-[#00D084] hover:text-[#ffffff] transition-all duration-500 ease-in"
                    : "hover-underline nav-item pb-[2px]"
                } ${
                  activeTab === item.label
                    ? item.label === "Get Started"
                      ? "bg-[#00D084] text-[#ffffff]"
                      : "active font-bold text-[#00d083]"
                    : ""
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="hover:decoration hover:underline underline-offset-2 px-4 py-3 font-bold  text-[#ef6a5bf5] ">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default LandingNavbar;
