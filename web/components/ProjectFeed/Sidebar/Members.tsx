import { Icon } from "@iconify/react";
import React from "react";
import User from "~/components/User";

export const Members = () => {
  return (
    <div className="w-full p-6 overflow-y-auto">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-extrabold text-xl">Members</h1>
        <Icon icon="bi-plus-lg" className="text-text text-lg" />
      </div>
      <div className="mt-3 flex flex-col">
        <h1 className="font-extrabold text-lg text-gray my-1">Project Members</h1>
        {["daddy", "mommy", "member 1", "kid42"].map((e) => (
          <User
            name={e}
            avatar="/avatar.png"
            status="This is a real status."
          />
        ))}

        <h1 className="font-extrabold text-lg text-gray my-1">Moderators</h1>
        {["Mr.NotPaidEnough", "Predator/Mod #69"].map((e) => (
          <User
            name={e}
            avatar="/avatar.png"
            status="This is a real status."
          />
        ))}

        <h1 className="font-extrabold text-lg text-gray my-1">Community</h1>
        {["xtremedevkid", "paidalot", "dad", "mom", "thatkid", "xtreme"].flatMap(i => [i,i]).map((e) => (
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
