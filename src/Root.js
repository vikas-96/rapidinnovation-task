import React from "react";
import { Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contactus";
import Listing from "./Pages/Listing";
import NotFound from "./Pages/Error/NotFound";
import { PublicLayout } from "./Components/Layout";

const Root = () => {
  return (
    <>
      <Switch>
        <PublicLayout path="/" exact component={Home} />
        <PublicLayout path="/contact" component={Contact} />
        <PublicLayout path="/listing" component={Listing} />
        <PublicLayout component={NotFound} />
      </Switch>
    </>
  );
};

export default Root;
