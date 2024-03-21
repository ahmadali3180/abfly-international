import React from "react";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      id: "ABF-100TS-BS-1",
      image: "/s14.jpeg",
      name: `Professional Barber Set - Silver`,
    },
    {
      id: "ABF-100TS-BS-2",
      image: "/s12.jpeg",
      name: `Professional Barber Set - Gold`,
    },
    {
      id: "ABF-100TS-BS-3",
      image: "/s10.jpeg",
      name: `Professional Barber Set - Black with blue accent`,
    },
  ];

  const handleProductClick = (productId) => {
    window.open(`/${productId}`);
  };

  return (
    <section className="xxs:px-2 sm:px-6 lg:px-12 xl:px-24 md:mt-40 mt-32">
      <h2 className="text-4xl font-medium text-white">Featured Products.</h2>
      <div className="flex xxs:flex-col md:flex-row justify-evenly mx-auto items-center my-24 gap-6">
        {products.map((prod) => (
          <ProductCard
            buttonTitle={"View Details"}
            title={prod.name}
            image={prod.image}
            key={prod.id}
            onClick={() => handleProductClick(prod.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
