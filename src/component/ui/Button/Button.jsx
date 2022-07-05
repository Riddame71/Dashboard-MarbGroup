import React from "react";
import "./Button.scss";

const Button = ({ label, className, ...rest }) => {
  return (
    <button className={`button ${className ? className : ""}`} {...rest}>
      {label}
    </button>
  );
};

export default Button;
