"use client";

import About from "@/pages/About";
//import Contact from "@/pages/Contact";
import { HomeScreen } from "@/pages/HomeScreen";
//import Services from "@/pages/Services";
import { useState } from "react";
import LandingNavbar from "./navbar";

const navItems = [
  { label: "Welcome", href: "/welcome" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

const LandingPage = () => {
  const [activeComponent, setActiveComponent] = useState("Home");
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Welcome":
        return <HomeScreen />;
      case "About":
        return <About />;
      default:
        return <HomeScreen />;
    }
  };

  const handleNavItemClick = (label: string) => {
    setActiveComponent(label);
  };
  return (
    <div className="flex flex-col gap-16">
      <LandingNavbar
        navItems={navItems}
        onNavItemClick={handleNavItemClick}
        activeTab={activeComponent}
      />
      <main className=" flex flex-col gap-20">
        {renderActiveComponent()}
      </main>
    </div>
  );
};

export default LandingPage;
