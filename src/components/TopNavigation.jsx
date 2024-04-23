import React from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

function TopNavigation() {
  const handleNavToTop = () => {
    const top = document.getElementById("top");
    if (top) top.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      onClick={handleNavToTop}
      className="w-[3rem] h-[3rem] bg-accent/40 hover:bg-accent text-white/40 hover:text-white rounded-full bottom-4 right-8 sticky self-end flex justify-center items-center cursor-pointer"
    >
      <IoMdArrowRoundUp className="w-[2rem] h-auto" />
    </div>
  );
}

export default TopNavigation;
