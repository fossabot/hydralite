import React from "react";

const EngagementBanner = ({ projectName }) => {
  return (
    <div
      className="w-full relative rounded-10 h-40 overflow-hidden"
      style={{
        background:
          "linear-gradient(92.23deg, #5DAAF1 0%, #6792FF 100%, rgba(196, 196, 196, 0) 100%)",
      }}
    >
      <div>
        <h1 className="text-2xl font-extrabold text-">Tell the world about {projectName}</h1>
        <p className="mt-5 text-lg text-">
          Promote your project, showcase new features, interact with like-minded
          developers, and much more
        </p>
      </div>
      <img
        src="/vectors/postEngagementVector.svg"
        alt=""
        className="h-40 w-40 absolute -bottom-14 right-2"
      />
    </div>
  );
};

export default EngagementBanner;
