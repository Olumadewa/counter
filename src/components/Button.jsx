import React from "react";

const Button = ({ children, onClick, fixed = false, cornerRadius = "" }) => {
  return (
    <button
      onClick={onClick}
      className={[
        `h-20 px-3 rounded-full flex items-center justify-center ${
          fixed ? "morph-fixed" : "morph"
        } ${cornerRadius} min-b-width`,
      ]}
    >
      {children}
    </button>
  );
};

export default Button;
