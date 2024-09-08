import React from "react";
import Image from "next/image";

// icons
import { FaGithub } from "react-icons/fa";

const defaultImage =
  "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=800";

export const ProjectCard = ({
  image = defaultImage,
  title,
  description,
  techStack,
  projectLink,
}: {
  image?: string;
  title: string;
  description: string;
  techStack: string[];
  projectLink: string;
}) => {
  return (
    <a
      href={projectLink}
      target="_blank"
      className="w-80 h-80 bg-[#333639] rounded-lg px-2 cursor-pointer transition-all hover:bg-gray-700"
    >
      <div className="my-3">
        <div className="flex justify-between items-center">
          <h2>{title}</h2>
          <div className="flex">
            <FaGithub className="mr-2" size={20} />
          </div>
        </div>
        <p className="text-[.9rem] text-[#888b8f] h-10 my-2">{description}</p>
      </div>
      <div className="flex justify-center m-1">
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
            className="border border-gray-500 inline-block px-2 rounded-xl text-sm font-light mr-1 text-[#888b8f]"
            key={key}
          >
            {technology}
          </h3>
        ))}
      </div>
    </a>
  );
};
