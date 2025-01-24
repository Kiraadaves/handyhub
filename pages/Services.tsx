import React from "react";
import Image from "next/image";

const servicesData = [
  {
    title: "House Cleaning",
    description:
      "We provide thorough house cleaning services tailored to your needs.",
    image: "/cleaning.png",
    bgColor: "bg-teal-50",
  },
  {
    title: "Plumbing",
    description:
      "From leaky faucets to pipe installations, we’ve got you covered.",
    image: "/plumber.jpg",
    bgColor: "bg-[#ffffff]",
  },
  {
    title: "Electrical Works",
    description: "Wiring, lighting, and repairs done safely and efficiently.",
    image: "/electrician.png",
    bgColor: "bg-blue-50",
  },
  {
    title: "Shopping",
    description:
      "Reliable waste disposal solutions for your home and business.",
    image: "/shopping.png",
    bgColor: "bg-green-50",
  },
  {
    title: "Waste Disposal",
    description:
      "Reliable waste disposal solutions for your home and business.",
    image: "/waste.png",
    bgColor: "bg-violet-50",
  },
  {
    title: "Nannies",
    description:
      "Reliable waste disposal solutions for your home and business.",
    image: "/nanny.png",
    bgColor: "bg-orange-50",
  },
  {
    title: "Dry Cleaning",
    description:
      "Professional dry-cleaning services to keep your clothes fresh.",
    image: "/laundry.png",
    bgColor: "bg-indigo-50",
  },
];

const Services = () => {
  return (
    <div className="space-y-16">
      <div className="space-y-6">
        <h2 className="  font-extrabold text-center text-[#00d084]">
          Our Services
        </h2>
        <p className=" text-center text-[#0a4a32]">
          We offer a wide range of services to meet all your home repair and
          maintenance needs.
        </p>
      </div>
      <div className="space-y-16">
        {servicesData.map((service, index) => (
          <div
            key={service.title}
            className={`sticky top-20 ${service.bgColor} py-16 ${
              service.title === "Plumbing" ? "border shadow-md" : ""
            } `}
          >
            <div
              className={`container max-w-screen-xl mx-auto flex flex-col gap-8 items-center lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-64 lg:h-96 w-full lg:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              {/* Text */}
              <div className="space-y-4 text-center lg:text-left w-full lg:w-1/2">
                <h2 className="font-bold text-[#00d084] ">{service.title}</h2>
                <p className="text-[#0a4a32] ">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
