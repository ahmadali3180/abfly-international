import React from "react";

const QualityAssurance = () => {
  return (
    <section className="flex flex-col xxs:px-2 sm:px-6 lg:px-16 xl:px-24 md:mt-40 mt-32">
      <div className="grid xxs:grid-cols-2 md:grid-cols-4 gap-20">
        <div className="flex flex-col gap-6 items-center jutify-center">
          <img src="/delivery.png" alt="Delivery" />
          <p className="text-gray-200 font-light text-center">
            On time delivery
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center jutify-center">
          <img src="/certified.png" alt="Certified" />
          <p className="text-gray-200 font-light text-center">
            Certified Materials
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center jutify-center">
          <img src="/quality.png" alt="Quality" />
          <p className="text-gray-200 font-light text-center">Quality Checks</p>
        </div>
        <div className="flex flex-col gap-6 items-center jutify-center">
          <img src="/customerService.png" alt="Quality" />
          <p className="text-gray-200 font-light text-center">
            After Sales
            <br />
            Customer Service
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
