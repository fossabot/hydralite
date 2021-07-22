import React from "react";
import { Icon } from "@iconify/react";

const Label = ({ borderColor, text }) => {
  return (
    <div
      className="rounded-md inline-flex items-center gap-2 h-7 p-2 font-semibold text-xs"
      style={{ background: borderColor }}
    >
      <Icon icon="akar-icons:tag" className="text-xs" />
      <span className="mt-1px tracking-wide">{text}</span>
    </div>
  );
};

export default Label;
