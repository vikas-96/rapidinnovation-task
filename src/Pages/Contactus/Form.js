import React, { useState, useRef } from "react";
import { FormInput } from "../../Components/Form/Input";
import SimpleReactValidator from "simple-react-validator";
import ShowContact from "./ShowContact";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const Component = (props) => {
  const [contactData, setContactData] = useState(initialState);
  const [submittedContactData, setSubmittedContactData] = useState(
    initialState
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [, forceUpdate] = useState();
  var validator = useRef(new SimpleReactValidator());

  const handleChange = (e) => {
    e.persist();
    setContactData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleShowing = (data) => {
    setIsShowing(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.current.allValid()) {
      validator.current.showMessages();
      forceUpdate(1);
      return false;
    } else {
      setIsSubmitting(true);
      handleShowing(true);
      setSubmittedContactData(contactData);
      setIsSubmitting(false);
      setContactData(initialState);
    }
  };

  const { name, email, phone, address } = contactData;
  return (
    <>
      <div className="col-md-6">
        <div className="form-group">
          <FormInput
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            placeholder="Name*"
          />
          {validator.current.message("Name", name, "required|alpha_space")}
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <FormInput
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            placeholder="Email Address*"
          />
          {validator.current.message("Email", email, "required|email")}
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <FormInput
            type="number"
            name="phone"
            onChange={handleChange}
            value={phone}
            placeholder="Phone Number*"
          />
          {validator.current.message(
            "Phone Number",
            phone,
            "required|numeric|min:0,num"
          )}
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <FormInput
            type="textarea"
            name="address"
            rows="5"
            onChange={handleChange}
            value={address}
            placeholder="Address*"
          />
          {validator.current.message("Address", address, "required")}
        </div>
      </div>
      <div className="col-md-6">
        <button
          type="submit"
          className="btn-main-color"
          disabled={isSubmitting}
          onClick={handleSubmit}
        >
          <i className="fa fa-paper-plane" aria-hidden="true"></i>{" "}
          {isSubmitting ? "Please Wait..." : "Submit"}
        </button>
      </div>
      <br />
      {isShowing && <ShowContact {...submittedContactData} />}
    </>
  );
};

export default Component;
