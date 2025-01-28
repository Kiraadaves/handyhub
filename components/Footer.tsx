import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#222222e4] text-[#ffffff] px-8 py-12 flex flex-col md:flex-row flex-wrap justify-between">
      <div>
        <h1 className="bg-[#ffffff] inline-block text-[1.5rem] border rounded-full p-4 shadow-md text-[#00D084] font-bold">
          HandyHub
        </h1>
        <p className="mt-2 text-base">
          Your trusted partner for all home repair and maintenance needs.
        </p>
      </div>
      <div className="mb-4 lg:mb-0">
        <h5 className="font-semibold">Quick Links</h5>
        <ul className="mt-4 space-y-1">
          <li>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:underline">
              Our Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:underline">
              FAQ
            </Link>
          </li>
        </ul>
      </div>

      <div className="mb-4 lg:mb-0">
        <h5 className="font-semibold">Contact Us</h5>
        <ul className="mt-4 space-y-1">
          <li className="flex items-center">
            <FaEnvelope className="mr-2" />
            support@handyhub.com
          </li>
          <li className="flex items-center">
            <FaPhone className="mr-2" />
            +1 (123) 456-7890
          </li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold">Follow Us</h5>
        <div className="flex lg:gap-6 gap-4 mt-4">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`https://x.com/CKiraadaves`}
          >
            <FaXTwitter className="text-[#ffffff]  w-6 h-6" />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.linkedin.com/in/chinwe-chukwuogor-400404118/`}
          >
            <FaLinkedin className="text-[#ffffff]  w-6 h-6" />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/Kiraadaves`}
          >
            <FaGithub className="text-[#ffffff]  w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
