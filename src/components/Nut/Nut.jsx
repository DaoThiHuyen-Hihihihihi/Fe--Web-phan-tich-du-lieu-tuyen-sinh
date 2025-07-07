import React from "react";
import "./Nut.css";

const Nut = ({ label, onClick, type = "button" }) => {
  return (
    <button className="nut" type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Nut;
