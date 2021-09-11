import React from "react";
import Navbar from "../../components/Auth/Navbar";

import Sidebar from "../../components/Auth/Sidebar/Sidebar";

interface ISkeletonData {
  sidebar: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}
const Skeleton: React.FC<ISkeletonData> = (props: ISkeletonData) => (
  // <UnauthLanding />
  <div className="h-screen w-screen flex bg-white dark:bg-dark-bg relative">
    {props.sidebar ? (
      <div className="absolute">
        <Sidebar />
      </div>
    ) : (
      <div />
    )}
    <div className="h-screen w-[calc(100vw-1rem)] flex flex-col">
      <Navbar />
      <div className={props.sidebar ? `pl-[5rem]` : `pl-0`}>
        {props.children}
      </div>
    </div>
  </div>
);
export default Skeleton;
