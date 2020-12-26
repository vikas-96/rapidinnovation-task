import React, { useState } from "react";
import ContactForm from "./Form";

const Contactus = (props) => {
  return (
    <>
      <section className="grey-bg">
        <div className="container-fluid">
          <div className="">
            <p>Submit the form to get your data printed below.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
