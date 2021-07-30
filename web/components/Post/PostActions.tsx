import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";

import ShareAltIcon from "~/icons/line/ShareAltIcon";
import RedoIcon from "~/icons/line/RedoIcon";
import EllipsisVIcon from "~/icons/line/EllipsisVIcon";
import RocketIcon from "~/icons/line/RocketIcon";
import CommentsIcon from "~/icons/line/CommentsIcon";

export const PostActions = ({ replies, shares, reposts, hydra }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`flex items-center gap-3 absolute top-[-1rem] right-2 rounded-md p-2 ${
        theme === "dark" && "bg-dark-bgMuted4 text-dark-fg"
      }`}
    >
      <PostAction
        icon={<CommentsIcon className={`h-4 w-4 fill-current`} />}
        name="Replies"
        count={replies}
      />
      <PostAction
        icon={<RedoIcon className={`h-4 w-4 fill-current`} />}
        name="Repost"
        count={reposts}
      />
      <PostAction
        icon={<ShareAltIcon className={`h-4 w-4 fill-current`} />}
        name="Share"
        count={shares}
      />
      <PostAction
        icon={<RocketIcon className={`h-4 w-4 fill-current`} />}
        name="Hydra Boosts"
        count={hydra}
      />
      <PostAction
        icon={<EllipsisVIcon className={`h-4 w-4 fill-current`} />}
        name="More"
      />
    </div>
  );
};

const PostAction = ({ name, count = "", icon }) => {
//   const { theme } = useThemeContext();

  return <div className="cursor-pointer">{icon}</div>;
};
