import { Icon } from "@iconify/react";
import React from "react";
import { NewRippleCard } from "~/components/NewRippleCard";
import { Ripple } from "~/components/Ripple/Ripple";

export const Feed = () => {
  const elems = [];

  for (let i = 0; i < 10; i++) {
    elems.push(
      <Ripple
        creator={{
          name: "gatsbyfanboy6969",
          isProjectOwner: true,
          pfp: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        }}
        project={{
          name: "",
          gradient: "",
        }}
        replies="22k"
        labels={[{ bgColor: "#5C60D5", fgColor: "#fff", name: "okay" }]}
        // TASK: Replace iconify emojis with twemoji
        reactions={[
          {
            emoji: (
              <Icon icon="fxemoji-fire" className="h-[0.8rem] w-[0.8rem]" />
            ),
            count: "304",
            selected: false,
          },
          {
            emoji: (
              <Icon icon="fxemoji-fire" className="h-[0.8rem] w-[0.8rem]" />
            ),
            count: "144",
            selected: false,
          },
          {
            emoji: (
              <Icon icon="fxemoji-fire" className="h-[0.8rem] w-[0.8rem]" />
            ),
            count: "10",
            selected: true,
          },
        ]}
        hydraAmount="0"
        reposts="0"
        shares="0"
        title="We think we're better than next js, try changing our mind haters"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
      />
    );
  }
  return (
    <div className="px-4 bg-white-secondBg h-full w-full overflow-y-auto">
      <div className="mx-auto container mt-3 space-y-7">
        <NewRippleCard />
        {elems.map((elem) => elem)}
      </div>
    </div>
  );
};
