import React from "react";
import HeroSection from "./HeroSection";
import Awards from "./Awards";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Awards />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
