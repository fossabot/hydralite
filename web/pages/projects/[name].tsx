import React from "react";
import Skeleton from "../../hoc/Skeleton/Skeleton";

export default function Project() {
  return (
    <Skeleton>
      <div className="w-[calc(100vw-6.5rem)] ml-6 flex">
        <div className="w-[200px] h-[calc(100vh-4rem)] ">
          <div className="flex flex-col font-montserrat">
            <span className="text-2xl font-extrabold ">
              Hydralite
            </span>
            <span className="text-sm font-bold">120 Members</span>
            <div className="mt-7">
              <h1>Home</h1>
              <h1>Feed</h1>
              <h1>Roadmap</h1>
          </div>
          </div>
          
        </div>
        <div className="w-[calc(100vw-200px-5rem)] h-100vh flex items-center justify-center">
            <h1 className='font-montserrat font-extrabold text-3xl'>Welcome to <span className="text-dark-color-accent">Volt</span></h1>
        </div>
      </div>
    </Skeleton>
  );
}
