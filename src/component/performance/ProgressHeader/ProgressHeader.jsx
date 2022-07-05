import React from "react";
import Button from "../../ui/Button/Button";
import "./ProgressHeader.scss";

const ProgressHeader = ({ title }) => {
  return (
    <div className="ProgressHeader">
      <p>{title}</p>
      <Button label={"RECHECK SCORE"} />
    </div>
  );
};

export default ProgressHeader;
