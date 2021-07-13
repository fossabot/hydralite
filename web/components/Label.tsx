import React from "react";
import { Icon } from '@iconify/react';

const Label = ({ borderColor, text }) => {
  return (
    <div
      className="rounded-md inline-flex items-center gap-2 h-7 p-2 font-semibold text-sm"
      style={{ background: borderColor }}
    >
      <Icon icon="akar-icons:tag" className="text-text stroke-2 stroke-current font-bold text-white" />
      <span className="mt-1px text-white">{text}</span>
    </div>
  );
};

export default Label;
