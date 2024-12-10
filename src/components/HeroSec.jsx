import { useState, useEffect } from "react";
import Picture1 from "../assets/images/Shopbag1.png";
import Picture2 from "../assets/images/shopbag2.png";
import Picture3 from "../assets/images/shopbag3.png";
import Picture4 from "../assets/images/shopbag4.png";

const HeroSec = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [Picture1, Picture2, Picture3, Picture4];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Automatically move to the next slide
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="main-hero h-screen w-full bg-orange-400 relative">
      {/* Hero Left Section */}
      <div className="hero-left w-full md:w-[50%] absolute top-[25%] left-[5%] text-center md:text-left">
        <h1 className="text-4xl md:text-[120px] font-bold p-5">Welcome To</h1>
        <h1 className="text-3xl md:text-5xl font-bold flex justify-center md:justify-start mt-4 md:ml-32 p-5">
          <p className="text-5xl md:text-7xl">E</p>
          <p className="mt-2 md:mt-3 ml-1 text-orange-700 ">COMMERCE</p>
        </h1>
      </div>

      {/* Hero Right Section */}
      <div className="hero-right h-[50%] md:h-full w-full md:w-[50%] absolute md:right-0 top-[50%] md:top-[0%] transform md:translate-y-0 -translate-y-1/2">
        {/* Carousel */}
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          {/* Carousel Items */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute block w-full h-full object-cover transition-opacity duration-700 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
