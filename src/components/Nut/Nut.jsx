import React from "react";
import "./Nut.css";

const Nut = ({ label, onClick, type = "button", ...props }) => {
  return (
    <button className="nut" type={type} onClick={onClick} {...props}>
      {label}
    </button>
  );
};

export default Nut;
