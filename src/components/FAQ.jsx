import React from "react";

const QNA = [
  {
    id: 1,
    q: `What types of beauty instruments do you manufacture and export?`,
    ans: ` We craft and export a wide array of beauty instruments, including facial steamers, microdermabrasion machines, LED therapy devices, skin scrubbers, salon chairs, and beauty beds, meeting diverse industry needs.`,
  },
  {
    id: 2,
    q: `Are your beauty instruments compliant with international standards and regulations?`,
    ans: `Yes, our beauty instruments strictly adhere to global standards and regulations for quality, safety, and performance. We meticulously ensure compliance in all manufacturing stages to uphold the highest industry benchmarks.`,
  },
  {
    id: 3,
    q: `Can you customize beauty instruments according to specific requirements or branding needs?`,
    ans: `Certainly! We offer tailored customization services to match your exact requirements and branding preferences. From design tweaks to branding elements, our skilled team ensures your personalized beauty instruments reflect your vision flawlessly.`,
  },
  {
    id: 4,
    q: `What sets your beauty instruments apart from competitors in the market?`,
    ans: `Our beauty instruments excel in quality, innovation, and reliability. We integrate cutting-edge technology for superior performance and results. Coupled with our unwavering commitment to customer satisfaction and competitive pricing, we stand out as the preferred choice for beauty professionals worldwide.`,
  },
];

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
      {/* Question Answers*/}
      <div className="flex flex-col text-white items md:py-20 sm:py-16 py-8 lg:px-16 sm:px-8 md:px-10 xxs:px-4  ">
        {QNA.map((qna) => (
          <React.Fragment key={qna.id}>
            <div className="flex flex-col gap-7 py-8 text-sm sm:text-base">
              <h1 className="font-semibold w-full">{qna.q}</h1>
              <p className="font-light opacity-85">{qna.ans}</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="w-2 h-2 rounded-full bg-gray-300 relative top-1" />
              <div className="h-[1.5px] bg-gray-300 border-none border-r-2 border-l-2" />
              <div className="w-2 h-2 rounded-full bg-gray-300 relative top-1" />
            </div>
            <div className="h-[1.5px] bg-gray-300 border-none border-r-2 border-l-2" />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
