import React from "react";
import { MdInfo } from "react-icons/md";

function AboutUsSection() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex justify-start items-center w-full gap-2 text-accent/80">
        <MdInfo className="w-[1.5rem] h-auto" />
        <h2 className="font-semibold ">About Us</h2>
      </div>
      <p className="text-justify ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla
        praesentium nihil in harum magni ipsam sequi sed atque aspernatur
        repellat, quisquam sapiente, modi autem voluptate minima nobis culpa
        fugit, eos deleniti blanditiis eveniet neque. Consequatur nihil
        voluptatibus hic maxime mollitia rem veniam nisi quidem quam illo,
        ratione quod dolore eaque ullam dolores nemo! Perspiciatis molestias,
        corporis consequuntur dolores exercitationem assumenda culpa enim minus
        possimus laboriosam, neque commodi dicta accusamus numquam, nemo
        excepturi dolorem cupiditate hic voluptates eius ipsam odit aliquam
        ipsum. Qui eaque corrupti ipsum labore dolores maxime iure rerum eum
        nemo, libero, magni quas atque culpa. Quo beatae iusto labore est
        possimus deleniti aut tempora qui, incidunt porro sint veritatis
        doloribus corporis temporibus harum molestiae, ducimus ratione odit!
      </p>
    </div>
  );
}

export default AboutUsSection;
