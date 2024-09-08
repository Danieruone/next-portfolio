import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  return (
    <section className="mt-10 border-b pb-10 border-gray-500 border-1">
      <h2 className="font-light">My proyects</h2>
      <div className="mt-5 flex flex-wrap gap-5 justify-center">
        <ProjectCard
          image="/projects/netflix-clone.png"
          title="Netflix clone"
          description="A perfect UI clone with hover video functionality."
          techStack={["React"]}
          projectLink="https://netflix-ui-alpha.vercel.app/"
          githubLink="https://github.com/Danieruone/netflix-ui"
        />
        <ProjectCard
          image="/projects/music-finder.png"
          title="Music finder"
          description="A music finder implementing the Spotify API to search any song."
          techStack={["React"]}
          projectLink="https://music-finder.vercel.app/"
          githubLink="https://github.com/Danieruone/music-finder"
        />
      </div>
    </section>
  );
};
