import React from "react";
import CatalogueCard from "./CatalogueCard";

const OurCatalogues = () => {
  const catalogs = [
    {
      id: "beauty-1",
      image: "/cat1.png",
      name: `Beauty Instruments - 1`,
    },
    {
      id: "beauty-2",
      image: "/cat1.png",
      name: `Beauty Instruments - 2`,
    },
    {
      id: "beauty-3",
      image: "/cat1.png",
      name: `Beauty Instruments - 3`,
    },
  ];

  const handleCatalogueClick = (catalogueId) => {
    window.open(`/${catalogueId}`);
  };

  return (
    <section className="xxs:px-2 sm:px-6 lg:px-12 xl:px-24 md:mt-40 mt-32">
      <h2 className="text-4xl font-medium text-white">Our Catalogues.</h2>
      <div className="flex justify-evenly mx-auto items-center my-24">
        {catalogs.map((cat) => (
          <CatalogueCard
            title={cat.name}
            image={cat.image}
            key={cat.id}
            onClick={() => handleCatalogueClick(cat.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default OurCatalogues;
