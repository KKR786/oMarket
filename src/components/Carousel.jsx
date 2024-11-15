'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

function Carousel({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      };
    
      const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      };
    
      const handleDotClick = (index) => {
        setCurrentSlide(index);
      };

      useEffect(() => {
        const intervalId = setInterval(() => {
          handleNext();
        }, 5000);
    
        return () => clearInterval(intervalId);
      }, []);

      if (!slides) {
        return (
            <>
                <p className="text-center">Please pass the slides</p>
            </>
        );
      }
  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden md:h-96">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${index === currentSlide ? "block" : "hidden"}`}
              data-carousel-item
            >
              <Image
                src={slide}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Slide ${index + 1}`}
                width={56}
                height={56}
              />
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-500"}`}
              aria-current={currentSlide === index ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
  )
}

export default Carousel
