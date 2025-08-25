import React from "react";
import "./ONhap.css";

const ONhap = ({ placeholder, value, onChange, ...props }) => {
  return (
    <input
      className="onhap"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default ONhap;
