import React from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";

export default function ImageDialog({ src, close }) {
  return (
    <Dialog
      size="xl"
      open={!!src}
      handler={close}
      className="bg-transparent shadow-none outline-none"
    >
      <DialogBody>
        <img
          onClick={close}
          alt="nature"
          className="h-auto w-full max-h-[80vh] rounded-lg object-cover object-center"
          src={src}
        />
      </DialogBody>
    </Dialog>
  );
}
