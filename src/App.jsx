import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { FAQ, Footer, Navbar } from "./components";
import MainApp from "./MainApp";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const App = () => {
  return (
    <div className="w-full scroll-smooth bg-gradient-to-b from-gray-900 from-50% to-100% to-darkblue-custom/90">
      <Navbar />
      <MainApp />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
