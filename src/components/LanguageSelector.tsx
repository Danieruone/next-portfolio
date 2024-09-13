import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "@/i18n/routing";

// icons
import { GrLanguage } from "react-icons/gr";

export const LanguageSelector = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isEnglish, setIsEnglish] = useState<boolean>(pathname.includes("en"));

  useEffect(() => {
    router.push("/", { locale: isEnglish ? "en" : "es" });
  }, [isEnglish, router, pathname]);

  return (
    <div
      className="cursor-pointer flex items-center"
      onClick={() => setIsEnglish(!isEnglish)}
    >
      <GrLanguage size={25} className="mr-2" />
      <span>{pathname.includes("en") ? "English" : "Español"}</span>
    </div>
  );
};
