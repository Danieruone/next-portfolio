"use client";

import React, { useState } from "react";

// icons
import { FaGithub } from "react-icons/fa6";

export const GithubTooltip = ({ link }: { link: string }) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  return (
    <a
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      href={link}
      target="_blank"
    >
      <FaGithub className="mr-2" size={20} />
      <div
        className={`${
          showTooltip ? "block" : "hidden"
        } absolute bg-gray-900 text-center top-[-35px] p-1 rounded-xl left-[-5rem] w-48 text-[.8rem]`}
      >
        Click to see the GitHub repo
      </div>
    </a>
  );
};
