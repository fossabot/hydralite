import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import TimesIcon from "~/icons/line/TimesIcon";

interface CreateRippleModalHeaderProps {
  rippleType?: string;
  projectName: string;
  closeModal: (...args: unknown[]) => unknown;
}

export const CreateRippleModalHeader: React.FC<CreateRippleModalHeaderProps> =
  ({
    rippleType = "ripple",
    projectName,
    // setProjectName,
    closeModal,
  }) => {
    const { theme } = useThemeContext();
    return (
      <div
        className={`
        w-full relative h-9 mb-4 ${
          theme === "dark" && "border-b border-dark-border1"
        }
    `}
      >
        {/* TASK: add project picker */}
        <h1 className="font-bold">
          Lets make a <span className="font-extrabold">{rippleType}</span> in{" "}
          <span className="font-extrabold">p/{projectName}</span>
        </h1>

        <button type="button" onClick={closeModal}>
          <TimesIcon className="h-[1.2rem] w-[1.2rem] cursor-pointer hover:opacity-[0.9] absolute top-[0.15rem] right-[0.15rem] fill-current" />
        </button>
      </div>
    );
  };
