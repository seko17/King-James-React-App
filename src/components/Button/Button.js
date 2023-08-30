import React from "react";
import "./style.css";
function Button({ variant, children, color }) {
  return (
    <button
      className={`main ${variant === "primary" ? "primary" : null} ${
        variant === "secondary" ? "secondary" : null
      } ${variant === "text" ? "text" : null} ${
        color === "black" ? "text-black" : "text-white"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
