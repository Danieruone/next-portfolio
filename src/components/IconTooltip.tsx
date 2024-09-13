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
      className="relative p-2"
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
        } absolute left-1/2 -translate-x-1/2 top-[-35px] bg-gray-900 text-center p-2 rounded-xl text-[.8rem] whitespace-nowrap`}
      >
        <p>{label}</p>
      </div>
    </a>
  );
};
