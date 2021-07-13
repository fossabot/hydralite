import { Icon } from "@iconify/react";
import React from "react";

interface ProjectProps {
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
  isFocused: boolean;
}

export const Post: React.FC<ProjectProps> = (props) => {
  return (
    <div className={`${props.isFocused && "shadow-md"} w-96 rounded-10 p-5`}>
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
        <div className="flex items-center">
          <img src={creatorPfp} alt="" className="w-4 h-4 rounded-full" />
          <h3 className="text-md font-semibold flex">
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

      <h1 className="text-xl font-bold">{postTitle}</h1>
      <div className="flex items-center gap-1">
        <span className="text-sm text-muted font-semibold">{postTime}</span>
        <span className="text-sm text-muted font-semibold">{postType}</span>
      </div>
    </div>
  );
};
