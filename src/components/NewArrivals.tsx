import React from "react";
import Image from "next/image";
import tshirt from "../../public/images/tshirt.png";
import shirt from "../../public/images/shirt.png";
import jeans from "../../public/images/jeans.png";
import tshirt2 from "../../public/images/tshirt2.png";
import stars3 from "../../public/images/stars.svg";
import stars4 from "../../public/images/jeansstar.svg";

import dis1 from "../../public/images/discount1.svg";
import dis2 from "../../public/images/discnt2.png";

export const NewArrivals = () => {
  return (
    <>
      <section className="new-arrivals">
        <div className="px-4 pt-12 sm:pt-16 sm:px-12 lg:px-16">
          <h1 className="text-center mb-10 font-[900] text-[32px] sm:text-5xl ">
            NEW ARRIVALS
          </h1>
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              <div>
                <div className="max-w-full bg-gray-200 rounded-xl flex">
                  <Image
                    src={tshirt}
                    alt="tshirt"
                    className="object cover flex-1"
                  />
                </div>
                <div>
                  <p className="text-base font-bold sm:text-xl">
                    T-shirt with Tape Details
                  </p>
                  <div className="">
                    <Image src={stars4} alt="stars" />
                    <p className="font-bold text-xl sm:text-2xl">$120</p>
                  </div>
                </div>
              </div>

              <div>
                <div className=" bg-gray-200 rounded-xl flex">
                  <Image
                    src={jeans}
                    alt="jeans"
                    className="flex-1 object-cover"
                  />
                </div>
                <div className="">
                  <p className="text-base font-bold sm:text-xl">
                    Skinny Fit Jeans
                  </p>
                  <div className="">
                    <Image src={stars3} alt="stars" />
                    <div className="flex gap-2">
                      <p className="font-bold text-xl sm:text-2xl">$240</p>
                      <p className="font-bold text-xl sm:text-2xl line-through opacity-40">$260</p>
                      <p className="bg-red-200 text-[10px] py-1 px-2 sm:text-sm ml-2 text-cente rounded-3xl">-20%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block">
                <div className=" bg-gray-200 rounded-xl flex justify-center">
                  <Image src={shirt} alt="shirt" className="object-cover flex-1" />
                </div>
                <div>
                  <p className="text-base font-bold sm:text-xl">
                    Checkered Shirt
                  </p>
                  <div className="">
                    <Image src={stars4} alt="stars" />
                    <p className="font-bold text-xl sm:text-2xl">$180</p>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block">
                <div className=" bg-gray-200 rounded-xl flex justify-center">
                  <Image
                    src={tshirt2}
                    alt="tshirt"
                    className="object-cover flex-1"
                  />
                </div>
                <div>
                  <p className="text-base font-bold sm:text-xl">
                    T-shirt with Tape Detail
                  </p>
                  <div className="">
                    <Image src={stars4} alt="stars" />
                    <p className="font-bold text-xl sm:text-2xl">$130</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8"><button className="w-full sm:w-[230px] sm:object-center text-center py-3 px-12 text-lg bg-white text-black border-2 border-gray-300 rounded-full hover:bg-black hover:text-white cursor-pointer hover:border-black transition ease-linear duration-300">
            Shop Now</button></div>
          <hr className="w-full border-gray-300 mt-[40px] sm:mt-16"/>
        </div>
      </section>
    </>
  );
};
