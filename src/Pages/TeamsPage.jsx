import React from "react";
import { Helmet } from "react-helmet";
import Teams from "../Components/Teams";

const TeamsPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Vital Health Solutions</title>
        <meta
          name='description'
          content='Meet our expert team at Vital Health Solutions
Our team of dedicated healthcare professionals is here to help you every step of the way. Get to know the experienced experts who are committed to improving healthcare outcomes.'
        />
      </Helmet>
      <Teams />
    </>
  );
};

export default TeamsPage;
