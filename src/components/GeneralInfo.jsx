import React, { useState } from "react";
import { MdOutlineInfo } from "react-icons/md";
import { isCompanyOpenNow } from "../lib/isCompanyOpen";

function GeneralInfo() {
  const [open, setOpen] = useState(isCompanyOpenNow());
  const handleInfoClick = () => {
    const businessHours = document.getElementById("business-hours");
    if (businessHours) {
      businessHours.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:justify-between">
      <div className="flex gap-4">
        <img
          src={"/vite.svg"}
          alt={`Logo`}
          className="h-[2rem] w-auto object-cover self-center"
        />
        <div>
          <h1 className="font-bold text-xl text-accent">Some Paint Company </h1>
          <h2 className="italic  text-accent">Located In Some Place </h2>
        </div>
      </div>
      <h1
        onClick={handleInfoClick}
        className={`font-semibold py-1 px-2 h-fit w-fit rounded-md text-white flex items-center gap-2 cursor-pointer ${
          open ? "bg-accent " : "bg-red-600"
        } `}
      >
        {open ? "Open Now" : "Closed"}
        <span>
          <MdOutlineInfo />
        </span>
      </h1>
    </div>
  );
}

export default GeneralInfo;
