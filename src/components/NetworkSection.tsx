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
      <NetworkChip icon={<RiLinkedinBoxFill size={20} />} title="Linkedin" />
      <NetworkChip icon={<FaGithub size={20} />} title="Github" />
      <NetworkChip icon={<FaSquareXTwitter size={20} />} title="Twitter" />
    </div>
  );
};
