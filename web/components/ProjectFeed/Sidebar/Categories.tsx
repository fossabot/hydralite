import { Icon } from "@iconify/react";

interface CategoryType {
  name: string;
  isPrivate: boolean;
  isSelected: boolean;
}

export const Categories = ({ categories }: { categories: CategoryType[] }) => {
  return (
    <div className="h-1/2 border-b border-white-seperator w-full p-6 overflow-y-auto">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-extrabold text-xl">Categories</h1>
        <Icon icon="bi-plus-lg" className="text-text text-lg" />
      </div>
      <div className="mt-5">
        {categories.map((category) => {
          return (
            <Category
              name={category.name}
              isPrivate={category.isPrivate}
              isSelected={category.isSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

const Category = ({ name, isPrivate = false, isSelected }: CategoryType) => {
  return (
    <a>
      <div
        className={`mb-5 flex flex-row justify-start items-center cursor-pointer select-none rounded-10 w-full text-text font-semibold ${
          isSelected && "font-bold"
        }`}
      >
        {!isPrivate ? (
          isSelected ? (
            <Icon icon="bx-bxs-category" className="w-5 h-5" />
          ) : (
            <Icon icon="bx-bx-category" className="w-5 h-5" />
          )
        ) : isSelected ? (
          <Icon icon="bx-bxs-lock-alt" className="w-5 h-5" />
        ) : (
          <Icon icon="bx-bx-lock-alt" className="w-5 h-5" />
        )}
        <div className="text-base ml-5">{name}</div>
      </div>
    </a>
  );
};
