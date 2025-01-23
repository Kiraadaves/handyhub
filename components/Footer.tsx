import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#00D084] px-8 py-4 flex justify-between items-center">
      <div>
        <h1 className="bg-[#ffffff]  text-[1.5rem] border rounded-full p-2 shadow-md text-[#00D084] font-bold">
          HandyHub
        </h1>
      </div>
      <div className="flex lg:gap-8 gap-4">
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
  );
};

export default Footer;
