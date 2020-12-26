import React from "react";

const Component = ({ name, email, phone, address }) => {
  return (
    <>
      <p>Name: {name}</p>
      <p>Email-id: {email}</p>
      <p>Phone Number: {phone}</p>
      <p>Address: {address}</p>
    </>
  );
};

export default Component;
