import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PlusIconSolid from "../../../icons/solid/PlusIconSolid";
import { serverUrl } from "../../../utils/constants";

const SidebarItem: React.FC<{ title: string; id: string }> = ({
  title,
  id,
}) => (
  <Link href={`/projects/${id}`}>
    <div className="mb-3 md:ml-0 ml-5 md:h-10 md:w-10 lg:h-12 lg:w-12 relative has-tooltip ">
      <Image
        src={`https://avatars.dicebear.com/api/initials/${title}.svg?backgroundColors[]=grey`}
        className="duration-200 cursor-pointer rounded_box"
        alt=""
        width="50em"
        height="50em"
      />
      <span className="tooltip rounded absolute w-auto py-2 p-1 pr-2 truncate text-sm shadow-xl bg-iris-10 dark:bg-dark-bgMuted2 text-black dark:text-white font-montserrat font-semibold ml-2">
        {title}
      </span>
    </div>
  </Link>
);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Sidebar() {
  const [project, setProject] = useState([]);
  useEffect(() => {
    const id = localStorage.getItem("accessToken");
    axios
      .get(`${serverUrl}/api/auth/getProjects`, {
        headers: {
          Authorization: `bearer ${id}`,
          "Access-Control-Allow-Origin": "http://localhost:8000",
        },
      })
      .then(async (resp) => {
        setProject(await resp.data);
      });
  }, []);

  return (
    <div className="h-full w-[5rem] flex flex-col items-center pt-16 select-none font-montserrat">
      {project !== null ? (
        project.map((val) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <SidebarItem id={val["0"].Value} title={val["2"].Value} />
          );
        })
      ) : (
        <div>Loading</div>
      )}
      <Link href="/projects/createProject">
        <div className="md:w-10 md:h-10 md:ml-0 lg:w-12 lg:h-12 ml-5 my-2 flex items-center justify-center bg-iris-10 dark:bg-dark-bgMuted1 has-tooltip cursor-pointer rounded_box">
          <PlusIconSolid className="w-[60%] fill-current" />
          <span className="tooltip absolute w-auto py-2 p-1 pr-2 truncate shadow-xl bg-iris-10 dark:bg-dark-bgMuted2 text-black dark:text-white font-montserrat ml-44">
            New Project
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
