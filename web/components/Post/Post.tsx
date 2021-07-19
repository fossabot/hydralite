import { Icon } from "@iconify/react";
import React, { useState } from "react";

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
  title: string;
  postedtime: string;
  type: string;
  isFocused?: boolean;
  description: string;
  attachments?: string[];
}

export const Post: React.FC<PostProps> = (props) => {
  return (
    <div
      className={`${
        props.isFocused && "boxShadow1"
      } w-35rem rounded-10 p-5 bg-white-base mx-auto`}
    >
      <PostHeader
        creatorName={props.creator.name}
        isCreatorOwnerOfProject={props.creator.isProjectOwner}
        creatorPfp={props.creator.pfp}
        projectName={props.project.name}
        projectGradient={props.project.gradient}
        postTime={props.postedtime}
        postTitle={props.title}
        postType={props.type}
      />
      <PostBody
        description={props.description}
        attachments={props.attachments}
      />
      <PostActions
        likes="39k"
        replies="29k"
        reposts="10k"
        shares="1k"
        hydra="200k"
      />
      <ReplyBar avatar="/avatar.png" name="Aaryaman Maheshwari" />
      <Reactions />
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
  postTime,
  postType,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center mb-1">
          <img src={creatorPfp} alt="" className="w-4 h-4 rounded-full mr-2" />
          <h3 className="text-sm text-gray font-semibold flex items-center mt-1px">
            Posted by
            <span className="ml-1 mr-1 font-bold flex items-center">
              {creatorName}
              {isCreatorOwnerOfProject && (
                <Icon icon="ph:crown-fill" className="text-yellow ml-1" />
              )}
            </span>
            in
            <span
              className="ml-1 font-bold"
              style={{ background: projectGradient }}
            >
              {projectName}
            </span>
          </h3>
        </div>
        <div className="">{/* TASK: put labels here */}</div>
      </div>

      <h1 className="text-lg font-bold">{postTitle}</h1>
      <div className="flex items-center gap-1 text-gray">
        <span className="text-xs font-semibold">{postTime}</span>
        <Icon icon="bi-dot" className="" />
        <span className="text-xs font-semibold">{postType}</span>
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
  const [sliderPositon, setSliderPositon] = useState<number>(1);

  function incrementSliderPosition() {
    setSliderPositon((c) => (c !== attachments.length ? c + 1 : c));
  }

  function decrementSliderPosition() {
    setSliderPositon((c) => (c !== 1 ? c - 1 : c));
  }

  return (
    <div className="mt-2">
      <p className="text-sm text-muted">{description}</p>
      {attachments && (
        <div className="mt-3">
          <div className="w-full h-52 flex items-center gap-2">
            <Icon
              icon="grommet-icons:previous"
              className="h-5 w-5 cursor-pointer"
              onClick={decrementSliderPosition}
            />
            <img
              src={attachments[sliderPositon - 1]}
              className={`rounded-10 w-[33rem] h-full object-cover select-none`}
              draggable={false}
            />
            <Icon
              icon="grommet-icons:next"
              className="h-5 w-5 cursor-pointer"
              onClick={incrementSliderPosition}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const PostActions = ({ likes, replies, shares, reposts, hydra }) => {
  return (
    <div className="border-t border-white-seperator mt-6 pt-4 flex justify-between">
      <div className="flex items-center gap-5">
        <PostAction
          icon={<Icon icon="fxemoji:fire" className="h-4 w-4" />}
          count={likes}
        />
        <PostAction
          icon={<Icon icon="akar-icons:comment" className="h-4 w-4" />}
          count={replies}
        />
        <PostAction
          icon={<Icon icon="bx-bx-share-alt" className="h-4 w-4" />}
          count={shares}
        />
        <PostAction
          icon={<Icon icon="ps:retweet-1" className="h-5 w-5" />}
          count={reposts}
        />
        <PostAction
          icon={<Icon icon="ion:rocket" className="h-4 w-4" />}
          count={hydra}
        />
      </div>
      <div>
        <Icon icon="bi:bookmark" className="h-4 w-4" />
      </div>
    </div>
  );
};

const PostAction = ({ icon, count }) => {
  return (
    <span className="flex items-center gap-2 font-bold text-sm">
      {icon}
      {count}
    </span>
  );
};

const ReplyBar = ({ avatar, name }) => {
  return (
    <div className="w-full flex items-center gap-3 bg-white-secondBg mt-4 p-3 rounded-5 select-none cursor-pointer">
      <img src={avatar} alt="" className="h-4 w-4 rounded-full" />
      <h4 className="text-xs font-semibold">
        Reply as <span className="font-bold">{name}</span>
      </h4>
    </div>
  );
};

const Reactions = () => {
  const reactions = [
    { icon: "noto-v1:thumbs-up", count: "93k", chosen: true },
    {
      icon: "twemoji:smiling-face-with-sunglasses",
      count: "20k",
      chosen: true,
    },
    { icon: "fxemoji:bolt", count: "20k", chosen: false },
  ];

  return (
    <div className="flex items-center gap-1 mt-2">
      {reactions.map((r, i) => {
        return (
          <div
            className={`flex items-center gap-1 rounded-5 p-1 select-none cursor-pointer ${
              r.chosen
                ? "border-accent border bg-[#E7E9FF]"
                : "bg-white-secondBg"
            }`}
            key={i}
          >
            <Icon icon={r.icon} className="h-3 w-3" />
            <span className="font-bold text-[0.5rem] mt-[2px]">{r.count}</span>
          </div>
        );
      })}
    </div>
  );
};
