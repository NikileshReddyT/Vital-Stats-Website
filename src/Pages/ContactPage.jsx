import React from "react";
import { Helmet } from "react-helmet";
import Contact from "../Components/Contact";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Vital Health Solutions</title>
        <meta
          name='description'
          content="Get in touch for support or questions
Have questions or need assistance? Contact us today for quick support and answers. We're here to help you with any inquiries or guidance you need."
        />
      </Helmet>
      <Contact />
    </>
  );
};

export default ContactPage;
