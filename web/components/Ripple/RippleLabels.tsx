import React from "react";
import LabelIcon from "~/icons/line/LabelIcon";

interface RippleLabelsProps {
  labels: {
    name: string;
    bgColor: string;
    fgColor: string;
  }[];
}

export const RippleLabels: React.FC<RippleLabelsProps> = ({ labels }) => {
  return (
    <div className="flex items-center">
      {labels.map((label) => {
        return (
          <RippleLabel
            name={label.name}
            bgColor={label.bgColor}
            fgColor={label.fgColor}
          />
        );
      })}
    </div>
  );
};

const RippleLabel = ({ name, bgColor, fgColor }) => {
  return (
    <div
      className="group rounded-full flex items-center p-1 justify-center gap-1 select-none cursor-pointer"
      style={{ backgroundColor: bgColor }}
    >
      <LabelIcon className="h-3 w-3 fill-current" style={{ color: fgColor }} />
      <span className="hidden group-hover:block text-xs">{name}</span>
    </div>
  );
};
