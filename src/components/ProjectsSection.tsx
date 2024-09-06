import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  return (
    <div className="mt-10 border-b pb-10 border-gray-500 border-1">
      <h2 className="font-light">My proyects</h2>
      <div className="mt-5 flex flex-wrap gap-5 justify-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
