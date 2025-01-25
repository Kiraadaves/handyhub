import React from "react";
import Link from "next/link";
import { FaSignInAlt, FaUserPlus, FaToolbox } from "react-icons/fa";

const GetStartedPage = () => {
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="">
        <h1 className="mt-6 text-center font-extrabold text-[#00d084]">
          Get Started with HandyHub
        </h1>
        <p className="mt-2 text-center text-gray-600">
          Choose an option to begin your journey with us
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-8 px-4 shadow-lg border sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <Link
              href="/login"
              className="w-full flex justify-center items-center px-4 py-4 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-[#00d084] hover:bg-[#00b873] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00d084] transition-colors duration-300"
            >
              <FaSignInAlt className="mr-3 text-2xl" />
              Sign In
            </Link>

            <Link
              href="/register-provider"
              className="w-full flex justify-center items-center px-4 py-4 border border-[#00d084] rounded-md shadow-sm text-base font-bold text-[#00d084] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00d084] transition-colors duration-300"
            >
              <FaToolbox className="mr-3 text-2xl" />
              Register as Service Provider
            </Link>

            <Link
              href="/register"
              className="w-full flex justify-center items-center px-4 py-4 border border-[#00d084] rounded-md shadow-sm text-base font-bold text-[#00d084] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00d084] transition-colors duration-300"
            >
              <FaUserPlus className="mr-3 text-2xl" />
              Register as User
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
