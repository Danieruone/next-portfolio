import React from "react";
import { useTranslations } from "next-intl";

export const AboutMe = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="mt-10 border-b pb-5 border-gray-500 border-1">
      <h2 className="font-light mb-3">{t("AboutMe")}</h2>
      <p className="text-[#a7a7a7]">{t("AboutMeDescription")}</p>
    </section>
  );
};
