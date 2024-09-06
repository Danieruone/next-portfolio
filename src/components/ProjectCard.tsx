import Image from "next/image";
import React from "react";

export const ProjectCard = () => {
  return (
    <div className="w-60 h-60 bg-[#333639] rounded-lg p-2 hover:w-64 hover:h-64 cursor-pointer transition-all">
      <div>
        <h3 className="border border-gray-500 inline-block px-2 rounded-xl text-sm font-light mr-1">
          React
        </h3>
        <h3 className="border border-gray-500 inline-block px-2 rounded-xl text-sm font-light">
          Typescript
        </h3>
      </div>
      <div className="my-2">
        <h2 className="text-[.9rem]">My app</h2>
        <p className="text-[.8rem] text-[#888b8f]">Description of the app</p>
      </div>
      <div className="flex justify-center m-1">
        <Image
          src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=800"
          width={250}
          height={250}
          alt="Image of the project"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};
