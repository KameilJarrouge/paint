import React from "react";
import GeneralInfo from "./GeneralInfo";
import ContactInfo from "./ContactInfo";

function MainCard() {
  return (
    <div className="w-full  bg-background shadow-md shadow-accent/70 rounded-md p-5 flex flex-col gap-0 md:gap-4">
      {/* General Info */}
      <GeneralInfo />
      {/* Contact Info */}
      <ContactInfo />
    </div>
  );
}

export default MainCard;
