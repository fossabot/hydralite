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
  description: string;
  attachments?: string[];
}

export const Post: React.FC<ProjectProps> = (props) => {
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
  return (
    <div className="mt-2">
      <p className="text-sm text-muted">{description}</p>
      {attachments && (
        <div className="flex flex-wrap mt-3">
          {attachments.slice(0, 3).map((v, i) => {
            const al = attachments.length;

            if (i === 2) {
              return <div>view all attachments</div>;
            }

            return (
              <img
                key={i}
                src={v}
                alt=""
                className={`
                  rounded-10 
                  
                  ${al === 1 && i === 0 && "w-full"}
                  ${al > 1 && i === 0 && "w-1/2"}
                  
                  ${al === 2 && i === 1 && "w-1/2"}
                  ${al > 2 && i === 1 && "w-1/2 h-1/2"}
                `}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
