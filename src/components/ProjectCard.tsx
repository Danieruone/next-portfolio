import Image from "next/image";
import React from "react";

export const ProjectCard = () => {
  return (
    <div className="w-80 h-80 bg-[#333639] rounded-lg px-2 cursor-pointer transition-all hover:bg-gray-700">
      <div className="my-3">
        <h2>My app</h2>
        <p className="text-[.9rem] text-[#888b8f]">Description of the app</p>
      </div>
      <div className="flex justify-center m-1">
        <Image
          src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=800"
          width={400}
          height={400}
          alt="Image of the project"
          className="rounded-lg"
        />
      </div>
      <div className="mt-5">
        <h3 className="border border-gray-500 inline-block px-2 rounded-xl text-sm font-light mr-1">
          React
        </h3>
        <h3 className="border border-gray-500 inline-block px-2 rounded-xl text-sm font-light">
          Typescript
        </h3>
      </div>
    </div>
  );
};
