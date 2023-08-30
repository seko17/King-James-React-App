import React from "react";
import "./style.css";
import Typography from "../Typography/Typography";
function SectionLabel({ children, color }) {
  return (
    <div className="sectionlabel-main">
      <div className="line"></div>
      <Typography color={color}  variant={"subtitle1"}>{children}</Typography>
    </div>
  );
}

export default SectionLabel;
