import HomeAltIcon from "~/icons/line/HomeAltIcon";
import ShapesIcon from "~/icons/line/ShapesIcon";
import SteeringIcon from "~/icons/line/SteeringIcon";
import PresentationCheckIcon from "~/icons/line/PresentationCheckIcon";
import MeetingBoardIcon from "~/icons/line/MeetingBoardIcon";
import UsersAltIcon from "~/icons/line/UsersAltIcon";
import CodeBranchIcon from "~/icons/line/CodeBranchIcon";
import ChartIcon from "~/icons/line/ChartIcon";
import TearIcon from "~/icons/line/TearIcon";
import CogIcon from "~/icons/line/CogIcon";

import PresentationCheckIconSolid from "~/icons/solid/PresentationCheckIconSolid";
import MeetingBoardIconSolid from "~/icons/solid/MeetingBoardIconSolid";
import UsersAltIconSolid from "~/icons/solid/UsersAltIconSolid";
import CodeBranchIconSolid from "~/icons/solid/CodeBranchIconSolid";
import ChartIconSolid from "~/icons/solid/ChartIconSolid";
import TearIconSolid from "~/icons/solid/TearIconSolid";
import CogIconSolid from "~/icons/solid/CogIconSolid";
import ShapesIconSolid from "~/icons/solid/ShapesIconSolid";

export const sidebarUpperLinks = [
  {
    name: "Home",
    icon: HomeAltIcon,
    activeIcon: HomeAltIcon,
  },
  {
    name: "Feed",
    icon: ShapesIcon,
    activeIcon: ShapesIconSolid,
  },
  {
    name: "Roadmap",
    icon: SteeringIcon,
    activeIcon: SteeringIcon,
  },
  {
    name: "Task Boards",
    icon: PresentationCheckIcon,
    activeIcon: PresentationCheckIconSolid,
  },
  {
    name: "Meeting Rooms",
    icon: MeetingBoardIcon,
    activeIcon: MeetingBoardIconSolid,
  },
  {
    name: "Outsource",
    icon: UsersAltIcon,
    activeIcon: UsersAltIconSolid,
  },
  {
    name: "Develop",
    icon: CodeBranchIcon,
    activeIcon: CodeBranchIconSolid,
  },
  {
    name: "Insights",
    icon: ChartIcon,
    activeIcon: ChartIconSolid,
  },
];

export const sidebarLowerLinks = [
  {
    name: "Hydra",
    icon: TearIcon,
    activeIcon: TearIconSolid,
  },
  {
    name: "Settings",
    icon: CogIcon,
    activeIcon: CogIconSolid,
  },
];
