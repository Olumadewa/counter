import React from "react";

const CounterDisplay = ({ cornerRadius, children }) => {
  return (
    <div
      className={[
        `h-20 px-3 rounded-full flex items-center justify-center morph-fixed ${cornerRadius} min-b-width`,
      ]}
    >
      {children}
    </div>
  );
};

export default CounterDisplay;
