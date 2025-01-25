import React from "react";
import Image from "next/image";

const servicesData = [
  {
    title: "House Cleaning",
    description:
      "Our professional house cleaning service is designed to meet your needs, whether you require a one-time deep clean or regular upkeep. From kitchens to bedrooms, bathrooms to living spaces, our team ensures every nook and cranny of your home is spotless, leaving it fresh and inviting for you and your family.",
    image: "/cleaning.png",
    bgColor: "bg-teal-50",
  },
  {
    title: "Plumbing",
    description:
      "We provide comprehensive plumbing services, ranging from fixing leaky faucets and unclogging drains to full-scale pipe installations and repairs. Our experienced plumbers ensure efficient and long-lasting solutions, offering you peace of mind with every project, no matter how big or small.",
    image: "/plumber.jpg",
    bgColor: "bg-[#ffffff]",
  },
  {
    title: "Electrical Works",
    description:
      "Our electrical services cover a wide range of needs, including wiring, lighting installation, appliance repair, and troubleshooting electrical issues. With safety as our top priority, our certified electricians deliver reliable and efficient solutions for your home or office.",
    image: "/electrician.png",
    bgColor: "bg-blue-50",
  },
  {
    title: "Shopping",
    description:
      "Let us take the hassle out of shopping with our convenient and personalized services. Whether it’s groceries, essentials, or special items, we’ll handle the task for you with care and precision, saving you valuable time and energy.",
    image: "/shopping.png",
    bgColor: "bg-green-50",
  },
  {
    title: "Waste Disposal",
    description:
      "Our waste disposal services ensure your home or business stays clean and eco-friendly. We specialize in the safe removal and disposal of various types of waste, following environmentally responsible practices to reduce your carbon footprint and maintain a healthy environment.",
    image: "/waste.png",
    bgColor: "bg-violet-50",
  },
  {
    title: "Nannies",
    description:
      "Our nanny services connect you with experienced and trustworthy caregivers who are dedicated to providing exceptional care for your children. Whether you need part-time help or full-time assistance, our nannies prioritize safety, nurturing, and developmental activities tailored to your child’s needs.",
    image: "/nanny.png",
    bgColor: "bg-orange-50",
  },
  {
    title: "Dry Cleaning",
    description:
      "Our professional dry-cleaning service ensures your clothes are treated with the utmost care, removing stains, preserving fabric quality, and keeping your wardrobe looking its best. We offer timely pickup and delivery options for your convenience.",
    image: "/laundry.png",
    bgColor: "bg-indigo-50",
  },
];

const Services = () => {
  return (
    <section className="space-y-16">
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
              className={`container max-w-screen-xl px-6 sm:px-10 md:px-20 py-10 md:py-20 mx-auto flex flex-col gap-8 items-center lg:flex-row lg:gap-16 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-64 lg:h-96 w-full lg:w-1/2 ">
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
    </section>
  );
};

export default Services;
