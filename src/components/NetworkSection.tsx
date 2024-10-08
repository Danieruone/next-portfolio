import React from "react";

// icons
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

// components
import { NetworkChip } from "./NetworkChip";

export const NetworkSection = () => {
  return (
    <div className="flex justify-center">
      <NetworkChip
        icon={<RiLinkedinBoxFill size={20} />}
        title="Linkedin"
        link="https://www.linkedin.com/in/daniel-mendoza-developer/"
      />
      <NetworkChip
        icon={<FaGithub size={20} />}
        title="Github"
        link="https://github.com/Danieruone"
      />
    </div>
  );
};
