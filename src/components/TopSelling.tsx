import React from "react";
import Image from "next/image";
import shirt from "../../public/images/sellingshirt.png";
import tshirt from "../../public/images/shellingtshirt.png";
import short from "../../public/images/short.png";
import jeans from "../../public/images/sellingjeans.png";
import star1 from "../../public/images/shirtstar.svg";
import star2 from "../../public/images/tshirtstar.svg";
import star3 from "../../public/images/shortstar.svg";
import star4 from "../../public/images/jeansstar.svg";

export const TopSelling = () => {
  return (
    <>
      <section className="top-selling">
        <div className="px-4 pt-12 sm:pt-16 sm:px-8 lg:px-16">
          <h1 className="text-center mb-10 font-[900] text-[32px] sm:text-5xl ">
            Top Selling
          </h1>
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className=" bg-gray-300 rounded-xl flex mb-4">
                  <Image
                    src={shirt}
                    alt="shirt"
                    className="object cover flex-1"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold sm:text-xl">
                    Vertical Striped Shirt
                  </p>
                  <div className="space-y-1">
                    <Image src={star1} alt="stars" />
                    <div className="flex gap-2">
                      <p className="font-bold text-xl sm:text-2xl">$212</p>
                      <p className="font-bold text-xl sm:text-2xl line-through opacity-40">
                        $232
                      </p>
                      <p className="bg-red-200 text-[10px] py-1 px-2 sm:text-sm ml-2 text-center border-2 border-red-300 rounded-3xl">
                        -20%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className=" bg-gray-300 rounded-xl flex mb-4">
                  <Image
                    src={tshirt}
                    alt="tshirt"
                    className="flex-1 object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold sm:text-xl">
                    Clourage Graphic T-shirt
                  </p>
                  <div className="space-y-1">
                    <Image src={star2} alt="stars" />
                    <p className="font-bold text-xl sm:text-2xl">$145</p>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block">
                <div className=" bg-gray-300 rounded-xl flex justify-center mb-4">
                  <Image
                    src={short}
                    alt="short"
                    className="object-cover flex-1"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold sm:text-xl">
                    Loose Fit Bermuda Shorts
                  </p>
                  <div className="space-y-1">
                    <Image src={star3} alt="stars" />
                    <p className="font-bold text-xl sm:text-2xl">$80</p>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block">
                <div className=" bg-gray-300 rounded-xl flex justify-center mb-4">
                  <Image
                    src={jeans}
                    alt="tshirt"
                    className="object-cover flex-1"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold sm:text-xl">
                    Faded Skinny Jeans
                  </p>
                  <div className="space-y-1">
                    <Image src={star4} alt="stars" />
                    <p className="font-bold text-xl sm:text-2xl">$210</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="w-full sm:w-[230px] sm:object-center text-center py-3 px-12 text-lg bg-white text-black border-2 border-gray-300 rounded-full hover:bg-black hover:text-white cursor-pointer hover:border-black transition ease-linear duration-300">
              View All
            </button>
          </div>
        </div>
      </section>
      {/* <div><h1 className='text-center my-8 font-bold text-4xl'>TOP SELLING</h1>
        <div className='container grid grid-cols-2 md:grid-cols-4 mx-auto'>
        <div className=''><Image src={shirt} alt='tshirt'/>
         <p className='text-lg font-bold ml-2'>Vertical Striped Shirt</p>
         <div className='ml-2'><Image src={star1} alt='stars' />
         <p className='font-bold text-lg'>$212 <span className='font-bold text-lg opacity-50 line-through'>$232</span></p>
        </div>
      </div>
      <div><Image src={tshirt} alt='jeans'/>
        <p className='text-lg font-bold ml-2'>Courage Graphic T-shirt</p>
         <div className='ml-2'><Image src={star2} alt='stars' />
         <p className='font-bold text-lg'>$145</p>
        </div>
      </div>

      <div className='hidden md:block'><Image src={short} alt='shirt'/>
        <p className='text-lg font-bold'>Loose Fit Bermuda Shorts</p>
        <div><Image src={star3} alt='stars' />
        <p className='font-bold text-lg'>$80</p>
        </div>
      </div>

      <div className='hidden md:block'><Image src={jeans} alt='tshirt2'/>
        <p className='text-lg font-bold'>Faded Skinny Jeans</p>
        <div><Image src={star4} alt='stars' />
        <p className='font-bold text-lg'>$210</p>
        </div>
      </div>
      </div>
    </div>
    <div className="flex justify-center ">
    <button className="inline-flex text-black bg-gray-300 my-3 rounded border-0 py-3 px-12 focus:outline-none text-lg">View All</button>
</div> */}
    </>
  );
};
