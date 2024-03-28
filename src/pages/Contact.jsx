import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <section className="xxs:px-6 sm:px-8 md:px-20 lg:px-32 py-10">
      <div className="flex flex-col text-left gap-20 xxs:mt-20 sm:mt-24 lg:mt-32 text-white">
        {/* Heading*/}
        <div className="flex flex-col gap-8">
          <h1 className="md:text-[2.75rem] text-4xl font-semibold">
            Contact Us.
          </h1>
          <p className="lg:text-lg font-light">
            To place order and further inquiries,{" "}
            <br className="xs:block hidden" /> contact us with your inquiry
            details
          </p>
        </div>
        {/* Main Content */}
        <div className="flex sm:flex-row flex-col justify-between lg:gap-0 gap-12 ">
          <div className="flex flex-col gap-8 xl:w-[31.25rem] md:w-[25rem] sm:w-[23rem] sm:px-0 px-2 xs:px-8 ">
            {/* name */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="block lg:text-lg text-base font-semibold leading-6"
              >
                Name *
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  autoComplete="given-name"
                  className="block w-full rounded-lg border-0 px-3.5 py-2 text-text-primary shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-[#474C6D]"
                />
              </div>
            </div>

            {/* email  */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="block lg:text-lg font-semibold leading-6"
              >
                Email *
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  placeholder="Your Email"
                  id="email"
                  className="block w-full rounded-lg border-0 px-3.5 py-2 text-text-primary shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-[#474C6D]"
                />
              </div>
            </div>
            {/* Product Code  */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="Product"
                className="block lg:text-lg font-semibold leading-6"
              >
                Products for Inquiry
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  placeholder="Add Products to send inquiry"
                  id="Product"
                  className="block w-full rounded-lg border-0 px-3.5 py-2 text-text-primary shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-[#474C6D]"
                />
              </div>
            </div>
            {/* message  */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="message"
                className="block lg:text-lg font-semibold leading-6"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  placeholder="Type your message"
                  name="message"
                  id="message"
                  rows={12}
                  className="block w-full rounded-lg border-0 px-3.5 py-2 text-text-primary shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-[#474C6D]"
                  defaultValue={""}
                />
              </div>
              <div className="mt-20">
                <button
                  type="submit"
                  className="bg-lightblue-custom rounded-2xl px-6 py-2 text-gray-900 font-medium text-sm sm:text-base"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
          {/* Contact Details */}
          <div className="md:text-base text-sm text-lightblue-custom flex flex-col gap-4 sm:px-0 px-4 xs:px-8">
            <div className="flex flex-col gap-3">
              <h1 className="font-medium lg:text-lg text-white">Email</h1>
              <Link>info@abflyinternational.com</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-medium lg:text-lg text-white">WhatsApp</h1>
              <Link>030003000300</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-medium lg:text-lg text-white">Instagram</h1>
              <Link>@ig_ahmadali</Link>
            </div>
          </div>
        </div>
        {/* Map */}
        <div>
          {/* Map */}

          {/* Text */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
