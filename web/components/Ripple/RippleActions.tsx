import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";

import ShareAltIcon from "~/icons/line/ShareAltIcon";
import RedoIcon from "~/icons/line/RedoIcon";
import EllipsisVIcon from "~/icons/line/EllipsisVIcon";
import RocketIcon from "~/icons/line/RocketIcon";
import CommentsIcon from "~/icons/line/CommentsIcon";

import ShareAltIconSolid from "~/icons/solid/ShareAltIconSolid";
import RocketIconSolid from "~/icons/solid/RocketIconSolid";
import CommentsIconSolid from "~/icons/solid/CommentsIconSolid";

export const RippleActions = ({ replies, shares, reposts, hydra }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`flex items-center gap-3 absolute top-[-1rem] right-2 rounded-md p-2 ${
        theme === "dark" && "bg-dark-bgMuted4 text-dark-fg"
      }`}
    >
      <RippleAction
        Icon={CommentsIcon}
        HoverIcon={CommentsIconSolid}
        name="Replies"
        count={replies}
      />
      <RippleAction
        Icon={RedoIcon}
        HoverIcon={RedoIcon}
        name="Repost"
        count={reposts}
      />
      <RippleAction
        Icon={ShareAltIcon}
        HoverIcon={ShareAltIconSolid}
        name="Share"
        count={shares}
      />
      <RippleAction
        Icon={RocketIcon}
        HoverIcon={RocketIconSolid}
        name="Hydra Boosts"
        count={hydra}
      />
      <RippleAction Icon={EllipsisVIcon} HoverIcon={EllipsisVIcon} name="More" />
    </div>
  );
};

const RippleAction = ({ name, count = "", Icon, HoverIcon }) => {
  //   const { theme } = useThemeContext();

  return (
    <div className="group cursor-pointer">
      {<Icon className={`group-hover:hidden h-4 w-4 fill-current`} />}
      {
        <HoverIcon
          className={`hidden group-hover:block h-4 w-4 fill-current opacity-[0.7]`}
        />
      }
    </div>
  );
};
