import React from "react";

export const HomeScreen = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-primary">Welcome to HandyHub</h2>
      <p className="text-lg">
        Your one-stop solution for all your handyman needs.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Professional and reliable service</li>
        <li>Wide range of home repair and maintenance solutions</li>
        <li>Experienced and skilled technicians</li>
        <li>Competitive pricing and transparent quotes</li>
      </ul>
    </div>
  );
};
