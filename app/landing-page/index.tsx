"use client";

import About from "@/pages/About";
import Contact from "@/pages/Contact";
import { HomeScreen } from "@/pages/HomeScreen";
import Services from "@/pages/Services";
import { useState } from "react";
import LandingNavbar from "./navbar";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Get Started", href: "/servicess" },
];

const LandingPage = () => {
  const [activeComponent, setActiveComponent] = useState("Home");
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Home":
        return <HomeScreen />;
      case "About":
        return <About />;
      case "Services":
        return <Services />;
      case "Contact":
        return <Contact />;
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
      <main className="w-[87%] mx-auto flex flex-col gap-20">
        {renderActiveComponent()}
      </main>
    </div>
  );
};

export default LandingPage;
