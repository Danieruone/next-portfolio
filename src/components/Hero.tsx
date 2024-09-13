"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { ReactTyped } from "react-typed";
import { LanguageSelector } from "./LanguageSelector";

export const Hero = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col items-center pb-10 text-white">
      <div className="flex justify-end mb-3 w-full container m-auto">
        <LanguageSelector />
      </div>
      <Image
        src={"/profile.webp"}
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
        <ReactTyped strings={[t("HeroTitle")]} typeSpeed={100} />
      </p>
    </div>
  );
};
