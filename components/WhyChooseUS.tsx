import React from "react";
import { FaShieldAlt, FaThumbsUp, FaClock, FaUsers } from "react-icons/fa";

const reasons = [
  {
    icon: <FaShieldAlt className="text-4xl text-[#00d084] mb-4" />,
    title: "Verified Professionals",
    description:
      "All our service providers undergo thorough background checks and skill verifications.",
  },
  {
    icon: <FaThumbsUp className="text-4xl text-[#00d084] mb-4" />,
    title: "Quality Guaranteed",
    description:
      "We ensure high-quality service with our satisfaction guarantee and review system.",
  },
  {
    icon: <FaClock className="text-4xl text-[#00d084] mb-4" />,
    title: "Convenient Booking",
    description:
      "Book services at your preferred time with our easy-to-use scheduling system.",
  },
  {
    icon: <FaUsers className="text-4xl text-[#00d084] mb-4" />,
    title: "Wide Range of Services",
    description:
      "From home repairs to personal care, find all the services you need in one place.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-3xl font-extrabold text-[#00d084] mb-4">
            Why Choose HandyHub
          </h2>
          <p className="text-[#0a4a32] max-w-3xl mx-auto">
            We&apos;re committed to providing the best experience for both our
            customers and service providers. Here&apos;s what sets us apart:
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg text-center"
            >
              <div className="flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#0a4a32]">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block bg-[#00d084] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 hover:bg-[#00b873]"
          >
            Join HandyHub Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
