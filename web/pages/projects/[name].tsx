import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Skeleton from "../../hoc/Skeleton/Skeleton";
import { serverUrl } from "../../utils/constants";

const Project: React.FC = () => {
  const router = useRouter();
  const [project, setProject] = useState(null);
  const projectID = router.asPath.split("/")[2];
  useEffect(() => {
    axios
      .get(`${serverUrl}/api/project/getProject?p_id=${projectID}`)
      .then(async (resp) => {
        console.log(resp.data);
        setProject(await resp.data);
        console.log(project);
      });
  }, []);
  const deleteProject = () => {
    const id = localStorage.getItem("accessToken");
    axios
      .get(`${serverUrl}/api/project/delProject?p_id=${projectID}`, {
        headers: {
          Authorization: `bearer ${id}`,
        },
      })
      .then(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.location = "/" as any;
      });
  };
  if (project !== null) {
    return (
      <Skeleton sidebar>
        <div className="w-[calc(100vw-6.5rem)] ml-6 flex">
          <div className="w-[200px] h-[calc(100vh-4rem)] ">
            <div className="flex flex-col font-montserrat">
              <span className="text-2xl font-extrabold ">{project.name}</span>
              <span className="text-sm font-bold">120 Members</span>
              <div className="mt-7">
                <h1>Home</h1>
                <h1>Feed</h1>
                <h1>Roadmap</h1>
              </div>
            </div>
          </div>
          <div className="w-[calc(100vw-200px-5rem)] h-100vh flex items-center justify-center">
            <button
              className="py-3 px-4 bg-red-600 text-black font-extrabold rounded-xl"
              onClick={() => deleteProject()}
            >
              Delete proj
            </button>
          </div>
        </div>
      </Skeleton>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default Project;
