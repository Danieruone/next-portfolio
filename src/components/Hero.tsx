"use client";

import Image from "next/image";
import React from "react";
import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center pb-10">
      <Image
        src={"/profile.jpg"}
        width={200}
        height={100}
        alt="Profile image"
        className="rounded-full aspect-square object-cover object-[top]"
      />
      <h1 className="mt-5 mb-3 font-semibold text-5xl text-[#E2E3E3]">
        Daniel Mendoza
      </h1>
      <p className="font-light">
        <ReactTyped
          strings={[
            "Software engineer / Front-end developer",
            "Changing the world through technology",
          ]}
          typeSpeed={100}
        />
      </p>
    </div>
  );
};
