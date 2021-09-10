import Image from "next/image";
import React from "react";
import ArrowIconDown from "../../icons/solid/ArrowIconDown";

const Navbar: React.FC = () => (
  <div className="w-[100%] h-14 font-montserrat flex items-center justify-between gap-2 select-none mx-2">
    <h1 className="text-2xl tracking-wide font-extrabold md:text-lg">
      HYDRALITE
    </h1>
    <div className="flex gap-8 font-semibold text-xl md:text-base ">
      <div>Discover</div>
      <div className="text-dark-color-accent">Projects</div>
      <div>Profile</div>
      <div>Blog</div>
      <div>Project Ideas</div>
    </div>
    <div className="flex bg-iris-10 dark:bg-dark-bgMuted1 w-44 h-11 rounded-lg items-center justify-center gap-2">
      <Image
        src="https://avatars.githubusercontent.com/u/77481923?v=4"
        height="25%"
        width="25%"
        className="rounded-xl"
      />
      <span className="text-sm">VarunPotti</span>
      <div className=" dark:text-white text-gray-900">
        <ArrowIconDown className="fill-current" />
      </div>
    </div>
  </div>
);

export default Navbar;
