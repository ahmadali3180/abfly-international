import React from "react";
import {
  Home,
  About,
  Contact,
  Catalogues,
  CatalogueView,
  ProductDetails,
} from "./pages";
import { Routes, Route } from "react-router-dom";

const MainApp = () => {
  return (
    <div className="max-w-[1440px] mx-auto scroll-smooth">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalogue" element={<Catalogues />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalogue/:cataId" element={<CatalogueView />} />
        <Route path="/:cataId" element={<CatalogueView />} />
        <Route path="/catalogue/:cataId/:prodId" element={<ProductDetails />} />
        <Route path="/:prodId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default MainApp;
