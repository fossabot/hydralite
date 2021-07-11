import { Icon } from "@iconify/react"

interface CategoryType {
  name: string;
  isPrivate: boolean;
  isSelected: boolean;
}

export const Categories = ({ categories }: { categories: CategoryType[] }) => {
  return (
    <div className="h-1/2 border-b border-bluegrey w-full">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-2xl">Categories</h1>
        <Icon icon="bi-plus-lg" className="text-text text-xl" />
      </div>
    </div>
  );
};

const Category = ({ categoryName, isPrivate, isSelected }) => {};
