"use client";

import React from "react";

// icons
import { FaExternalLinkAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="pt-10">
      <h1 className="font-semibold text-2xl text-[#E2E3E3]">
        Let’s work together!
      </h1>
      <div
        className="bg-[#333639] flex justify-center items-center m-2 rounded-full p-2 hover:bg-gray-700 transition-all hover:cursor-pointer mt-5"
        onClick={() => (window.location.href = "mailto:danieruone@gmail.com")}
      >
        <div className="mr-2 flex items-center">
          <h1 className="mr-3">Contact</h1>
          <FaExternalLinkAlt />
        </div>
      </div>
    </div>
  );
};
