import React from "react";

export const HomeScreen = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-[87%] mx-auto space-y-6 ">
        <h2 className="text-4xl  text-[#00D084] text-center font-extrabold text-primary">
          Welcome to HandyHub{" "}
          <span className="text-3xl text-[#0a4a32] font-semibold">
            - Your one-stop solution for all your handyman needs.
          </span>
        </h2>
      </div>
      <div className="bg-[#00d084] px-8 py-6 flex flex-col lg:flex-row">
        <ul className="list-disc list-inside space-y-2">
          <li>Professional and reliable service</li>
          <li>Wide range of home repair and maintenance solutions</li>
          <li>Experienced and skilled technicians</li>
          <li>Competitive pricing and transparent quotes</li>
        </ul>
      </div>
    </div>
  );
};
