import React from "react";

const WelcomeAbout = () => {
  return (
    <section className="flex xxs:px-4 sm-px-8 lg:px-16 justify-center items-center">
      <div className="flex xxs:flex-col-reverse md:flex-row items-center text-left justify-center gap-20 xxs:mt-20 sm:mt-24 lg:mt-32">
        <div className="flex flex-col items-center jusify-center gap-10">
          <div className="flex w-48 h-48 p-2 bg-white rounded-full items-center justify-center">
            <img src="/logo-thumb.png" alt="" className="aspect-fit w-36" />
          </div>
          <div className="flex flex-col gap-8 text-center lg:mx-40 xxs:mx-4 sm:mx-12 md:mx-20">
            <p className="text-4xl text-white font-semibold">
              ABFly International
            </p>
            <p className="font-light text-lightblue-custom text-lg">
              Beauty Instruments Manufacturer
            </p>
            <p className="text-gray-300 text-light text-center">
              Dedicated to excellence in crafting beauty instruments, providing
              unparalleled quality and efficiency to professionals in the beauty
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeAbout;
