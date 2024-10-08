import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

// components
import { IconTooltip } from "./IconTooltip";

// icons
import { FaGithub } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";

export const ProjectCard = ({
  image,
  title,
  description,
  techStack,
  projectLink,
  githubLink,
}: {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  projectLink: string;
  githubLink?: string;
}) => {
  const t = useTranslations("HomePage");
  return (
    <div className="w-80 bg-[#333639] rounded-lg p-2 transition-all">
      <div>
        <div className="flex justify-between items-center">
          <h2>{title}</h2>
          <div className="flex">
            <IconTooltip
              link={projectLink}
              icon={<FaCirclePlay size={20} className="mr-2" />}
              label={t("ClickDemo")}
            />
            {githubLink && (
              <IconTooltip
                link={githubLink}
                icon={<FaGithub size={20} />}
                label={t("ClickGitHub")}
              />
            )}
          </div>
        </div>
        <p className="text-[.9rem] text-[#a7a7a7] my-2 mb-3">{description}</p>
      </div>
      <div className="flex justify-center">
        <Image
          src={image}
          width={400}
          height={400}
          alt="Image of the project"
          className="rounded-lg"
        />
      </div>
      <div className="mt-5">
        {techStack.map((technology, key) => (
          <h3
            className="border border-gray-500 inline-block px-2 rounded-xl text-sm font-light mr-2 text-[#a7a7a7] text-[.8rem]"
            key={key}
          >
            {technology}
          </h3>
        ))}
      </div>
    </div>
  );
};
