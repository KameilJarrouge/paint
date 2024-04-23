import Gallery from "./components/Gallery";
import ImageCarousel from "./components/ImageCarousel";
import MainCard from "./components/MainCard";
import TopNavigation from "./components/TopNavigation";

function App() {
  return (
    <main className="flex flex-col justify-start items-center">
      <div id="top" className=""></div>

      <div className="w-full h-[80svh] flex justify-center items-center ">
        <ImageCarousel />
      </div>

      <div className="w-full md:w-[65vw] md:-translate-y-20 min-h-[10rem] flex flex-col items-center gap-8 ">
        <MainCard />

        <p id="business-hours" className="w-full text-foreground ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum
          repudiandae eos incidunt quasi sed culpa excepturi est, voluptate
          recusandae quaerat, odit totam nesciunt quis quod nisi libero error
          consequatur?
        </p>

        <Gallery />
      </div>

      <TopNavigation />
    </main>
  );
}

export default App;
