import React from "react";
import "./ProgressBar.scss";
import { LinearProgress } from "@mui/material";

const ProgressBar = ({ value }) => {
  return (
    <div className="ProgressBar">
      <div className="ProgressBar__header">
        <p className="ProgressBar__header__title">
          Overall Desktop Performance:
        </p>
        <p className="ProgressBar__header__subtitle">Average ({value}%)</p>
      </div>
      <div className="Progress">
        <LinearProgress
          sx={{
            height: "20px",
          }}
          variant="buffer"
          value={value}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
