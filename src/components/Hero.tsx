import React from "react";
import Image from "next/image";
import hero from "../../public/images/heroimg1.png";
import herostar from "../../public/images/herostar.png";

export const Hero = () => {
  return (
    <div className=" bg-gray-200">
      <div className="px-4 sm:px-8 lg:px-16">
        <div className="sm:flex">
          <div className="space-y-3 sm:w-1/2 sm:pt-20 md:pb-4">
            <h1 className="[font-size:clamp(2.25rem,4vw+1rem,5rem)] font-[900] leading-none">
              FIND CLOTHES
              <br /> THAT MATCHES
              <br /> YOUR STYLE
            </h1>
            <p className="[font-size:clamp(0.876rem,2vw,1rem)] leading-5 opacity-50">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className=" w-full sm:w-auto py-3 px-12 text-lg text-white bg-black rounded-full hover:scale-[1.05] duration-300">
              Shop Now
            </button>
            <div className="sm:hidden">
              <div className="flex justify-evenly mb-3">
                <div>
                  <p className="text-2xl font-bold">200+</p>
                  <p className="text-xs">International Brands</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">2,000+</p>
                  <p className="text-xs">High-Quallity Products</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">3,000+</p>
                <p className="text-xs">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="relative sm:w-1/2">
            <div className="absolute top-14 right-3">
              <Image src={herostar} alt="herostar" />
            </div>
            <div className="absolute top-[200px] left-[40px] w-[44px]">
              <Image src={herostar} alt="herostar" />
            </div>
            <div className="flex h-full">
              <Image
                src={hero}
                alt="hero"
                className="object-fill flex-1 sm:min-h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
