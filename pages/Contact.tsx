"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const formFields = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "message", label: "Message", type: "textarea" },
];

const Contact = () => {
  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };

  return (
    <div className="space-y-10">
      <h2 className=" font-bold text-primary">Contact Us</h2>{" "}
      <button
        onClick={handleOpenForm}
        className="hover:decoration hover:underline underline-offset-2 px-4 py-3 font-bold  text-[#ef6a5bf5] "
      >
        Get Started
      </button>
      <p className="">
        Get in touch with us for any inquiries or to schedule a service.
      </p>
      <div className="space-y-4">
        <div>
          <h3 className=" font-semibold">Phone</h3>
          <p>(123) 456-7890</p>
        </div>
        <div>
          <h3 className=" font-semibold">Email</h3>
          <p>info@handyhub.com</p>
        </div>
        <div>
          <h3 className=" font-semibold">Address</h3>
          <p>123 Main Street, Anytown, USA 12345</p>
        </div>
      </div>
      {openForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="animate__animated animate__fadeInDownBig  bg-white shadow-xl rounded-lg p-8 w-full max-w-md m-4 flex flex-col gap-4">
            <div className="flex justify-end mb-4">
              <button
                onClick={handleOpenForm}
                className="p-2 rounded-full bg-[#00D084] text-white hover:bg-opacity-80 transition-colors"
              >
                <IoMdClose className="text-4xl" />
              </button>
            </div>
            <form className="space-y-10 ">
              <p className=" text-center  font-bold text-[#00D084] mb-4">
                We&apos;d love to hear from you
              </p>
              {formFields.map((field) => (
                <div key={field.id} className="flex flex-col">
                  <label
                    htmlFor={field.id}
                    className="mb-1 font-medium text-[#093223] "
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      rows={4}
                      className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00D084] bg-[#00d08411]"
                    />
                  ) : (
                    <input
                      id={field.id}
                      type={field.type}
                      name={field.id}
                      className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00D084] bg-[#00d08411]"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full  bg-[#00D084] text-white py-2 rounded-md hover:border border-[#fcf0eff5] hover:bg-[#ffffff] hover:shadow-lg hover:text-[#00D084]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
