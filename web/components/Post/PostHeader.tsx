import { useThemeContext } from "~/hoc/theme/ThemeContext";

export const PostHeader = ({
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