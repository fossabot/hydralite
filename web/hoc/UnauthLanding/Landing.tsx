import React, { useState } from "react";
import TextLoop from "react-text-loop";
import Login from "../../components/Login/Login";
import Navbar from "../../components/Unauth/Navbar";

export default function UnauthLanding() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Navbar />
      <div className="w-[100vw] h-[80vh] bg-white">
        <div className="flex items-center justify-center w-full h-full flex-col">
          <span className="text-4xl text-black">
            <TextLoop>
              <span className="montserrat font-extrabold uppercase text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#7581FF] to-[#7B61FF]">
                Discover.
              </span>
              <span className="font-extrabold uppercase montserrat text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#7581FF] to-[#7B61FF]">
                Develop.
              </span>
              <span className="font-extrabold uppercase montserrat text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#7581FF] to-[#7B61FF]">
                Deploy.
              </span>
            </TextLoop>
          </span>
          <span className="text-[#5D5D5D] mt-4 text-xl font-semibold montserrat">
            The platform for project management and project discovery.
          </span>
        </div>
      </div>
    </div>
  );
}
