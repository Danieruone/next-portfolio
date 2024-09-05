import React from "react";

export const NetworkChip = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="bg-[#333639] w-36 flex justify-center items-center m-2 rounded-full p-2">
      <div className="mr-2">{icon}</div>
      {title}
    </div>
  );
};
