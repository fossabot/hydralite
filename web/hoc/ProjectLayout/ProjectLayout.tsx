import React from "react";
import { Navbar } from "~/components/ProjectLayout/Navbar";
import { Sidebar } from "~/components/ProjectLayout/Sidebar/Sidebar";
import { ProjectPage } from "~/types/ProjectPageProps";


export interface ProjectLayoutProps {
    project: string;
    selected: ProjectPage;
}

export const ProjectLayout: React.FC<ProjectLayoutProps> = ({ project, selected, children }) => {
    return (
        <div className="flex w-screen h-screen justify-between items-center">
            <Sidebar selected={selected} />
            <div className="flex flex-col w-full h-screen justify-between items-center">
                <Navbar avatar="/avatar.png" />
                <div className="flex flex-col w-full h-full justify-center items-center pb-20 pr-64">{children}</div>
            </div>
        </div>
    );
};