import React from "react";
import { Link } from "react-router-dom";
import Errorboundries from "../../ErrorBoundries";

export const Anchor = (props) => {
  const { path, label, className = "", ...rest } = props;
  let Linkclass = `${className}`; // want class globally then add ex., `test ${className}`
  return (
    <Errorboundries>
      <Link to={path} {...rest} className={Linkclass.trim()}>
        {label}
      </Link>
    </Errorboundries>
  );
};
