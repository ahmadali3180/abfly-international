import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import MainApp from "./MainApp";

const App = () => {
  return (
    <div className="w-full scroll-smooth bg-gradient-to-b from-gray-900 from-50% to-100%  to-darkblue-custom/90">
      <Navbar />
      <MainApp />
      <Footer />
    </div>
  );
};

export default App;
