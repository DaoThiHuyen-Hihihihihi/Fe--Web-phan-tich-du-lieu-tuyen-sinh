import React from "react";
import "./Dropdown.css";

const Dropdown = ({ options, value, onChange, ...props }) => {
  return (
    <select value={value} onChange={onChange} {...props} className="dropdown">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
