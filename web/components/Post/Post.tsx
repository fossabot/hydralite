import React, { useState } from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import { PostActions } from "./PostActions";
import { PostBody } from "./PostBody";
import { PostHeader } from "./PostHeader";
import { PostLabels } from "./PostLabels";
import { PostReactions } from "./PostReactions";

interface PostProps {
  project: {
    name: string;
    gradient: string;
  };
  creator: {
    name: string;
    isProjectOwner: boolean;
    pfp: string;
  };
  reactions: {
    emoji: any;
    count: string;
    selected: boolean;
  }[];
  title: string;
  replies: string;
  shares: string;
  reposts: string;
  hydraAmount: string;
  description: string;
  attachments?: string[];
}

export const Post: React.FC<PostProps> = (props) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`
        w-[38rem] rounded-xl p-5 relative
        ${theme === "dark" && "bg-dark-bgMuted1 text-dark-fg"}
      `}
    >
      <PostActions
        reposts={props.reposts}
        shares={props.shares}
        hydra={props.hydraAmount}
        replies={props.replies}
      />
      <PostHeader
        creatorName={props.creator.name}
        isCreatorOwnerOfProject={props.creator.isProjectOwner}
        creatorPfp={props.creator.pfp}
        projectName={props.project.name}
        projectGradient={props.project.gradient}
        postTitle={props.title}
      />
      <PostBody
        description={props.description}
        attachments={props.attachments}
      />
      <div className="flex justify-between items-center mt-3">
        <PostReactions reactions={props.reactions} />
        <PostLabels
          labels={[{ bgColor: "#5C60D5", fgColor: "#fff", name: "okay" }]}
        />
      </div>
    </div>
  );
};
