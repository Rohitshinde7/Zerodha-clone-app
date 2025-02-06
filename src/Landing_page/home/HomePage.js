import React from "react";
import Awards from "./Awards";
import Hero from "../home/Hero";
import Pricing from "./Pricing";
import Education from "./Education";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function HomePage() {
  return (
    <div>
      <>
        <Navbar />
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer />
      </>
    </div>
  );
}

export default HomePage;
