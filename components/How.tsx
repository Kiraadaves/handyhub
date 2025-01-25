import React, { useState } from "react";
import {
  FaUserPlus,
  FaSearch,
  FaCalendarAlt,
  FaClipboardList,
  FaBriefcase,
  FaStar,
} from "react-icons/fa";

const userSteps = [
  {
    title: "Create an Account",
    description: "Sign up for free and set up your profile in minutes.",
    icon: <FaUserPlus className="text-4xl text-[#00d084]" />,
  },
  {
    title: "Find a Service",
    description: "Browse through our wide range of professional services.",
    icon: <FaSearch className="text-4xl text-[#00d084]" />,
  },
  {
    title: "Book a Service",
    description: "Choose a convenient time and book your service with ease.",
    icon: <FaCalendarAlt className="text-4xl text-[#00d084]" />,
  },
];

const providerSteps = [
  {
    title: "Register as a Provider",
    description: "Join our community of skilled professionals.",
    icon: <FaClipboardList className="text-4xl text-[#00d084]" />,
  },
  {
    title: "List Your Services",
    description: "Showcase your skills and set your availability.",
    icon: <FaBriefcase className="text-4xl text-[#00d084]" />,
  },
  {
    title: "Grow Your Business",
    description: "Connect with clients and build your reputation.",
    icon: <FaStar className="text-4xl text-[#00d084]" />,
  },
];

const How = () => {
  const [activeTab, setActiveTab] = useState("users");
  return (
    <section className="space-y-16 ">
      <div className="space-y-10">
        <h2 className="  font-extrabold text-center text-[#00d084]">
          How it works
        </h2>
        <p className=" text-center text-[#0a4a32] max-w-3xl mx-auto">
          Whether you&apos;re a user looking for services or a service provider
          looking for clients, we&apos;ve made it easy for everyone to connect
          and succeed.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-wrap mb-8 bg-gray-200 rounded-lg p-1">
          <button
            className={`flex-1 py-3 px-4 text-center rounded-md ${
              activeTab === "users"
                ? "bg-white text-[#00d084] font-bold shadow"
                : "bg-transparent text-[#0a4a32]"
            } transition-colors duration-300`}
            onClick={() => setActiveTab("users")}
          >
            For Users
          </button>
          <button
            className={`flex-1 py-3 px-4 text-center rounded-md ${
              activeTab === "providers"
                ? "bg-white text-[#00d084] font-bold shadow"
                : "bg-transparent text-[#0a4a32]"
            } transition-colors duration-300`}
            onClick={() => setActiveTab("providers")}
          >
            For Service Providers
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {(activeTab === "users" ? userSteps : providerSteps).map(
            (step, index) => (
              <div
                key={index}
                className="bg-white border px-6 py-16 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h5 className=" font-semibold mb-2 text-center text-[#00d084]">
                  {step.title}
                </h5>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default How;
