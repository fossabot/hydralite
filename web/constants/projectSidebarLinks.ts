import {
  HomeIcon,
  GroupIcon,
  RoadIcon,
  TaskIcon,
  MeetingIcon,
  OutSourceIcon,
  DevelopIcon,
  InsightsIcon,
  MoreIcon,
  HydraIcon,
  SettingsIcon,
} from "~/components/Icons";
import { ProjectPageProps } from "~/types/ProjectPageProps";

export const projectSidebarUpperLinks: ProjectPageProps[] = [
  {
    name: "home",
    title: "Home",
    logo: HomeIcon,
  },
  {
    name: "feed",
    title: "Feed",
    logo: GroupIcon,
  },
  {
    name: "roadmap",
    title: "Roadmap",
    logo: RoadIcon,
  },
  {
    name: "tasks",
    title: "Task Boards",
    logo: TaskIcon,
  },
  {
    name: "meetings",
    title: "Meeting Rooms",
    logo: MeetingIcon,
  },
  {
    name: "outsource",
    title: "Outsource",
    logo: OutSourceIcon,
  },
  {
    name: "develop",
    title: "Develop",
    logo: DevelopIcon,
  },
  {
    name: "insights",
    title: "Insights",
    logo: InsightsIcon,
  },
  {
    name: "more",
    title: "More",
    logo: MoreIcon,
  },
];

export const projectSidebarLowerLinks: ProjectPageProps[] = [
  {
    name: "hydra",
    title: "Hydra",
    logo: HydraIcon,
  },
  {
    name: "settings",
    title: "Settings",
    logo: SettingsIcon,
  },
];
