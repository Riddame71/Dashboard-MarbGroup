import { CircularProgress } from "@mui/material";
import React from "react";
import "./ProgressCard.scss";

const ProgressCard = ({
  value,
  label,
  progressValue,
  bgColor,
  valueBgColor,
}) => {
  return (
    <div className="ProgressCard" style={{ backgroundColor: bgColor }}>
      <div
        className="ProgressCard__value"
        style={{ backgroundColor: valueBgColor }}
      >
        <p>{value}%</p>
      </div>
      <div className="ProgressCard__label">
        <p>{label}</p>
      </div>
      <div className="ProgressCard__progress">
        <div className="ProgressCard__progress__item">
          <CircularProgress
            thickness={10}
            size={60}
            value={100}
            color="secondary"
            variant="determinate"
          />
        </div>
        <CircularProgress
          thickness={10}
          size={60}
          value={progressValue}
          variant="determinate"
        />
      </div>
    </div>
  );
};

export default ProgressCard;
