import React from "react";
import { Route } from "react-router-dom";
import Header from "./Common/Header";
// import Footer from "./Common/Footer";

export const PublicLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <div className="wrapper">
          <Header />
          <Component {...props} />
          {/* <Footer /> */}
        </div>
      )}
    />
  );
};
