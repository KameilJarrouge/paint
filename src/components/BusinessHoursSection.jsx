import React from "react";
import { MdDateRange, MdInfo } from "react-icons/md";
import HoursTable from "./HoursTable";

function BusinessHoursSection() {
  return (
    <div id="business-hours" className="w-full flex flex-col gap-4">
      <div className="flex justify-start items-center w-full gap-2 text-accent/80">
        <MdDateRange className="w-[1.5rem] h-auto" />
        <h2 className="font-semibold ">Business Hours (GMT)</h2>
      </div>
      <p className="text-justify ">
        <HoursTable />
      </p>
    </div>
  );
}

export default BusinessHoursSection;
