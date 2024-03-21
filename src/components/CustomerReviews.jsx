import React, { useState } from "react";

const CustomerReviews = () => {
  const customers = [
    {
      name: "Jhon Doe",
      review: `"As a professional hairdresser, I rely heavily on the quality of my tools. ABFLY International exceeded my expectations with their beauty instruments. From scissors to razors, each product exudes durability and precision. My purchase has significantly elevated the quality of my work, and I couldn't be happier."`,
      occupation: "Professional Barber",
      id: 1,
    },
    {
      name: "Jane Doe",
      review: `"Transitioning to ABFLY International for my beauty instrument needs was a game-changer. Their commitment to excellence is evident in every product. As a beauty salon owner, investing in their instruments has not only enhanced the satisfaction of my clients but also improved the overall efficiency of our services. Highly recommended!"`,
      occupation: "Professional Hairdresser",
      id: 2,
    },
    {
      name: "Hary White",
      review: `"I've been a loyal customer of ABFLY International for years, and for good reason. Their beauty instruments consistently deliver exceptional performance and durability. Whether it's precision scissors or ergonomic razors, each purchase has been an investment in quality. Trusting ABFLY for my salon's needs has been one of the best decisions I've made for my business."`,
      occupation: "Beauty Instruments Distributor",
      id: 3,
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === customers.length - 1 ? 0 : prevIndex + 1
    );
    setIsExpanded(false); // Collapse text when changing review
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? customers.length - 1 : prevIndex - 1
    );
    setIsExpanded(false); // Collapse text when changing review
  };

  const handleCircleClick = (index) => {
    setCurrentReviewIndex(index);
    setIsExpanded(false); // Collapse text when changing review
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="xxs:px-2 sm:px-6 lg:px-12 xl:px-24 md:my-40 my-32">
      <h1 className="text-4xl text-white text-center font-semibold">
        Customer Reviews
      </h1>
      {/* Main Customer Reviews */}
      <div className="flex gap-10 justify-between mt-16 items-center">
        {/* Left Button */}
        <div
          className="p-2 bg-gray-400 rounded-full h-10 w-10 items-center"
          onClick={handlePrevReview}
        >
          <img src="/lefticon.png" alt="left" />
        </div>
        {/* Content */}
        <div className="w-2/3 text-center">
          <div className="overflow-hidden">
            <p
              className={`text-gray-300 font-light ${
                isExpanded ? "h-auto" : "h-28"
              }`}
            >
              {customers[currentReviewIndex].review}
            </p>
          </div>
          {!isExpanded && (
            <button className="text-blue-500 mt-2" onClick={handleToggleExpand}>
              Read more...
            </button>
          )}
          {isExpanded && (
            <button className="text-blue-500 mt-2" onClick={handleToggleExpand}>
              Read less
            </button>
          )}
        </div>
        {/* Right Button */}
        <div
          className="p-2 bg-gray-400 rounded-full h-10 w-10 items-center"
          onClick={handleNextReview}
        >
          <img src="/righticon.png" alt="right" />
        </div>
      </div>
      <div className="text-lg text-lightblue-custom font-semibold text-center mt-16">
        - {customers[currentReviewIndex].name},{" "}
        {customers[currentReviewIndex].occupation}
      </div>
      <div className="flex gap-1 items-center justify-center mx-auto mt-12">
        {customers.map((review, index) => (
          <div
            key={review.id}
            onClick={() => handleCircleClick(index)}
            className={`${
              index === currentReviewIndex
                ? "bg-lightblue-custom"
                : "bg-gray-400"
            } p-1 items-center justify-center rounded-full h-2 w-2 cursor-pointer`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
