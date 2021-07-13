import React from "react";
import { Post } from "~/components/Post/Post";

export const Feed = () => {
  return (
    <div className="container mx-auto px-4">
      {/* <EngagementBanner projectName="Volt" /> */}
      <Post
        creator={{
          name: "xtremedevx",
          isProjectOwner: true,
          pfp: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        }}
        isFocused={true}
        project={{
          name: "Volt",
          gradient: "",
        }}
        postedtime="1 hour ago"
        title="How we built the world’s fastest package manager."
        type="Article"
      />
    </div>
  );
};
