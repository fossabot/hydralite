import { Icon } from "@iconify/react";
import React from "react";
import User from "~/components/ProjectFeed/Sidebar/User";

export const Members = () => {
  return (
    <div className="w-full p-6 overflow-y-auto">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-extrabold text-lg">Members</h1>
        <Icon icon="bi-plus-lg" className="text-text text-md" />
      </div>
      <div className="mt-3 flex flex-col">
        {["xtremedevkid", "paidalot", "dad", "mom", "thatkid", "xtreme"]
          .flatMap((i) => [i, i])
          .map((e) => (
            <User
              name={e}
              avatar="/avatar.png"
              status="This is a real status."
            />
          ))}
      </div>
    </div>
  );
};

// const Section = ({ title, users }) => {
//   return (
//     <div>
//       <h1 className="font-extrabold text-xs text-gray mb-2 uppercase tracking-wider">
//         {title}
//       </h1>
//       {users.map((e) => (
//         <User name={e} avatar="/avatar.png" status="This is a real status." />
//       ))}
//     </div>
//   );
// };
