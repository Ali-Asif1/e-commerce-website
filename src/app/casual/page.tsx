import React from "react";
import Image from "next/image";
import downArrow from "../../../public/images/downarrow.svg";
import filter from "../../../public/images/adjust.png";
import range from "../../../public/images/range.png";
import shirt1 from "../../../public/images/shopshrit.png";
import shirt2 from "../../../public/images/polo1.png";
import shirt3 from "../../../public/images/shirt2.png";
import shirt4 from "../../../public/images/jeans.png";
import shirt5 from "../../../public/images/shirt.png";
import shirt6 from "../../../public/images/tshirt2.png";
import shirt7 from "../../../public/images/sellingshirt.png";
import shirt8 from "../../../public/images/shellingtshirt.png";
import shirt9 from "../../../public/images/short.png";
import shirt1star from "../../../public/images/stars.svg";
import shirt2star from "../../../public/images/jeansstar.svg";
import shirt3star from "../../../public/images/shirtstar.svg";
import shirtstar4 from "../../../public/images/stars.svg";
import shirtstar5 from "../../../public/images/jeansstar.svg";
import shirtstar8 from "../../../public/images/tshirtstar.svg";
import shirtstar9 from "../../../public/images/shortstar.svg";
import leftarrow from "../../../public/images/arrow-left.png";

