import React from "react";

function MainCard() {
  return (
    <div className="w-full min-h-[10rem] bg-background shadow-md shadow-accent rounded-md p-5">
      <div className="flex gap-4 items-center">
        <div>
          <img
            src={"/vite.svg"}
            alt={`Logo`}
            className="h-[2rem] w-auto object-cover"
          />
        </div>
        <div className="">
          <h1 className="font-bold text-xl text-accent">Some Paint Company </h1>
          <h2 className="italic  text-accent">Located In Some Place </h2>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
