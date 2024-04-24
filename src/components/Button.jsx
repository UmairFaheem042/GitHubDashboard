import React from "react";

const Button = ({ label, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      disabled={disabled}
      style={{
        cursor: disabled && "not-allowed",
        opacity: disabled && 0.5,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
