import React, { useState } from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import { PostActions } from "./PostActions";

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
      <PostActions reposts="102" shares="22" hydra="2k" />
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
      <Reactions reactions={props.reactions} />
    </div>
  );
};

const PostHeader = ({
  creatorName,
  isCreatorOwnerOfProject,
  creatorPfp,
  projectName,
  projectGradient,
  postTitle,
}) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`
        flex items-center gap-3 mr-2 
      `}
    >
      <img src={creatorPfp} alt="" className="w-9 h-9 rounded-full" />
      <div>
        <h3 className={`text-xs font-medium flex items-center`}>
          Posted by
          <span className="ml-1 mr-1 font-bold flex items-center">
            {creatorName}
            {/* {isCreatorOwnerOfProject && ""} */}
          </span>
          in
          <span
            className="ml-1 font-bold"
            style={{ background: projectGradient }}
          >
            {projectName}
          </span>
        </h3>
        <h1 className="text-md font-bold">{postTitle}</h1>
      </div>
    </div>
  );
};

const PostBody = ({
  description,
  attachments,
}: {
  description: string;
  attachments?: string[];
}) => {
  const { theme } = useThemeContext();

  const [sliderPositon, setSliderPositon] = useState<number>(1);

  function incrementSliderPosition() {
    setSliderPositon((c) => (c !== attachments.length ? c + 1 : c));
  }

  function decrementSliderPosition() {
    setSliderPositon((c) => (c !== 1 ? c - 1 : c));
  }

  return (
    <div className="mt-3">
      <p
        className={`text-[0.7rem] ${theme === "dark" && "text-dark-textMuted"}`}
      >
        {description}
      </p>
      {attachments && (
        <div className="mt-3">
          <div className="w-full h-52 flex items-center gap-2">
            <span
              className="h-5 w-5 cursor-pointer"
              onClick={decrementSliderPosition}
            >
              {"<"}
            </span>
            <img
              src={attachments[sliderPositon - 1]}
              className={`rounded-lg w-[34rem] h-full object-cover select-none`}
              draggable={false}
            />
            <span
              className="h-5 w-5 cursor-pointer"
              onClick={incrementSliderPosition}
            >
              {">"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const Reactions = ({
  reactions,
}: {
  reactions: {
    emoji: any;
    count: string;
    selected: boolean;
  }[];
}) => {
  const { theme } = useThemeContext();

  return (
    <div className="flex items-center gap-1 mt-3">
      {reactions.map((r, i) => {
        return (
          <div
            className={`
              flex items-center gap-1 rounded-[0.25rem] p-1 select-none cursor-pointer 
              ${
                theme === "dark" &&
                `
                bg-dark-bgMuted4 hover:opacity-[0.7]
                  ${
                    r.selected &&
                    "border-dark-color-accent border opacity-[0.7]"
                  }
                `
              }
            `}
            key={i}
          >
            {r.emoji}
            <span className="font-bold text-[0.6rem] mt-[2px]">{r.count}</span>
          </div>
        );
      })}
    </div>
  );
};
