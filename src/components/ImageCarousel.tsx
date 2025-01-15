import img1 from "../assets/imgCarruselNuevo/img1-carruselnuevo.jpg";
import img2 from "../assets/imgCarruselNuevo/img2-carruselnuevo.jpg";
import img3 from "../assets/imgCarruselNuevo/img3-carruselnuevo.jpg";
import img4 from "../assets/imgCarruselNuevo/img4-carruselnuevo.jpg";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Image {
  id: number;
  url: string;
  alt: string;
}

const images: Image[] = [
  { id: 1, url: img1.src, alt: "Imagen 1 del carrusel" },
  { id: 2, url: img2.src, alt: "Imagen 2 del carrusel" },
  { id: 3, url: img3.src, alt: "Imagen 3 del carrusel" },
  { id: 4, url: img4.src, alt: "Imagen 4 del carrusel" },
];

export const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto p-6 sm:p-8 select-none overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Miniaturas */}
      <div className="flex gap-4 overflow-hidden pb-4 sm:grid sm:grid-cols-4 sm:gap-6">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`cursor-pointer overflow-hidden rounded-lg border transition-transform duration-500 ease-in-out ${
              index === activeIndex
                ? "border-primary scale-105 shadow-lg"
                : "opacity-50 hover:opacity-100"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-32 h-20 sm:w-full sm:h-40 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Imagen principal */}
      <div className="relative mt-6">
        <img
          src={images[activeIndex].url}
          alt={images[activeIndex].alt}
          className="w-full h-72 sm:h-[600px] object-fill rounded-lg shadow-lg"
        />

        {/* Botón Anterior */}
        <button
          onClick={handlePrevious}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition-all"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Botón Siguiente */}
        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition-all"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
