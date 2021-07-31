import React from "react";
import LabelIcon from "~/icons/line/LabelIcon";

interface PostLabelsProps {
  labels: {
    name: string;
    bgColor: string;
    fgColor: string;
  }[];
}

export const PostLabels: React.FC<PostLabelsProps> = ({ labels }) => {
  return (
    <div className="flex items-center">
      {labels.map((label) => {
        return (
          <PostLabel
            name={label.name}
            bgColor={label.bgColor}
            fgColor={label.fgColor}
          />
        );
      })}
    </div>
  );
};

const PostLabel = ({ name, bgColor, fgColor }) => {
  return (
    <div
      className="group rounded-full h-2 flex items-center gap-1"
      style={{ backgroundColor: bgColor }}
    >
      <LabelIcon className="h-4 w-4" style={{ color: fgColor }} />
      <span className="hidden group-hover:block text-md">{name}</span>
    </div>
  );
};
