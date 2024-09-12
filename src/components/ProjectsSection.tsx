import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  return (
    <section className="mt-10 border-b pb-10 border-gray-500 border-1">
      <h2 className="font-light">My projects</h2>
      <div className="mt-5 flex flex-wrap gap-5 justify-center">
        <ProjectCard
          image="/projects/acufast.webp"
          title="Acufast Landing Page"
          description="Landing page for STgenetics company project."
          techStack={["Next js", "Typescript"]}
          projectLink="https://www.acufastswine.com/en"
        />
        <ProjectCard
          image="/projects/netflix-clone.webp"
          title="Netflix clone"
          description="A perfect UI clone with hover video functionality."
          techStack={["React", "Typescript"]}
          projectLink="https://netflix-ui-alpha.vercel.app/"
          githubLink="https://github.com/Danieruone/netflix-ui"
        />
        <ProjectCard
          image="/projects/music-finder.webp"
          title="Music finder"
          description="A music finder implementing the Spotify API to search any song."
          techStack={["React", "Typescript"]}
          projectLink="https://music-finder.vercel.app/"
          githubLink="https://github.com/Danieruone/music-finder"
        />
      </div>
    </section>
  );
};
