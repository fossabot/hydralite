import React from "react";
import { Icon } from "@iconify/react";

interface CategoryType {
  name: string;
  isPrivate: boolean;
  isSelected: boolean;
}

const Category = ({ name, isPrivate = false, isSelected }: CategoryType) => (
  <a>
    <div
      className={`mb-5 flex flex-row justify-start items-center cursor-pointer select-none rounded-10 w-full text-text font-semibold ${
        isSelected && "font-bold"
      }`}
    >
      <Icon
        icon={
          // eslint-disable-next-line no-nested-ternary
          !isPrivate
            ? isSelected
              ? "bx-bxs-category"
              : "bx-bx-category"
            : isSelected
            ? "bx-bxs-lock-alt"
            : "bx-bx-lock-alt"
        }
        className="w-5 h-5"
      />
      <div className="text-base ml-5">{name}</div>
    </div>
  </a>
);

export const Categories: React.FC<{ categories: CategoryType[] }> = ({
  categories,
}) => (
  <div className="h-1/2 border-b border-white-seperator w-full p-6 overflow-y-auto">
    <div className="flex justify-between items-center w-full">
      <h1 className="font-extrabold text-xl">Categories</h1>
      <Icon icon="bi-plus-lg" className="text-text text-lg" />
    </div>
    <div className="mt-5">
      {categories.map((category) => (
        <Category
          name={category.name}
          isPrivate={category.isPrivate}
          isSelected={category.isSelected}
        />
      ))}
    </div>
  </div>
);
