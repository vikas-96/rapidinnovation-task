import React from "react";
import Errorboundries from "../../ErrorBoundries";

export const FormInput = (props) => {
  const {
    name,
    type = "text",
    className = "",
    onChange,
    value,
    error,
    ...rest
  } = props;

  let Inputclass = `form-control ${className}`; // want class globally then add ex., `test ${className}`
  return (
    <Errorboundries>
      <input
        name={name}
        type={type}
        autoComplete="off"
        className={Inputclass.trim()}
        onChange={onChange}
        value={value || ""}
        {...rest}
      />
      {error && error}
    </Errorboundries>
  );
};
