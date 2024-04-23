import { useState } from "react";
import Gallery from "./components/Gallery";
import ImageCarousel from "./components/ImageCarousel";
import MainCard from "./components/MainCard";
import TopNavigation from "./components/TopNavigation";
import ImageDialog from "./components/Dialog";

function App() {
  const [src, setSrc] = useState("");
  return (
    <main className="flex flex-col justify-start items-center relative ">
      <div id="top" className=""></div>
      <div className="w-full h-[50vh] md:h-[80vh] ">
        <ImageCarousel />
      </div>

      <div className="w-full md:w-[65vw] -translate-y-20 min-h-[10rem] flex flex-col items-center gap-8 px-2 md:px-0">
        <MainCard />

        <p id="business-hours" className="w-full text-foreground ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum
          repudiandae eos incidunt quasi sed culpa excepturi est, voluptate
          recusandae quaerat, odit totam nesciunt quis quod nisi libero error
          consequatur?
        </p>

        <Gallery setSrc={setSrc} />
      </div>

      <ImageDialog src={src} close={() => setSrc("")} />
      <TopNavigation />
    </main>
  );
}

export default App;
