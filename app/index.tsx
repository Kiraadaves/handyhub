"use client";

import Navbar from "@/components/Navbar";

const navItems = [
    { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/servicess" },
  { label: "Contact", href: "/contact" },
]


const HomePage = () => {
  return (
    <div className="flex flex-col gap-16">
      <Navbar navItems={navItems}  />
      <main className="w-[87%] mx-auto flex flex-col gap-20">
        <h2>main</h2>
      </main>
    </div>
  );
};

export default HomePage;