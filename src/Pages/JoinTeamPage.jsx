import React from "react";
import { Helmet } from "react-helmet";
import JoinTeam from "../Components/JoinTeam";

const JoinTeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Join Our Team - Vital Health Solutions</title>
        <meta
          name='description'
          content='Join us and help improve healthcare
Become part of a mission-driven team focused on creating better healthcare solutions. Collaborate with professionals passionate about making a difference in the health industry.'
        />
      </Helmet>
      <JoinTeam />
    </>
  );
};

export default JoinTeamPage;
