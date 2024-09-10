"use client";

import Image from "next/image";
import React from "react";
import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center pb-10 text-white">
      <Image
        src={"/profile.jpg"}
        width={200}
        height={200}
        alt="Profile image"
        className="rounded-full aspect-square object-cover object-[top]"
        priority
      />
      <h1 className="mt-5 mb-3 font-bold text-5xl text-center">
        Daniel Mendoza
      </h1>
      <p className="font-semibold">
        <ReactTyped
          strings={["Software engineer / Front-end developer"]}
          typeSpeed={100}
        />
      </p>
    </div>
  );
};
