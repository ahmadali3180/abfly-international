import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import MainApp from "./MainApp";

const App = () => {
  return (
    <div className="w-full max-w-8xl p-4 bg-gradient-to-b from-gray-900 to-indigo-950">
      <Navbar />
      <MainApp />
      <Footer />
    </div>
  );
};

export default App;
