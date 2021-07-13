import React from "react";

const Label = ({ borderColor, text }) => {
  return (
    <div
      className="rounded-full inline-flex items-center gap-3 h-7 p-2 font-semibold text-sm"
      style={{ border: `2px solid ${borderColor}` }}
    >
      <span
        className="rounded-full h-4 w-4"
        style={{ backgroundColor: borderColor }}
      ></span>
      <span className="mt-1px">{text}</span>
    </div>
  );
};

export default Label;
