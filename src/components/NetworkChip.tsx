import React from "react";

export const NetworkChip = ({
  icon,
  title,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  link: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-[#333639] transition-all text-white w-36 flex justify-center items-center m-2 rounded-full p-2 hover:bg-gray-700 hover:cursor-pointer"
    >
      <div className="mr-2">{icon}</div>
      {title}
    </a>
  );
};
