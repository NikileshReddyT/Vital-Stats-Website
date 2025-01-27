import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../Components/Hero";
import HowItWorks from "../Components/HowItWorks";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Vital Stats - Inspire, Aspire Health</title>
        <meta
          name='description'
          content='Discover Vital Health Solutions, where personalized care meets advanced technology. Explore how our AI-driven tools and professional team help you achieve better health outcomes. Join us in transforming healthcare for a healthier future.'
        />
      </Helmet>

      <Hero />
      <HowItWorks />
    </>
  );
};

export default HomePage;
