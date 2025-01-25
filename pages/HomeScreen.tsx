"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Services from "./Services";
import How from "@/components/How";
import WhyChooseUs from "@/components/WhyChooseUS";
import Testimonials from "@/components/Testimonials";

const listItems = [
  "Professional and reliable service",
  "Wide range of home repair and maintenance solutions",
  "Experienced and skilled technicians",
  "Competitive pricing and transparent quotes",
];

const sliderImages = [
  "/p1.jpg",
  "/p2.jpg",
  "/p3.jpg",
  "/p4.jpg",
  "/p5.jpg",
  "/p6.jpg",
  "/p7.jpg",
];

export const HomeScreen = () => {
  const [activeImg, setActiveImg] = useState(0);

  const clickNext = useCallback(() => {
    setActiveImg((prevActiveImg) =>
      prevActiveImg === sliderImages.length - 1 ? 0 : prevActiveImg + 1
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImg, clickNext]);

  return (
    <section className="flex flex-col gap-20">
      <div className=" space-y-10 ">
        <h1 className="  text-[#00D084] text-center font-extrabold text-primary">
          Welcome to HandyHub{" "}
          <span className=" text-[#0a4a32] font-semibold">
            - Your one-stop solution for all your handyman needs.
          </span>
        </h1>
      </div>
      <div className=" px-8 py-6 flex flex-col lg:flex-row items-center">
        <ul className="space-y-2   mb-6 lg:mb-0 lg:w-1/2">
          {listItems.map((items, index) => (
            <li
              key={index}
              className="text-[#0a4a32] flex items-baseline gap-2"
            >
              <span className="text-[#00d084]">
                <AiFillCheckCircle className="w-5 h-5" />
              </span>{" "}
              {items}
            </li>
          ))}
        </ul>
        <div className="relative w-full lg:w-1/2 aspect-video">
          {sliderImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={img}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover rounded-lg transition-opacity duration-500 ${
                index === activeImg ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
      <Services />
      <How />
      <WhyChooseUs />
      <Testimonials />
    </section>
  );
};
