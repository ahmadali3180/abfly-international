import React from "react";
import { WelcomeAbout, QualityAssurance, AboutContent } from "../components";

const About = () => {
  return (
    <div className="w-full scroll-smooth">
      <WelcomeAbout />
      <QualityAssurance />
      <AboutContent />
    </div>
  );
};

export default About;
