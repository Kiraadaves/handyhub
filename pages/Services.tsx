import React from "react";

const Services = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-primary">Our Services</h2>
      <p className="text-lg">
        We offer a wide range of services to meet all your home repair and
        maintenance needs.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="bg-secondary p-4 rounded-lg">
          <h3 className="font-semibold text-lg">Plumbing</h3>
          <p>
            From leaky faucets to pipe installations, we&apos;ve got you
            covered.
          </p>
        </li>
        <li className="bg-secondary p-4 rounded-lg">
          <h3 className="font-semibold text-lg">Electrical</h3>
          <p>
            Wiring, lighting, and electrical repairs done safely and
            efficiently.
          </p>
        </li>
        <li className="bg-secondary p-4 rounded-lg">
          <h3 className="font-semibold text-lg">Carpentry</h3>
          <p>Custom woodwork, repairs, and installations for your home.</p>
        </li>
        <li className="bg-secondary p-4 rounded-lg">
          <h3 className="font-semibold text-lg">Painting</h3>
          <p>Interior and exterior painting to refresh your space.</p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
