'use client'

import { useState, useEffect } from "react";
import React from 'react'
import Image from "next/image";

function Featured() {
    const slides = [
        "https://placehold.co/600x400",
        "https://placehold.co/600x400/orange/white",
        "https://placehold.co/600x400/blue/white",
        "https://placehold.co/600x400/blue/yellow",
        "https://placehold.co/600x400/blue/red",
        "https://placehold.co/600x400/green/black"
      ];
    
      const [startIndex, setStartIndex] = useState(0);
    
      const slidesToShow = 4;
    
      const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % (slides.length - slidesToShow + 1));
      };
    

      const handlePrev = () => {
        setStartIndex((prevIndex) => {
          return prevIndex === 0
            ? slides.length - slidesToShow
            : prevIndex - 1;
        });
      };
    

      const visibleSlides = slides.slice(startIndex, startIndex + slidesToShow);

      useEffect(() => {
        const intervalId = setInterval(() => {
          handleNext();
        }, 5000);
    
        return () => clearInterval(intervalId);
      }, []);
  return (
    <div className="px-6 py-12 relative">
      <h2 className="relative uppercase border-b-2 border-solid border-[#eee] pb-2 mb-5 after:-bottom-[2px] after:bg-[#f02640] after:h-[3px] after:absolute after:left-0 after:w-[90px]">
        featured
      </h2>

      <button
        type="button"
        className="absolute top-3 left-auto right-[78px] z-30 flex items-center justify-center cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg className="w-4 h-4 text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-3 left-auto right-10 border-l border-slate-600 z-30 flex items-center justify-center cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg className="w-4 h-4 text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>

      <div className="relative w-full">
      <div className="relative flex overflow-hidden transition-transform duration-500 ease-in-out gap-x-2">
        {visibleSlides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full md:w-[calc(25%-8px)]">
            <Image
              src={slide}
              alt={`Slide ${startIndex + index + 1}`}
              className="block w-full h-auto rounded-lg"
              width={58}
              height={58}
            />
            <p className="font-semibold">Name</p>
            <div className="flex gap-x-4">
                <span>$300</span>
                <span className="line-through">$350</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Featured
