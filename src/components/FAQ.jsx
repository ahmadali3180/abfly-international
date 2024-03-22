import React from "react";

const FAQ = () => {
  return (
    <section className="flex w-full flex-col ">
      {/* Head Div */}
      <div className="h-[1.5px] bg-gray-300" />
      <div className="flex flex-col mx-auto py-16 w-full">
        {/* Head Content */}
        <div className="flex gap-16 text-white font-semibold items-center justify-evenly w-full xxs:text-sm md:text-base xxs:flex-col md:flex-row xxs:gap-0 sm:gap-4">
          <div className="relative -top-10">
            <p>Your Frequently asked questions</p>
          </div>
          <div className="">
            <p className="text-5xl xxs:text-4xl">FAQs</p>
          </div>
          <div className="relative top-10">
            <p>Answers to common questions</p>
          </div>
        </div>
      </div>
      <div className="h-[1.5px] bg-gray-300" />
    </section>
  );
};

export default FAQ;
