import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import AngleDownIcon from "~/icons/line/AngleDownIcon";

const NewPostCard = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`w-[38rem] rounded-xl p-3 ${
        theme === "dark" && "bg-dark-bgMuted1 text-dark-fg"
      }`}
    >
      <div
        className={`p-2 border-b ${theme === "dark" && "border-dark-bgMuted2"}`}
      >
        <h3 className="font-semibold flex items-center gap-1 text-sm">
          Lets make a <span className="font-bold">post</span>
          <AngleDownIcon
            className={`h-5 w-5 fill-current ${
              theme === "dark" && "text-dark-fg"
            }`}
          />
        </h3>
      </div>
      <div className="p-2 mt-2 flex items-center gap-3">
        <img
          src="https://avatars.githubusercontent.com/u/67153585?v=4"
          alt=""
          className="h-7 w-7 rounded-full"
        />
        <h3
          className={`font-semibold text-md ${
            theme === "dark" && "text-dark-textMuted"
          }`}
        >
          What's up, <span className="font-bold">fullstackslayer</span>?
        </h3>
      </div>
    </div>
  );
};

export default NewPostCard;
