import React from "react";
import { MdImage, MdInfo } from "react-icons/md";
import Gallery from "./Gallery";

function PhotosSection({ setSrc }) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex justify-start items-center w-full gap-2 text-accent/80">
        <MdImage className="w-[1.5rem] h-auto" />
        <h2 className="font-semibold ">Photos</h2>
      </div>
      <Gallery setSrc={setSrc} />
    </div>
  );
}

export default PhotosSection;
