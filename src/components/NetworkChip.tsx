import React from "react";

export const NetworkChip = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="bg-gray-700 text-white w-36 flex justify-center items-center m-2 rounded-full p-2 hover:bg-gray-600 hover:cursor-pointer">
      <div className="mr-2">{icon}</div>
      {title}
    </div>
  );
};
