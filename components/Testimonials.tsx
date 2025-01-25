"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sam Johnson",
    role: "Homeowner",
    image: "/man2.jpg",
    quote:
      "HandyHub made finding a reliable plumber so easy! The service was quick, professional, and exactly what I needed.",
  },
  {
    name: "Mike Thompson",
    role: "Electrician",
    image: "/man1.jpg",
    quote:
      "As a service provider, HandyHub has been a game-changer. It's helped me grow my business and connect with new clients effortlessly.",
  },
  {
    name: "Emily Chen",
    role: "Busy Professional",
    image: "/woman.jpg",
    quote:
      "I love how convenient HandyHub is. Whether I need house cleaning or a quick repair, I can always find quality service providers.",
  },
  {
    name: "David Rodriguez",
    role: "Landscaper",
    image: "/man3.jpg",
    quote:
      "The platform is user-friendly and has significantly increased my client base. I'm grateful for the opportunities HandyHub has provided.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, nextTestimonial]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-[#00d084] mb-12">
          What Our Users Say
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-center">
              <FaQuoteLeft className="text-4xl text-[#00d084] mb-4" />
              <p className="text-lg text-gray-700 mb-6">
                {testimonials[currentIndex].quote}
              </p>
              <Image
                width={200}
                height={200}
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="mb-14 object-cover rounded-full h-36 w-36 shadow-xl"
              />
              <h3 className="text-xl font-semibold text-[#00d084]">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-400">{testimonials[currentIndex].role}</p>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-[#00d084] text-white hover:bg-[#00b873] transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-[#00d084] text-white hover:bg-[#00b873] transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
