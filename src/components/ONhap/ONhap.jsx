import React from "react";
import "./ONhap.css";

const ONhap = ({ placeholder, value, onChange }) => {
  return (
    <input
      className="onhap"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default ONhap;
