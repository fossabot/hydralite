import { useState } from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";

export const PostBody = ({
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
  