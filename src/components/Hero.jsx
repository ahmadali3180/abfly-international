import React from "react";
import Button from "./Button";
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="flex xxs:px-4 sm:px-8 lg:px-16 justify-center items-center"
      id="home"
    >
      <div className="flex xxs:flex-col-reverse md:flex-row items-center text-left justify-center gap-20 xxs:mt-20 sm:mt-24 lg:mt-32">
        {/* Hero Text */}
        <div className="flex flex-col gap-6 text-white md:w-1/2">
          <p className="text-4xl font-semibold leading-relaxed">
            Trimming Beauty to Perfection: Precision and Style Unleashed!
          </p>
          <p className="text-sm font-light">
            Unlock Your Beauty Potential with Expertly Engineered Scissors,
            Razors, and More - Precision Tools for Perfecting Your Look!
          </p>
          <Link
            to="#about"
            smooth={true}
            duration={300}
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <Button title={"Explore More"} />
          </Link>
        </div>
        {/* Hero Image */}
        <div className="">
          <img
            src="/hero-img.png"
            alt=""
            className="xxs:h-80 xxs:w-80 lg:w-96 lg:h-96 rounded-full shadow-lg shadow-gray-900"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
