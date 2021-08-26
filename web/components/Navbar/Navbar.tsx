import React, { useState } from "react";
import { useContext } from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import AngleDownIcon from "~/icons/line/AngleDownIcon";
import CogIcon from "~/icons/line/CogIcon";
import SearchIcon from "~/icons/line/SearchIcon";
import PlusIconSolid from "~/icons/solid/PlusIconSolid";
import Login from "~/pages/login";
import { AuthContext } from "~/util/auth";
import { CreateRippleModal } from "../CreateRippleModal/CreateRippleModal";

const ProfileWidget = () => {
  const { user, loggedIn } = useContext(AuthContext);
  const { theme } = useThemeContext();
  if (loggedIn) {
    return (
      <div
        className={`flex items-center gap-2 p-2 rounded-lg ${
          theme === "dark" && "bg-dark-bgMuted2 text-dark-fg"
        }`}
      >
        <img
          alt="Avatar"
          className="h-6 w-6 rounded-full"
          src={user.UserProfile[0].avatarURL}
        />
        <span className="font-semibold text-md">{user.name}</span>
        <AngleDownIcon
          className={`w-5 h-5 ${theme === "dark" && "fill-[#fff]"}`}
        />
      </div>
    );
  }else{
    return <Login />
  }
};

const Navbar: React.FC = () => {
  const { theme } = useThemeContext();
  const [isCreateRippleModalOpen, setIsCreateRippleModalOpen] =
    useState<boolean>(false);

  return (
    <>
      <div
        className={`w-full flex items-center gap-3 justify-end py-2 pr-2 ${
          theme === "dark" && "bg-dark-bgMuted3"
        }`}
        style={{ boxShadow: "0px 4px 4px 0px #1F1F1F40" }}
      >
        <SearchIcon
          className={`w-[1.1rem] h-[1.1rem] cursor-pointer ${
            theme === "dark" && "fill-[#fff]"
          }`}
        />
        <CogIcon
          className={`w-[1.1rem] h-[1.1rem] cursor-pointer ${
            theme === "dark" && "fill-[#fff]"
          }`}
        />
        <PlusIconSolid
          className={`w-[1.1rem] h-[1.1rem] cursor-pointer ${
            theme === "dark" && "fill-[#fff]"
          }`}
          onClick={() => setIsCreateRippleModalOpen(true)}
        />
        <ProfileWidget />
      </div>
      {/* <CreateRippleModal
        isOpen={isCreateRippleModalOpen}
        setIsOpen={setIsCreateRippleModalOpen}
      /> */}
    </>
  );
};

export default Navbar;
