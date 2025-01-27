import React from "react";
import { Helmet } from "react-helmet";
import Features from "../Components/Features";

const FeaturesPage = () => {
  return (
    <>
      <Helmet>
        <title>Features - Vital Health Solutions</title>
        <meta
          name='description'
          content='Explore the unique features of Vital Health Solutions...'
        />
      </Helmet>
      <Features />
    </>
  );
};

export default FeaturesPage;