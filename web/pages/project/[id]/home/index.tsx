import axios from "axios";
import router from "next/router";
import Meta from "partials/Meta";
import React from "react";
import { useEffect } from "react";
import { serverUrl } from "~/constants/global";

import { UseApiConnection } from "~/hoc/api/UseApiConnection";
import Layout from "~/hoc/Layout/Layout";

// const WelcomeWidget: React.FC<{
//   color: string;
//   Icon: any;
//   title: string;
//   description: string;
//   contentClassName?: string;
// }> = ({ color, Icon, title, description, contentClassName }) => {
//   return (
//     <div className="flex items-center justify-between h-28 w-160 bg-white-selected rounded-10 m-3 cursor-pointer select-none">
//       <div className="flex items-center">
//         <div
//           className="grid place-items-center rounded-full h-14 w-14 mx-7"
//           style={{ backgroundColor: color }}
//         >
//           <div className="h-7 w-7">{Icon}</div>
//         </div>
//         <div
//           className={`flex flex-col justify-between items-start box-border py-1 ${contentClassName}`}
//         >
//           <div className="font-semibold text-xl">{title}</div>
//           <div className="text-base leading-5">{description}</div>
//         </div>
//       </div>
//       <div className="flex justify-center items-center w-12 h-12 mr-6 rounded-10 hover:bg-white-hover-select">
//         <div className="w-7 h-7">
//           {/* GOto icon */}
//         </div>
//       </div>
//     </div>
//   );
// };

const HomePage = () => {
  const deleteProject = (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    const id = router.asPath.split("/")[2];
    axios
      .post(
        `${serverUrl}/api/projects/deleteProject`,
        { id: id },
        { headers: { authorization: `bearer ${accessToken}` } }
      )
      .then((e) => {
        window.location.replace("/");
      });
  };
  return (
    <>
      <Meta
        title="My Cool Project - Hydralite"
        description="This is a description for my cool project."
        url="https://hydralite.io"
        keywords="open source,hydralite,project management"
      />
      <UseApiConnection>
        <Layout
          includeProjectSidebar
          activeProjectId="1"
          activeProjectSidebarLink="Home"
        >
          <div className="w-full h-full flex align-middle justify-center flex-col">
            <div className="w-full flex justify-center">
              <button
                onClick={deleteProject}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </Layout>
      </UseApiConnection>
    </>
  );
};

export default HomePage;
