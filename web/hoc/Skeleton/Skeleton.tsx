import React from "react";
import Navbar from "../../components/Auth/Navbar";
import Sidebar from "../../components/Auth/Sidebar/Sidebar";

export default function Home({ children }) {
  return (
    // <UnauthLanding />
    <div className={`h-screen w-screen flex bg-white dark:bg-dark-bg relative`}>
      <div className="absolute">
        <Sidebar />
      </div>
      <div className="h-screen w-[calc(100vw-1rem)] flex flex-col">
        <Navbar />
        <div className="pl-[5rem]">{children}</div>
      </div>
    </div>
  );
}
