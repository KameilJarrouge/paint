import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

function ContactInfo() {
  return (
    <div className="w-full flex flex-wrap gap-4 py-2">
      <a
        href="tel:(123) 123-1234"
        className="bg-callToAction/90 hover:bg-callToAction cursor-pointer text-white p-2 rounded-md flex gap-4 items-center"
      >
        <MdPhone className="w-[1.5rem] h-[1.5rem]" />
        <span>Call (123) 123-1234</span>
      </a>
      <a
        href="mailto:test@gmail.com"
        className="bg-callToAction/90 hover:bg-callToAction cursor-pointer text-white p-2 rounded-md flex gap-4 items-center"
      >
        <MdEmail className="w-[1.5rem] h-[1.5rem]" />
        <span>Email test@gmail.com</span>
      </a>
    </div>
  );
}

export default ContactInfo;
