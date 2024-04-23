import React from "react";
import { Carousel } from "@material-tailwind/react";
const images = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];

function ImageCarousel() {
  return (
    <Carousel
      autoplay
      loop
      autoplayDelay={7000}
      transition={{ duration: 1.9 }}
      className="rounded-b-3xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute top-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 bg-accent/50 hover:bg-accent/80 p-2 rounded-full">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images.map((image, index) => (
        <div key={index} className="relative h-full w-full">
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
}
export default ImageCarousel;
