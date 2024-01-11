import React from "react";
import FlowersSection from "../../components/FlowersSection";
import HeroSection from "../../components/HeroSection";
import OurMissionSection from "../../components/OurMissionSection";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Mainpage() {
  return (
    <>
      <HelmetProvider>
        <HeroSection />
        <OurMissionSection />
        <FlowersSection />
        <Helmet>
          <title>Flower Studio</title>
          <meta name="description" content="Flower Products" />
          <link rel="canonical" href="https://mobirise.com/extensions/floram4/floral-studio/assets/images/1.png" />
        </Helmet>
      </HelmetProvider>
    </>
  );
}

export default Mainpage;
