import React from "react";
import { Labels } from "./Labels";
import { Members } from "./Members";
import members from "~/data/project/members.json";

export const Sidebar = () => {
  // const members = {
  //   team: [],
  //   mods: [],
  //   community: [],
  // };

  // function pushUser(a) {
  //   a.push({
  //     name: faker.name.firstName() + " " + faker.name.lastName(),
  //     status: faker.lorem.words(),
  //     avatar: faker.image.cats(),
  //   });
  // }

  // for (let i = 0; i < 10; i++) pushUser(members.team);
  // for (let i = 0; i < 3; i++) pushUser(members.mods);
  // for (let i = 0; i < 20; i++) pushUser(members.community);

  // console.log(JSON.stringify(members))

  return (
    <div className="w-80 h-full border-l border-white-seperator">
      <Labels />
      <div className="border-b border-white-seperator"></div>
      <Members members={members} />
    </div>
  );
};
