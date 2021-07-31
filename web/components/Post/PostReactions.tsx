import { useThemeContext } from "~/hoc/theme/ThemeContext";

export const PostReactions = ({
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
      <div className="flex items-center gap-1">
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
  