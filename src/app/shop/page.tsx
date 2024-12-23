import React from "react";
import Image from "next/image";
import shirt1 from "../../../public/images/shopshirt1.png";
import shirt2 from "../../../public/images/shopshirt2.png";
import shirt3 from "../../../public/images/shopshirt3.png";
import stars from "../../../public/images/jeansstar.svg";
import downArrow from "../../../public/images/downarrow.svg";
import check from "../../../public/images/testright.png";
import right from "../../../public/images/testright.png";
import star from "../../../public/images/teststar.png";
import adjust from "../../../public/images/adjust.png";
import polo1 from "../../../public/images/polo1.png";
import polo2 from "../../../public/images/polo2.png";
import shopshirt from "../../../public/images/shopshrit.png";
import shopshirt2 from "../../../public/images/shirt2.png";
import shopstar1 from "../../../public/images/shirtstar.svg";
import shopstar2 from "../../../public/images/tshirtstar.svg";
import shopstar3 from "../../../public/images/stars.svg";
import shopstar4 from "../../../public/images/jeansstar.svg";

const Shop = () => {
  return (
    <section className="shop">
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 border-t-2 ">
        <div className="flex items-center gap-2 mb-6 md:mb-9 pt-5 border-t-2 border-t-gray-300">
          <p className="opacity-35">Home</p>
          <Image
            src={downArrow}
            className="-rotate-90 opacity-35"
            alt="downarrow"
          />
          <p className="opacity-35">Shop</p>
          <Image
            src={downArrow}
            className="-rotate-90 opacity-35"
            alt="downarrow"
          />
          <p className="opacity-35">Men</p>
          <Image
            src={downArrow}
            className=" -rotate-90 opacity-35"
            alt="downarrow"
          />
          <p>T-shirts</p>
        </div>
        <div className="md:flex gap-8">
          <div className="sm:basis-[] ">
            <div className="flex flex-col sm:flex-row-reverse gap-4">
              <div className="w-[358] sm:w-[444px] bg-gray-300 rounded-lg">
                <Image src={shirt1} alt="shirt" className="w-full" />
              </div>
              <div className="flex sm:flex-col justify-around">
                <div className="sm:w-[152px] sm:h-[168px] w-[112px] h-[106] bg-gray-300 rounded-lg">
                  {" "}
                  <Image src={shirt1} alt="shirt" className="w-full h-full" />
                </div>
                <div className="sm:w-[152px] sm:h-[168px] w-[112px] h-[106] bg-gray-300 rounded-lg">
                  {" "}
                  <Image src={shirt2} alt="shirt" className="w-full h-full" />
                </div>
                <div className="sm:w-[152px] sm:h-[168px] w-[112px] h-[106] bg-gray-300 rounded-lg overflow-hidden">
                  {" "}
                  <Image src={shirt3} alt="shirt" className="" />
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="right-one pb-4">
              <div className="mt-5 md:mt-0 space-y-3">
                <h1 className="font-[900] text-2xl sm:text-4xl">
                  ONE LIFE GRAPHIC T-SHIRT
                </h1>
                <Image src={stars} alt="shirt" />
                <div className="flex gap-2 items-center">
                  <p className="font-bold text-xl sm:text-3xl">$260</p>
                  <p className="font-bold text-xl sm:text-3xl line-through opacity-40">
                    $300
                  </p>
                  <p className="text-[10px] py-1 px-2 sm:text-base ml-2 text-cente text-red-400 ">
                    -40%
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm sm:text-base">
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
              </p>
            </div>
            <hr className="border-gray-300 border-b my-6" />


            <div className="right-one pb-4">
              <p className="text-sm sm:tect-base mt-6">Select Colors</p>
              <div className="flex gap-4 mt-4">
                <button className="w-10 sm:w-[37] sm:h-[37] rounded-full bg-lime-950 px-[14px] py-[7px] text-lime-950">
                  <Image src={check} alt="right" />
                </button>
                <button className="w-10 sm:w-[37] sm:h-[37] rounded-full bg-[#314f4a] px-[14px] py-[7px] text-[#314f4a]">
                  .
                </button>
                <button className="w-10 sm:w-[37] sm:h-[37] rounded-full bg-[#31344f] px-[14px] py-[7px] text-[#31344f]">
                  .
                </button>
              </div>
            </div>
            <hr className="border-gray-300 border-b mt-6" />

            <div className="right-one pb-4">
              <p className="text-sm mt-6">Choose Size</p>
              <div className="flex justify-around mt-4">
                <button className="text-sm bg-gray-300 w-[76px] px-[14px] py-3 rounded-full">
                  Small
                </button>
                <button className="text-sm bg-gray-300 w-[76px] px-[14px] py-3 rounded-full">
                  Medium
                </button>
                <button className="text-sm bg-gray-300 w-[76px] px-[14px] py-3 rounded-full">
                  Large
                </button>
                <button className="text-sm bg-gray-300 w-[90px] px-[14px] py-3 rounded-full">
                  X-Large
                </button>
              </div>
            </div>
            <hr className="border-gray-300 border-b my-6" />

            <div className="flex gap-4 ">
              <button className="basis-1/4 bg-gray-300 rounded-full flex justify-around items-center">
                <span className="font-bold text-2xl">-</span>
                <p className="text-[10px]">1</p>
                <span className="font-bold text-2xl">+</span>
              </button>
              <button className="bg-black text-white basis-9/12 rounded-full px-4 py-3 border-2 border-black hover:text-black hover:bg-gray-100 active:scale-90 duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-11 sm:pt-16 pb-8 sm:pb-10 text-center cursor-pointer text-base sm:text-xl">
          <p className="border-b-2 border-gray-300 hover:border-b-black basis-1/3">
            Product Details
          </p>
          <p className="border-b-2 border-gray-300 hover:border-b-black basis-1/3">
            Rating & Reviews
          </p>
          <p className="border-b-2 border-gray-300 hover:border-b-black basis-1/3">
            FAQs
          </p>
        </div>

        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <p className="text-lg sm:text-2xl font-bold">All Reviews</p>
            <p className="text-sm sm:text-base">(451)</p>
          </div>

          <div className="flex items-center gap-3">
            <Image src={adjust} alt="adjust" />
            <div className="hidden items-center sm:flex">
              <p className="font-semibold">Latest</p>
              <Image src={downArrow} alt="arrow" />
            </div>
            <div className="flex">
              <button className="bg-black sm:w-[166px] px max-w-full text-white text-sm py-3 px-6 rounded-full active:scale-90 border-2 border-black hover:text-black hover:bg-gray-100 duration-300">
                Write a Review
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex justify-around gap-4">
            <div className="space-y-5">
              <div className="w-full sm:max-w-[546px] space-y-2 border-2 border-gray-300 px-8 py-7 rounded-md">
                <div className="flex justify-between">
                  <Image src={star} alt="star" className="mb-1" />
                  <p className="font-bold text-2xl opacity-35">...</p>
                </div>
                <h2 className="tracking-wider text-xl flex gap-2 font-bold">
                  Samantha D.
                  <Image src={right} alt="right" />
                </h2>
                <div className="text-sm sm:text-base space-y-6">
                  <p>
                    I am blown away by the quality and style of the clothes I
                    received from Shop.co. From casual wear to elegant dresses,
                    every piece I have bought has exceeded my expectations.
                  </p>
                  <p>Posted on August 14, 2023</p>
                </div>
              </div>

              <div className="w-full sm:max-w-[546px] space-y-2 border-2 border-gray-300 px-8 py-7 rounded-md">
                <div className="flex justify-between">
                  <Image src={star} alt="star" className="mb-1" />
                  <p className="font-bold text-2xl opacity-35">...</p>
                </div>
                <h2 className="tracking-wider text-xl flex gap-2 font-bold">
                  Ethan R.
                  <Image src={right} alt="right" />
                </h2>
                <div className="text-sm sm:text-base space-y-6">
                  <p>
                    Finding clothes that align with my personal style used to be
                    a challenge until I discovered Shop.co. The range of options
                    they offer is truly remarkable, catering to a variety of
                    tastes and occasions.
                  </p>
                  <p>Posted on August 16, 2023</p>
                </div>
              </div>

              <div className="w-full sm:max-w-[546px] space-y-2 border-2 border-gray-300 px-8 py-7 sm:hidden lg:block rounded-md">
                <div className="flex justify-between">
                  <Image src={star} alt="star" className="mb-1" />
                  <p className="font-bold text-2xl opacity-35">...</p>
                </div>
                <h2 className="tracking-wider text-xl flex gap-2 font-bold">
                  Liam K.
                  <Image src={right} alt="right" />
                </h2>
                <div className="text-sm sm:text-base space-y-6">
                  <p>
                    As someone who is always on the lookout for unique fashion
                    pieces, I am thrilled to have stumbled upon Shop.co. The
                    selection of clothes is not only diverse but also on-point
                    with the latest trends.
                  </p>
                  <p>Posted on August 18, 2023</p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="w-full sm:max-w-[546px] space-y-2 border-2 border-gray-300 px-8 py-7 hidden sm:block rouded-md">
                <div className="flex justify-between">
                  <Image src={star} alt="star" className="mb-1" />
                  <p className="font-bold text-2xl opacity-35">...</p>
                </div>
                <h2 className="tracking-wider text-xl flex gap-2 font-bold">
                  Alex M.
                  <Image src={right} alt="right" />
                </h2>
                <div className="text-sm sm:text-base space-y-6">
                  <p>
                    I am blown away by the quality and style of the clothes I
                    received from Shop.co. From casual wear to elegant dresses,
                    every piece I have bought has exceeded my expectations.
                  </p>
                  <p>Posted on August 15, 2023</p>
                </div>
              </div>

              <div className="w-full sm:max-w-[546px] space-y-2 border-2 border-gray-300 px-8 py-7 hidden sm:block rounded-md">
                <div className="flex justify-between">
                  <Image src={star} alt="star" className="mb-1" />
                  <p className="font-bold text-2xl opacity-35">...</p>
                </div>
                <h2 className="tracking-wider text-xl flex gap-2 font-bold">
                  Olivia P.
                  <Image src={right} alt="right" />
                </h2>
                <div className="text-sm sm:text-base space-y-6">
                  <p>
                    Finding clothes that align with my personal style used to be
                    a challenge until I discovered Shop.co. The range of options
                    they offer is truly remarkable, catering to a variety of
                    tastes and occasions.
                  </p>
                  <p>Posted on August 17, 2023</p>
                </div>
              </div>

              <div className="w-full sm:max-w-[546px] space-y-2 border-2 border-gray-300 px-8 py-7 hidden lg:block rounded-md">
                <div className="flex justify-between">
                  <Image src={star} alt="star" className="mb-1" />
                  <p className="font-bold text-2xl opacity-35">...</p>
                </div>
                <h2 className="tracking-wider text-xl flex gap-2 font-bold">
                  Ava H.
                  <Image src={right} alt="right" />
                </h2>
                <div className="text-sm sm:text-base space-y-6">
                  <p>
                    As someone who is always on the lookout for unique fashion
                    pieces, I am thrilled to have stumbled upon Shop.co. The
                    selection of clothes is not only diverse but also on-point
                    with the latest trends.
                  </p>
                  <p>Posted on August 19, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="w-full sm:w-[230px] border-gray-300 bg:gray-300 border-2 text-black rounded-full px-5 py-3 hover:bg-black hover:text-white cursor-pointer active:scale-90 duration-300">
            Load More Previews
          </button>
        </div>

        <div className="pt-12">
          <h1 className="text-center mb-10 font-[900] text-[32px] sm:text-5xl">
            YOU MIGHT ALSO LIKE
          </h1>
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className=" bg-gray-300 rounded-xl flex mb-4">
                  <Image
                    src={polo2}
                    alt="polo2"
                    className="object cover flex-1"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold sm:text-xl">
                    Polo with Contrast Trims
                  </p>
                  <div className="space-y-1">
                    <Image src={shopstar2} alt="stars" />
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-xl sm:text-2xl">$212</p>
                      <p className="font-bold text-xl sm:text-2xl line-through opacity-40">
                        $242
                      </p>
                      <p className="text-red-400 text-[10px] py-1 px-2 sm:text-sm ml-2 text-cente rounded-3xl">
                        -20%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className=" bg-gray-300 rounded-xl flex mb-4">
                  <Image
                    src={shopshirt}
                    alt="shirt"
                    className="flex-1 object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold sm:text-xl">
                    Gradient Graphic T-shirt
                  </p>
                  <div className="space-y-1">
                    <Image src={shopstar3} alt="stars" />
                    <div className="flex gap-2">
                      <p className="font-bold text-xl sm:text-2xl">$145</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block">
                <div className=" bg-gray-300 rounded-xl flex justify-center mb-4">
                  <Image
                    src={polo1}
                    alt="polo"
                    className="object-cover flex-1"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold sm:text-xl">
                    Polo with Tipping Details
                  </p>
                  <div className="space-y-1">
                    <Image src={shopstar4} alt="stars" />
                    <p className="font-bold text-xl sm:text-2xl">$180</p>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block">
                <div className=" bg-gray-300 rounded-xl flex justify-center mb-4">
                  <Image
                    src={shopshirt2}
                    alt="tshirt"
                    className="object-cover flex-1"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold sm:text-xl">
                    Black Striped T-shirt
                  </p>
                  <div className="space-y-1">
                    <Image src={shopstar1} alt="stars" />
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
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="w-full sm:w-[230px] sm:object-center text-center py-3 px-12 text-lg bg-white text-black active:scale-90 border-2 border-gray-300 rounded-full hover:bg-black hover:text-white cursor-pointer hover:border-black transition ease-linear duration-300">
              Shop Now
            </button>
          </div>
          <hr className="w-full border-gray-300 mt-[40px] sm:mt-16" />
        </div>
      </div>
    </section>
  );
};

export default Shop;
