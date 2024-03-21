import React from "react";

const AboutUs = () => {
  return (
    <div
      className="xxs:px-2 sm:px-6 lg:px-12 xl:px-24 md:mt-40 mt-32"
      id="about"
    >
      {/* About Cards */}
      <div className="flex xxs:flex-col lg:flex-row justify-evenly gap-10 items-center md:scale-110">
        <AboutCard
          title={"Our Mission"}
          text={`Pioneering precision in
                beauty instruments to elevate
                and enhance individual confidence. Our mission,
                your satisfaction.`}
        />
        <AboutCard
          title={"Our Expertise"}
          text={`Unmatched expertise in crafting 
          beauty instruments,
          enhancing precision and
          performance for professionals.`}
        />
        <AboutCard
          title={"Our Services"}
          text={`Craft your unique beauty tools confidently.
          Choose materials, enjoy bespoke design. Your vision, our expertise.
          Choose from existing articles, or provide you own design to be manufactured.`}
        />
      </div>
      {/* About Main */}
      <div className="flex gap-10 w-full mx-auto mt-40 items-center">
        {/* About content */}
        <div className="flex flex-col gap-10 w-2/3">
          <h2 className="text-4xl font-medium text-white">About Us.</h2>
          <p className="text-white text-base font-[200]">
            At{" "}
            <span className="text-red-500 font-bold text-lg mx-1">ABFLY</span>,
            we are dedicated to revolutionizing the dental and beauty instrument
            industry. With a rich history of excellence and a team of passionate
            experts, we're committed to crafting precision instruments that
            empower professionals to achieve exceptional results. Our mission is
            to enhance the artistry of beauty enhancement, ensuring that every
            cstomer leaves with a confident smile or a radiant look. With our
            unwavering commitment to quality, innovation, and customer
            satisfaction, we aim to be your trusted partner in beauty
            enhancement. Join us in the journey to elevate and enhance beauty,
            one instrument at a time.
          </p>
        </div>
        {/* About Image */}
        <div className="hidden relative lg:flex flex-row gap-4 justify-end">
          <div className="flex flex-col gap-4 mt-16">
            <img
              src="/s12.jpeg"
              alt=""
              className="w-[200px] h-[300px] rounded-2xl shadow-md shadow-black/90 object-cover"
            />
            <img
              src="/s14.jpeg"
              alt=""
              className="w-[200px] h-[300px] rounded-2xl shadow-md shadow-black/90 object-cover"
            />
          </div>
          <div className="mt-[50%]">
            <img
              src="/s18.jpeg"
              alt=""
              className="w-[200px] h-[300px] rounded-2xl shadow-md shadow-black/90 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutCard = ({ title, text }) => {
  return (
    <div className="flex flex-col gap-3 p-6 bg-lightblue-custom w-64 h-64 rounded-2xl shadow-md shadow-gray-900">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-800 font-light">{text}</p>
    </div>
  );
};

export default AboutUs;
