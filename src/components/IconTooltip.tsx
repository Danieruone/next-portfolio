"use client";

import React, { useState } from "react";

export const IconTooltip = ({
  link,
  icon,
  label,
}: {
  link: string;
  icon: React.ReactElement;
  label: string;
}) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  return (
    <a
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      href={link}
      target="_blank"
      aria-label={label}
    >
      {icon}
      <div
        className={`${
          showTooltip ? "block" : "hidden"
        } absolute bg-gray-900 text-center top-[-35px] p-1 rounded-xl left-[-5rem] w-48 text-[.8rem]`}
      >
        {label}
      </div>
    </a>
  );
};
