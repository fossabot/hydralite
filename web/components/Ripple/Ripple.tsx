import React, { useState } from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import { RippleActions } from "./RippleActions";
import { RippleBody } from "./RippleBody";
import { RippleHeader } from "./RippleHeader";
import { RippleLabels } from "./RippleLabels";
import { RippleReactions } from "./RippleReactions";

interface RippleProps {
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
  labels: {
    name: string;
    bgColor: string;
    fgColor: string;
  }[];
  title: string;
  replies: string;
  shares: string;
  reposts: string;
  hydraAmount: string;
  description: string;
  attachments?: string[];
}

export const Ripple: React.FC<RippleProps> = (props) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`
        w-[38rem] rounded-xl p-5 relative
        ${theme === "dark" && "bg-dark-bgMuted1 text-dark-fg"}
      `}
    >
      <RippleActions
        reposts={props.reposts}
        shares={props.shares}
        hydra={props.hydraAmount}
        replies={props.replies}
      />
      <RippleHeader
        creatorName={props.creator.name}
        isCreatorOwnerOfProject={props.creator.isProjectOwner}
        creatorPfp={props.creator.pfp}
        projectName={props.project.name}
        projectGradient={props.project.gradient}
        rippleTitle={props.title}
      />
      <RippleBody
        description={props.description}
        attachments={props.attachments}
      />
      <div className="flex justify-between items-center mt-3">
        <RippleReactions reactions={props.reactions} />
        <RippleLabels
          labels={[{ bgColor: "#5C60D5", fgColor: "#fff", name: "okay" }]}
        />
      </div>
    </div>
  );
};