const Casual = () => {
  return (
    <section className="casual-wearing">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16 ">
        <div className="flex items-center gap-2 mb-6 md:mb-9 pt-5 border-t-2 border-t-gray-300">
          <p className="opacity-35">Home</p>
          <Image
            src={downArrow}
            className="-rotate-90 opacity-35"
            alt="downarrow"
          />
          <p className="cursor-pointer">Casual</p>
        </div>

        <div className="flex flex-wrap">
          <div className="border border-gray-300 rounded-lg px-6 py-5 basis-[30%] hidden lg:block">
            <div className="filter">
              <div className="flex justify-between">
                <p className="font-semibold">Filters</p>
                <Image src={filter} className=" opacity-35" alt="filter" />
              </div>
              <hr className="border border-gray-300 my-6" />

              <div className="filter">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <p className="opacity-35">T-shirt</p>
                    <Image
                      src={downArrow}
                      className="-rotate-90 opacity-35"
                      alt="downarrow"
                    />
                  </div>
                  <div className="flex justify-between">
                    <p className="opacity-35">Shorts</p>
                    <Image
                      src={downArrow}
                      className="-rotate-90 opacity-35"
                      alt="downarrow"
                    />
                  </div>
                  <div className="flex justify-between">
                    <p className="opacity-35">Shirts</p>
                    <Image
                      src={downArrow}
                      className=" -rotate-90 opacity-35"
                      alt="downarrow"
                    />
                  </div>
                  <div className="flex justify-between">
                    <p className="opacity-35">Hoodie</p>
                    <Image
                      src={downArrow}
                      className=" -rotate-90 opacity-35"
                      alt="downarrow"
                    />
                  </div>
                  <div className="flex justify-between">
                    <p className="opacity-35">Jeans</p>
                    <Image
                      src={downArrow}
                      className=" -rotate-90 opacity-35"
                      alt="downarrow"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="border border-gray-300 my-6" />

            <div className="price">
              <div className="flex justify-between">
                <p className="font-semibold text-xl mb-7">Price</p>
                <Image
                  src={downArrow}
                  className="mb-6 rotate-180 opacity-80"
                  alt="downarrow"
                />
              </div>

              <div className="">
                <Image src={range} alt="downarrow" />
              </div>
            </div>
            <hr className="border border-gray-300 mb-6 mt-6" />

            <div className="colors">
              <div className="flex justify-between">
                <p className="font-semibold text-xl">Colors</p>
                <Image
                  src={downArrow}
                  className="mb-6 rotate-180 opacity-80"
                  alt="downarrow"
                />
              </div>

              <div className="flex gap-4 flex-wrap">
                <button className="w-9 h-9 bg-green-600 rounded-full"></button>
                <button className="w-9 h-9 bg-red-600 rounded-full"></button>
                <button className="w-9 h-9 bg-yellow-600 rounded-full"></button>
                <button className="w-9 h-9 bg-orange-600 rounded-full"></button>
                <button className="w-9 h-9 bg-cyan-500 rounded-full"></button>
                <button className="w-9 h-9 bg-blue-800 rounded-full"></button>
                <button className="w-9 h-9 bg-purple-800 rounded-full"></button>
                <button className="w-9 h-9 bg-pink-700 rounded-full"></button>
                <button className="w-9 h-9 bg-white rounded-full"></button>
                <button className="w-9 h-9 bg-black rounded-full"></button>
              </div>
            </div>
            <hr className="border border-gray-300 mb-6 mt-6" />

            <div className="size">
              <div className="flex justify-between">
                <p className="font-semibold text-xl">Size</p>
                <Image
                  src={downArrow}
                  className="mb-6 rotate-180 opacity-80"
                  alt="downarrow"
                />
              </div>
              <div>
                <div className="space-x-4 space-y-2">
                  <button className="w-24 h-10 text-sm bg-gray-300 hover:bg-black hover:border hover:text-white duration-300 rounded-full">
                    XX-Small
                  </button>
                  <button className="w-24 h-10 text-sm bg-gray-300 hover:bg-black hover:border hover:text-white duration-300 rounded-full">
                    X-Small
                  </button>

                  <button className="w-24 h-10 text-sm bg-gray-300 hover:bg-black hover:border hover:text-white duration-300 rounded-full">
                    Small
                  </button>
                  <button className="w-24 h-10 text-sm bg-gray-300 hover:bg-black hover:border hover:text-white duration-300 rounded-full">
                    Medium
                  </button>
                  <button className="w-24 h-10 text-sm bg-gray-300 hover:bg-black hover:border hover:text-white duration-300 rounded-full">
                    Large
                  </button>
                  <button className="w-24 h-10 text-sm bg-gray-300 hover:bg-black hover:border hover:text-white duration-300 rounded-full">
                    X-Large
                  </button>
                  <button className="w-24 h-10 text-sm bg-gray-300 hover:bg-black hover:border hover:text-white duration-300 rounded-full">
                    XX-Large
                  </button>
                  <button className="w-24 h-10 text-sm bg-gray-300 hover:bg-black hover:border hover:text-white duration-300 rounded-full">
                    3X-Large
                  </button>
                  <button className="w-24 h-10 text-sm bg-gray-300 hover:bg-black hover:border hover:text-white duration-300 rounded-full">
                    4X-Large
                  </button>
                </div>
              </div>
            </div>
            <hr className="border border-gray-300 mb-6 mt-6" />

            <div className="filter">
              <div className="flex justify-between mb-4">
                <p className="font-semibold">Dress Style</p>
                <Image
                  src={downArrow}
                  className="rotate-180 opacity-80"
                  alt="downarrow"
                />
              </div>
              <div className="filter">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <p className="opacity-35">T-shirt</p>
                    <Image
                      src={downArrow}
                      className="-rotate-90 opacity-35"
                      alt="downarrow"
                    />
                  </div>
                  <div className="flex justify-between">
                    <p className="opacity-35">Shorts</p>
                    <Image
                      src={downArrow}
                      className="-rotate-90 opacity-35"
                      alt="downarrow"
                    />
                  </div>
                  <div className="flex justify-between">
                    <p className="opacity-35">Shirts</p>
                    <Image
                      src={downArrow}
                      className=" -rotate-90 opacity-35"
                      alt="downarrow"
                    />
                  </div>
                  <div className="flex justify-between">
                    <p className="opacity-35">Hoodie</p>
                    <Image
                      src={downArrow}
                      className=" -rotate-90 opacity-35"
                      alt="downarrow"
                    />
                  </div>
                  <div className="flex justify-between">
                    <p className="opacity-35">Jeans</p>
                    <Image
                      src={downArrow}
                      className=" -rotate-90 opacity-35"
                      alt="downarrow"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <button className="w-full text-center py-2 px-6 text-lg bg-black text-white border-2 border-black rounded-full hover:bg-gray-300 hover:text-black cursor-pointer transition ease-linear duration-300">
                  Apply Filter
                </button>
              </div>
            </div>
          </div>

          <div className="casual basis-[70%] md:px-6 grow">
            <div className="">
              <div className="flex items-center md:justify-between my-4">
                <p className="text-2xl md:text-3xl font-semibold">Casual</p>
                <div className="flex md:gap-3">
                  <p className="text-base opacity-50 ml-2">
                    Showing 1-10 of 100 Products
                  </p>
                  <div className="hidden md:flex">
                    <p className="opacity-50 mr-1">Sort by:</p>
                    <p className="font-semibold"> Most Popular</p>
                    <Image src={downArrow} alt="downarrow" />
                  </div>
                </div>
                <Image src={filter} className="md:hidden ml-auto" alt="filter" />
              </div>

              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <div className=" bg-gray-300 rounded-lg flex mb-4">
                      <Image
                        src={shirt1}
                        alt="shirt"
                        className="flex-1 object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-bold sm:text-xl">
                        Gradient Graphic T-shirt
                      </p>
                      <div className="space-y-1">
                        <Image src={shirt1star} alt="stars" />
                        <div className="flex gap-2">
                          <p className="font-bold text-xl sm:text-2xl">$145</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className=" bg-gray-300 rounded-lg flex mb-4">
                      <Image
                        src={shirt2}
                        alt="polo"
                        className="object-cover flex-1"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-bold sm:text-xl">
                        Polo with Tipping Details
                      </p>
                      <div className="space-y-1">
                        <Image src={shirt2star} alt="stars" />
                        <p className="font-bold text-xl sm:text-2xl">$180</p>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className=" bg-gray-300 rounded-xl flex mb-4">
                      <Image
                        src={shirt3}
                        alt="tshirt"
                        className="object-cover flex-1"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-bold sm:text-xl">
                        Black Striped T-shirt
                      </p>
                      <div className="space-y-1">
                        <Image src={shirt3star} alt="stars" />
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-xl sm:text-2xl">$120</p>
                          <p className="font-bold text-xl sm:text-2xl line-through opacity-40">
                            $150
                          </p>
                          <p className="text-red-400 text-[10px] py-1 px-2 sm:text-sm ml-2 text-cente rounded-3xl">
                            -30%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className=" bg-gray-300 rounded-xl flex mb-4">
                      <Image
                        src={shirt4}
                        alt="jeans"
                        className="flex-1 object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-bold sm:text-xl">
                        Skinny Fit Jeans
                      </p>
                      <div className="space-y-1">
                        <Image src={shirtstar4} alt="stars" />
                        <div className="flex gap-2">
                          <p className="font-bold text-xl sm:text-2xl">$240</p>
                          <p className="font-bold text-xl sm:text-2xl line-through opacity-40">
                            $260
                          </p>
                          <p className="text-red-400 text-[10px] py-1 px-2 sm:text-sm ml-2 text-cente rounded-3xl">
                            -20%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className=" bg-gray-300 rounded-xl flex mb-4">
                      <Image
                        src={shirt5}
                        alt="shirt"
                        className="object-cover flex-1"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-bold sm:text-xl">
                        Checkered Shirt
                      </p>
                      <div className="space-y-1">
                        <Image src={shirtstar5} alt="stars" />
                        <p className="font-bold text-xl sm:text-2xl">$180</p>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className=" bg-gray-300 rounded-xl flex mb-4">
                      <Image
                        src={shirt6}
                        alt="tshirt"
                        className="object-cover flex-1"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-bold sm:text-xl">
                        T-shirt with Tape Detail
                      </p>
                      <div className="space-y-1">
                        <Image src={shirtstar5} alt="stars" />
                        <p className="font-bold text-xl sm:text-2xl">$130</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className=" bg-gray-300 rounded-xl flex mb-4">
                      <Image
                        src={shirt7}
                        alt="shirt"
                        className="object cover flex-1"
                      />
                    </div>

                    <div className="space-y-1">
                      <p className="text-base font-bold sm:text-xl">
                        Vertical Striped Shirt
                      </p>
                      <div className="space-y-1">
                        <Image src={shirt3star} alt="stars" />
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

                  <div className="hidden md:block">
                    <div className=" bg-gray-300 rounded-xl flex mb-4">
                      <Image
                        src={shirt8}
                        alt="tshirt"
                        className="flex-1 object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-bold sm:text-xl">
                        Clourage Graphic T-shirt
                      </p>
                      <div className="space-y-1">
                        <Image src={shirtstar8} alt="stars" />
                        <p className="font-bold text-xl sm:text-2xl">$145</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className=" bg-gray-300 rounded-xl flex mb-4">
                      <Image
                        src={shirt9}
                        alt="short"
                        className="object-cover flex-1"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-bold sm:text-xl">
                        Loose Fit Bermuda Shorts
                      </p>
                      <div className="space-y-1">
                        <Image src={shirtstar9} alt="stars" />
                        <p className="font-bold text-xl sm:text-2xl">$80</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border border-gray-300 mb-5 mt-8" />

            <div className="flex justify-between">
              <div className="flex gap-2">
                <Image src={leftarrow} className="" alt="leftarrow" />
                <p className="">Previous</p>
              </div>
              <div className="flex">
                <div className="w-9 md:w-10">1</div>
                <div className="w-9 md:w-10">2</div>
                <div className="w-9 md:w-10 hidden md:block">3</div>
                <div className="w-9 md:w-10">...</div>
                <div className="w-9 md:w-10 hidden md:block">8</div>
                <div className="w-9 md:w-10">9</div>
                <div className="w-9 md:w-10">10</div>
              </div>
              <div className="flex gap-2">
                <p className="">Next</p>
                <Image
                  src={leftarrow}
                  className="rotate-180"
                  alt="rightarrow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Casual;
