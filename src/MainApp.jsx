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
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalogue" element={<Catalogues />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:cata" element={<CatalogueView />} />
        <Route path="/:cata/:prodId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default MainApp;
