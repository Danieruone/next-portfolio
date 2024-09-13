import React from "react";
import { ProjectCard } from "./ProjectCard";
import { useTranslations } from "next-intl";

export const ProjectsSection = () => {
  const t = useTranslations("HomePage");
  const projectLabel = useTranslations("Projects");
  return (
    <section className="mt-10 border-b pb-10 border-gray-500 border-1">
      <h2 className="font-light">{t("MyProjects")}</h2>
      <div className="mt-5 flex flex-wrap gap-5 justify-center">
        <ProjectCard
          image="/projects/acufast.webp"
          title={projectLabel("Acufast.Title")}
          description={projectLabel("Acufast.Description")}
          techStack={["Next js", "Typescript"]}
          projectLink="https://www.acufastswine.com/en"
        />
        <ProjectCard
          image="/projects/netflix-clone.webp"
          title={projectLabel("Netflix.Title")}
          description={projectLabel("Netflix.Description")}
          techStack={["React", "Typescript"]}
          projectLink="https://netflix-ui-alpha.vercel.app/"
          githubLink="https://github.com/Danieruone/netflix-ui"
        />
        <ProjectCard
          image="/projects/music-finder.webp"
          title={projectLabel("MusicFinder.Title")}
          description={projectLabel("MusicFinder.Description")}
          techStack={["React", "Typescript"]}
          projectLink="https://music-finder.vercel.app/"
          githubLink="https://github.com/Danieruone/music-finder"
        />
      </div>
    </section>
  );
};
