import React from "react";

const Footer = () => (
  <section className="flex flex-col bg-[#11142B]">
    <div className="w-full sm:px-10 py-8 ">
      <form className="flex lg:flex-row flex-col items-center justify-between gap-10 lg:gap-0 xl:px-20">
        <div>
          <p className="sm:text-xl text-lg text-white lg:ml-10">
            Subscribe to our Newsletter
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-4 ">
          <div className="sm:w-80 w-72 items-center mx-auto">
            <input
              type="text"
              placeholder="Your name"
              className="py-3 px-6 rounded-full w-full"
            />
          </div>
          <div className="flex md:w-100 max-w-[300px] mx-auto">
            <input
              type="email"
              placeholder="Your Email"
              className="py-3 px-6 rounded-full min-w-[300px] md:w-80"
            />
            <button className="text-white font-medium bg-blue-custom rounded-full px-5 relative right-[5.15rem] my-[0.2rem]">
              send
            </button>
          </div>
        </div>
      </form>
    </div>
    <div className="h-[1px] bg-gray-400 w-full" />
    <div className="py-12 xs:px-20 flex gap-4">
      <div>
        {" "}
        <img
          src="/logo-thumb.png"
          alt=""
          className="sm:w-18 w-20 sm:h-16 h-12 xs:w-16"
        />
      </div>

      <h1 className="sm:text-[2.5rem] text-[1.5rem] text-white xxs:tracking-tighter leading-tight md:tracking-wider font-semibold italic">
        ABFLY INTERNATIONALS
      </h1>
    </div>
    <div className="flex xxs:px-3 xs:px-6 md:px-10 lg:px-14 xl:px-24">
      <div className="md:flex md:flex-row grid grid-cols-1 sm:grid-cols-2 text-white py-12 gap-12">
        {/* Address */}
        <div className="md:px-6  text-sm flex flex-col gap-3">
          <h1 className="text-xl font-medium">Address</h1>
          <div className="font-light text-lightblue-custom">
            Roras Road, Small industrial area,
            <br /> Harar, Sialkot - 51310 Pakistan
          </div>
          <div className="flex flex-col font-light gap-1.5">
            <p>
              <span className="font-medium text-lightblue-custom">
                Website:{" "}
              </span>
              abflyinternational.com
            </p>
            <a href="">
              <span className="font-medium text-lightblue-custom">Email: </span>
              info@abflyinternational.com
            </a>
            <a href="">
              <span className="font-medium text-lightblue-custom">Phone: </span>
              03000030000
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 xs:grid-cols-2 md:gap-20 gap-10 font-light text-sm text-lightblue-custom">
          {/* Categories */}
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-medium text-white">Categories</h1>
            <a href="" className="text-lightblue-custom">
              Beauty Instruments
            </a>
          </div>
          {/* Useful Links */}
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-medium text-white">Usefull Links</h1>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">Catalogue</a>
            <a href="">Terms & Conditions</a>
          </div>
          {/* Credits */}
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-medium text-white">Credits</h1>
            <p>Freepik</p>
            <p>Figma</p>
            <p>Photos: Google</p>
          </div>
        </div>
      </div>
    </div>

    <div className="h-[1px] bg-gray-400 w-full" />
    <div className="xxs:flex xxs:flex-col gap-2 sm:grid sm:grid-cols-3 sm:text-sm font-light text-gray-500 items-center justify-evenly py-4 text-center xxs:text-xs">
      <div className="lg:-ml-40">www.abflyinternational.com</div>
      <div>
        <p className="">
          Designed & Developed by{" "}
          <span className="text-white font-medium">Ravalbit</span>
        </p>
      </div>
      <div>Copyright 2023-2024,ABFLY Internationals, All Rights Reserved</div>
    </div>
  </section>
);

export default Footer;
