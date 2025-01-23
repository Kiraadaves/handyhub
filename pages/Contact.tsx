import React from "react";

const Contact = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-primary">Contact Us</h2>
      <p className="text-lg">
        Get in touch with us for any inquiries or to schedule a service.
      </p>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Phone</h3>
          <p>(123) 456-7890</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Email</h3>
          <p>info@handyhub.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Address</h3>
          <p>123 Main Street, Anytown, USA 12345</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
