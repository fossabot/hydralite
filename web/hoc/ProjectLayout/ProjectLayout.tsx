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
        <div className="flex w-full h-full justify-between items-center">
            <Sidebar {...{selected, project}} />
            <div className="flex flex-col w-full h-full justify-between items-center">
                <Navbar avatar={'/avatar.png'} />
                <div className="flex flex-col justify-center items-center">
                    {children}
                </div>
            </div>
        </div>
    );
};
