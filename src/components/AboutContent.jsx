import React from "react";
import AboutUs from "./AboutUs";

const AboutContent = () => {
  return (
    <section className="xxs:px-2 sm:px-6 lg:px-12 xl:px-24 md:mt-40 mt-32">
      {/* About Main */}
      <div className="xxs:flex-col lg:flex-row flex gap-10 w-full mx-auto mt-24 items-center">
        {/* About content */}
        <div className="flex flex-col gap-10 w-full lg:w-2/3">
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
        <div className="relative flex gap-4 justify-end">
          <div className="flex lg:flex-col gap-4 mt-16 xxs:flex-row">
            <img
              src="/s12.jpeg"
              alt=""
              className="w-[200px] h-[300px] rounded-2xl shadow-md shadow-black/90 object-cover"
            />
            <img
              src="/s14.jpeg"
              alt=""
              className="w-[200px] h-[300px] rounded-2xl shadow-md shadow-black/90 object-cover xxs:-mt-16 sm:mt-0"
            />
          </div>
          <div className="hidden md:flex lg:mt-[50%] md:mt-[10%]">
            <img
              src="/s18.jpeg"
              alt=""
              className="w-[200px] h-[300px] rounded-2xl shadow-md shadow-black/90 object-cover"
            />
          </div>
        </div>
      </div>
      {/* About Main */}
      <div className="xxs:flex-col-reverse lg:flex-row-reverse flex gap-10 w-full mx-auto mt-24 items-center">
        {/* About content */}
        <div className="flex flex-col gap-10 w-full lg:w-2/3">
          <h2 className="text-4xl font-medium text-white">How we started?</h2>
          <p className="text-white text-base font-[200]">
            Five years ago, amidst the bustling streets of Sialkot, Pakistan,
            our venture into the world of beauty instrument exports began. From
            a humble, small-scale factory, we embarked on a remarkable journey.
            With each passing year, our passion and dedication propelled us to
            unprecedented heights, and our mission remains stronger than ever as
            we continue to provide top-quality beauty instruments to clients
            worldwide.
          </p>
        </div>
        {/* About Image */}
        <div className="relative flex flex-row-reverse gap-4 justify-end">
          <div className="flex lg:flex-col-reverse gap-4 mt-16 xxs:flex-row-reverse">
            <img
              src="/s12.jpeg"
              alt=""
              className="w-[200px] h-[300px] rounded-2xl shadow-md shadow-black/90 object-cover"
            />
            <img
              src="/s14.jpeg"
              alt=""
              className="w-[200px] h-[300px] rounded-2xl shadow-md shadow-black/90 object-cover xxs:-mt-16 sm:mt-0"
            />
          </div>
          <div className="hidden md:flex lg:mt-[50%] md:mt-[10%]">
            <img
              src="/s18.jpeg"
              alt=""
              className="w-[200px] h-[300px] rounded-2xl shadow-md shadow-black/90 object-cover"
            />
          </div>
        </div>
      </div>
      {/* About Main */}
      <div className="xxs:flex-col lg:flex-row flex gap-10 w-full mx-auto my-24 items-center">
        {/* About content */}
        <div className="flex flex-col gap-10 w-full lg:w-2/3">
          <h2 className="text-4xl font-medium text-white">
            Whats coming next?
          </h2>
          <p className="text-white text-base font-[200]">
            As we look to the future, our aspirations are boundless. We are on
            the verge of an exciting expansion, ready to introduce a new line of
            beauty instruments and cutting-edge tools. Our vision includes
            state-of-the-art manufacturing facilities, equipped with the latest
            technology to craft precision instruments tailored for the beauty
            industry. We're committed to setting new industry standards, meeting
            the evolving demands of the global market, and scaling up our
            operations to provide unparalleled quality and innovation in the
            world of beauty instruments.
          </p>
        </div>
        {/* About Image */}
        <div className="relative flex gap-4 justify-end">
          <div className="flex lg:flex-col gap-4 mt-16 xxs:flex-row">
            <img
              src="/s12.jpeg"
              alt=""
              className="w-[200px] h-[300px] rounded-2xl shadow-md shadow-black/90 object-cover"
            />
            <img
              src="/s14.jpeg"
              alt=""
              className="w-[200px] h-[300px] rounded-2xl shadow-md shadow-black/90 object-cover xxs:-mt-16 sm:mt-0"
            />
          </div>
          <div className="hidden md:flex lg:mt-[50%] md:mt-[10%]">
            <img
              src="/s18.jpeg"
              alt=""
              className="w-[200px] h-[300px] rounded-2xl shadow-md shadow-black/90 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
