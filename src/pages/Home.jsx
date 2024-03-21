import React from "react";
import {
  AboutUs,
  CustomerReviews,
  FeaturedProducts,
  Hero,
  OurCatalogues,
} from "../components";

const Home = () => {
  return (
    <div className="w-full scroll-smooth">
      <Hero />
      <AboutUs />
      <OurCatalogues />
      <FeaturedProducts />
      <CustomerReviews />
    </div>
  );
};

export default Home;
