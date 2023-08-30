import React from "react";

function Typography({ children, variant, color }) {
  return (
    <p
      className={`typography--main ${variant} ${
        color == "black" ? "text-black" : "text-white"
      }`}
    >
      {children}
    </p>
  );
}

export default Typography;
