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
}
const formFields = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "message", label: "Message", type: "textarea" },
];

const Navbar = ({ navItems }: NavProps) => {
  const [openForm, setOpenForm] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMdScreen(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMdScreen(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  const handleOpenForm = () => {
    setOpenForm(!openForm);
    setMobileNav(false);
  };

  const handleOpenMobileNav = () => {
    //isMdScreen && setMobileNav(true);
  };

  const handleCloseMobileNav = () => {
    setMobileNav(false);
  };

  return (
    <div className="shadow-md">
      <nav className="w-[90%] mx-auto relative">
        <div className="flex  justify-between py-4 items-center">
          <div>
            <h1 className="animate__animated animate__slideInLeft  text-[1.5rem] border rounded-full p-2 shadow-lg text-[#ffffff] bg-[#00D084] font-bold">
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
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <p className="border px-4 py-3 rounded-lg font-bold bg-[#ffffff] border-[#00D084] hover:bg-[#00D084] text-[#00D084] hover:text-[#ffffff] transition-all duration-500 ease-in">
              Get Started
            </p>
          </div>
        </div>
        {openForm && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
            <div className="animate__animated animate__fadeInDownBig  bg-white shadow-xl rounded-lg p-8 w-full max-w-md m-4 flex flex-col gap-4">
              <div className="flex justify-end mb-4">
                <button
                  onClick={handleOpenForm}
                  className="p-2 rounded-full bg-[#00D084] text-white hover:bg-opacity-80 transition-colors"
                >
                  <IoMdClose className="h-6 w-6" />
                </button>
              </div>
              <form className="space-y-6 ">
                <h2 className="text-2xl lg:text-4xl font-bold text-[#00D084] mb-4">
                  Contact Us
                </h2>
                {formFields.map((field) => (
                  <div key={field.id} className="flex flex-col">
                    <label
                      htmlFor={field.id}
                      className="mb-1 font-medium text-blue-950 "
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        name={field.id}
                        rows={4}
                        className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#ef6a5bf5] bg-[#fcf0eff5]"
                      />
                    ) : (
                      <input
                        id={field.id}
                        type={field.type}
                        name={field.id}
                        className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#ef6a5bf5] bg-[#fcf0eff5]"
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full  bg-[#00D084] text-white py-2 rounded-md hover:border border-[#fcf0eff5] hover:bg-[#ffffff] hover:shadow-lg hover:text-[#ef6a5bf5]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
        {mobileNav && isMdScreen && (
          <div className="animate__animated animate__slideInRight w-[45%] absolute z-50 top-4 right-0 bg-[#ffffff] shadow-lg pl-4 pb-4 rounded-lg">
            <div className={`flex justify-end`}>
              <button onClick={handleCloseMobileNav} className="text-[#00D084]">
                <IoMdClose className="w-12 h-9" />
              </button>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#00D084] hover:decoration hover:underline underline-offset-2 font-bold"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleOpenForm}
              className="hover:decoration hover:underline underline-offset-2 px-4 py-3 font-bold  text-[#ef6a5bf5] "
            >
              Say Hello
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
