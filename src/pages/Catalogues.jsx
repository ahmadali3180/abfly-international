import React from "react";

const Catalogues = () => {
  return (
    <section className="flex xxs:px-4 xs:px-20 md:px-8 lg:px-16 items-center xxs:pt-10 md:pt-0 min-[350px]:px-9 min-[420px]:px-16">
      <div className="flex flex-col gap-20 xxs:mt-20 sm:mt-24 lg:mt-32 text-white w-full">
        <div>
          <h1 className="text-4xl font-semibold">Catalogue</h1>
        </div>
        <div className="flex flex-col gap-36">
          <div className="flex flex-col gap-32">
            <Card />
            <Card />
            <Card />
          </div>{" "}
          <div className="mx-auto mb-24 opacity-85">
            <a>Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <>
      <div className="flex xxs:flex-col md:flex-row gap-14">
        <div className="">
          <img
            src="/cat1.png"
            alt=""
            className="sm:w-[350px] sm:h-[525px] xxs:w-[300px] h-[450px]"
          />
        </div>
        <div className="flex flex-col justify-between xxs:gap-8 md:gap-0">
          <div className="flex flex-col gap-8 font-semibold">
            <div className="flex flex-col gap-2">
              <p className="lg:text-2xl xxs:text-lg opacity-75">
                Catalogue Name
              </p>
              <p className="lg:text-4xl xxs:text-xl">Beauty Instruments</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="lg:text-2xl xxs:text-lg opacity-75">
                Product Count
              </p>
              <p className="lg:text-4xl xxs:text-xl">100+</p>
            </div>
          </div>
          <div className="flex gap-3 text-base">
            <button className="bg-blue-custom w-36 py-1.5 rounded-xl font-medium">
              <a href="">Download</a>
            </button>
            <button className="bg-blue-custom w-36 py-1.5 rounded-xl font-medium">
              <a href="">View</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalogues;
