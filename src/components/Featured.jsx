'use client'

import { useState, useEffect } from "react";
import React from 'react'
import Image from "next/image";
import { addToCart } from "@/helper";

function Featured() {
      const [startIndex, setStartIndex] = useState(0);
      const [products, setProducts] = useState([]);
    
      const slidesToShow = 4;

      useEffect(() => {
        const fetchProducts = async () => {
            try {
              const res = await fetch("http://localhost:2006/api/products", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              });
              
              const json = await res.json();
              if (res.ok) {
                setProducts(json);
              } else {
                console.log(json.error || 'Failed to fetch products');
              }
            } catch (error) {
              console.log('Error fetching products:', error);
            }
          };
      
          fetchProducts();
        }, []);
    
      const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % (products.length - slidesToShow + 1));
      };
    

      const handlePrev = () => {
        setStartIndex((prevIndex) => {
          return prevIndex === 0
            ? products.length - slidesToShow
            : prevIndex - 1;
        });
      };
    

      const visibleSlides = products.slice(startIndex, startIndex + slidesToShow);

      console.log('f: ',visibleSlides, products)

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
        className="absolute top-10 left-auto right-[78px] z-30 flex items-center justify-center cursor-pointer group focus:outline-none"
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
        className="absolute top-10 left-auto right-10 border-l border-slate-600 z-30 flex items-center justify-center cursor-pointer group focus:outline-none"
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
      <div className="relative flex overflow-hidden transition-transform duration-500 ease-in-out gap-x-4">
        {visibleSlides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full md:w-[calc(25%-16px)]">
            <Image
              src={`http://localhost:2006/${slide.images[0].replace(/\\/g, "/")}`}
              alt={`Slide ${startIndex + index + 1}`}
              className="block w-full h-auto rounded-lg"
              width={58}
              height={58}
            />
            <div className="px-4 py-2">
            <p className="font-semibold">{slide.name}</p>
            <div className="flex justify-between items-center">
                <div className="flex gap-x-4">
                    <span>{slide.price}</span>
                    {/* <span className="line-through">$350</span> */}
                </div>
                <div className="flex text-gray-800 gap-x-4">
                    <button title="Add to cart" onClick={() => addToCart(slide._id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-green-800"><path d="M9,22c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm8-2c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6.32-15.9c-.57-.7-1.42-1.1-2.32-1.1h-7v6.5l1.32-1.23c.41-.38,1.04-.36,1.41,.05,.38,.4,.35,1.04-.05,1.41l-1.59,1.48c-.57,.57-1.33,.86-2.09,.86s-1.54-.29-2.13-.88l-1.56-1.46c-.4-.38-.42-1.01-.05-1.41,.38-.4,1.01-.43,1.41-.05l1.32,1.23V3H5.24l-.04-.35c-.18-1.51-1.46-2.65-2.98-2.65H1C.45,0,0,.45,0,1s.45,1,1,1h1.22c.51,0,.93,.38,.99,.88l1.38,11.7c.3,2.52,2.43,4.42,4.97,4.42h9.44c.55,0,1-.45,1-1s-.45-1-1-1H9.56c-1.29,0-2.4-.83-2.82-2h11.42c2.38,0,4.44-1.69,4.9-4.02l.88-4.39c.18-.88-.05-1.79-.62-2.49Z"/></svg>
                    </button>

                    <button title="View">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-green-800">
                            <path d="M23.561,21.439l-5.514-5.514c1.225-1.66,1.959-3.703,1.959-5.92C20.006,4.492,15.52,.006,10.006,.006S.006,4.492,.006,10.006s4.486,10,10,10c2.216,0,4.26-.734,5.92-1.959l5.514,5.514c.293,.293,.677,.439,1.061,.439s.768-.146,1.061-.439c.586-.586,.586-1.535,0-2.121Zm-13.555-4.434c-3.859,0-7-3.141-7-7S6.146,3.006,10.006,3.006s7,3.14,7,7-3.141,7-7,7Zm5.691-7.926c-.901-1.285-2.697-3.08-5.697-3.08-3.052,0-4.858,1.859-5.743,3.147-.354,.515-.354,1.191,0,1.706,.885,1.287,2.692,3.147,5.743,3.147,2.999,0,4.796-1.796,5.697-3.08,.393-.56,.393-1.279,0-1.84Zm-5.697,2.92c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Featured
