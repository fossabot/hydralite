import { HomeIcon, GroupIcon, RoadIcon, TaskIcon, MeetingIcon, OutSourceIcon, DevelopIcon, InsightsIcon, MoreIcon, HydraIcon, SettingsIcon, UseableIcon } from "~/components/Icons";

export const Pages = ['home', 'groups', 'roadmap', 'tasks', 'meetings', 'outsource', 'develop', 'insights', 'more', 'hydra', 'settings'] as const;
export type Page = typeof Pages[number];

export interface PageProps {
    name: Page;
    title: string;
    logo: typeof UseableIcon;
}

export const upper_pages: PageProps[] = [
    {
        name: 'home',
        title: 'Home',
        logo: HomeIcon
    },
    {
        name: 'groups',
        title: 'Groups',
        logo: GroupIcon
    },
    {
        name: 'roadmap',
        title: 'Roadmap',
        logo: RoadIcon
    },
    {
        name: 'tasks',
        title: 'Task Boards',
        logo: TaskIcon
    },
    {
        name: 'meetings',
        title: 'Meeting Rooms',
        logo: MeetingIcon
    },
    {
        name: 'outsource',
        title: 'Outsource',
        logo: OutSourceIcon
    },
    {
        name: 'develop',
        title: 'Develop',
        logo: DevelopIcon
    },
    {
        name: 'insights',
        title: 'Insights',
        logo: InsightsIcon
    },
    {
        name: 'more',
        title: 'More',
        logo: MoreIcon
    }
];

export const lower_pages: PageProps[] = [
    {
        name: 'hydra',
        title: 'Hydra',
        logo: HydraIcon
    },
    {
        name: 'settings',
        title: 'Settings',
        logo: SettingsIcon
    }
];