import React from "react";
import Image from "next/image";
import downArrow from "../../../public/images/downarrow.svg";
import shirt1 from "../../../public/images/shopshrit.png";
import shirt4 from "../../../public/images/jeans.png";
import shirt5 from "../../../public/images/shirt.png";
import deltet from "../../../public/images/delete.png";
import code from "../../../public/images/promocode.png";

const Cart = () => {
  return (
    <section className="cart">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="border-t-2 border-t-gray-300">
          <div className="flex items-center gap-2 mb-6 md:mb-9 pt-5">
            <p className="opacity-35">Home</p>
            <Image
              src={downArrow}
              className="-rotate-90 opacity-35"
              alt="downarrow"
            />
            <p className="cursor-pointer">Cart</p>
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-[900] mb-5">YOUR CART</h1>

        <div className="md:grid md:grid-cols-5 gap-5">
          <div className="border border-gray-300 p-4 rounded-xl col-span-3">
            <div className="flex gap-2">
              <div className=" bg-gray-300 rounded-md flex">
                <Image
                  src={shirt1}
                  alt="shirt"
                  className="w-[99px] sm:w-full object-cover"
                />
              </div>

              <div className="w-full">
                <div className="flex justify-between mb-1">
                  <p className="text-base font-bold sm:text-xl">
                    Gradient Graphic T-shirt
                  </p>
                  <Image src={deltet} alt="shirt" className="object-cover" />
                </div>
                <div className="flex text-xs mb-1">
                  <p className="font-semibold">Size:</p>
                  <p>Large</p>
                </div>
                <div className="flex text-xs">
                  <p className="font-semibold">Color:</p>
                  <p>White</p>
                </div>
                <div className="flex justify-between mt-[10px]">
                  <p className="font-bold text-xl sm:text-2xl">$145</p>
                  <button className="w-[105px] md:w-[126px] md:h-11 bg-gray-300 rounded-full flex justify-around items-center">
                    <span className="font-bold text-2xl">-</span>
                    <p className="text-sm">1</p>
                    <span className="font-bold text-2xl">+</span>
                  </button>
                </div>
              </div>
            </div>
            <hr className="w-full border-b border-gray-300 my-4" />

            <div className="flex gap-2">
              <div className=" bg-gray-300 rounded-md flex">
                <Image
                  src={shirt4}
                  alt="shirt"
                  className="w-[99px] sm:w-full object-cover"
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between mb-1">
                  <p className="text-base font-bold sm:text-xl">
                    Skinny Fit Jeans
                  </p>
                  <Image src={deltet} alt="shirt" className="object-cover" />
                </div>
                <div className="flex text-xs mb-1">
                  <p className="font-semibold">Size:</p>
                  <p>Large</p>
                </div>
                <div className="flex text-xs">
                  <p className="font-semibold">Color:</p>
                  <p>Blue</p>
                </div>
                <div className="flex justify-between mt-[10px]">
                  <p className="font-bold text-xl sm:text-2xl">$240</p>
                  <button className="w-[105px] md:w-[126px] md:h-11 bg-gray-300 rounded-full flex justify-around items-center">
                    <span className="font-bold text-2xl">-</span>
                    <p className="text-sm">1</p>
                    <span className="font-bold text-2xl">+</span>
                  </button>
                </div>
              </div>
            </div>
            <hr className="w-full border-b border-gray-300 my-4" />

            <div className="flex gap-2">
              <div className=" bg-gray-300 rounded-md flex">
                <Image
                  src={shirt5}
                  alt="shirt"
                  className="w-[99px] sm:w-full object-cover"
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between mb-1">
                  <p className="text-base font-bold sm:text-xl">
                    Checkered Shirt
                  </p>
                  <Image src={deltet} alt="shirt" className="object-cover" />
                </div>
                <div className="flex text-xs mb-1">
                  <p className="font-semibold">Size:</p>
                  <p>Medium</p>
                </div>
                <div className="flex text-xs">
                  <p className="font-semibold">Color:</p>
                  <p>Red</p>
                </div>
                <div className="flex justify-between mt-[10px]">
                  <p className="font-bold text-xl sm:text-2xl">$180</p>
                  <button className="w-[105px] md:w-[126px] md:h-11 bg-gray-300 rounded-full flex justify-around items-center">
                    <span className="font-bold text-2xl">-</span>
                    <p className="text-sm">1</p>
                    <span className="font-bold text-2xl">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="order-summary col-span-2">
            <div className="border border-gray-300 rounded-xl p-5 mt-5 md:mt-0">
              <h1>Order Summary</h1>
              <div>
                <div className="flex justify-between mb-5">
                  <p className="text-base opacity-60 ">Subtotal</p>
                  <p className="text-base font-bold">$565</p>
                </div>
                <div className="flex justify-between mb-5">
                  <p className="text-base opacity-60 ">Discount (-20%)</p>
                  <p className="text-base font-bold text-red-600">$113</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base opacity-60 ">Delivery Free</p>
                  <p className="text-base font-bold">$15</p>
                </div>
                <hr className="w-full border-b border-gray-300 my-5" />

                <div className="flex justify-between">
                  <p className="text-base ">Total</p>
                  <p className="text-xl font-bold">$467</p>
                </div>

                <div className="flex items-center justify-between gap-3 mt-4">
                  <button className="flex items-center w-[70%] h-[48px] rounded-full bg-gray-300 p-4 gap-3">
                    <Image src={code} className=" opacity-50" alt="downarrow" />
                    <input
                      type=" text"
                      placeholder="Add promo code"
                      className="bg-gray-300 max-w-32 outline-none"
                    />
                  </button>
                  <button className="bg-black text-white w-[30%] h-12 rounded-full active:scale-90">
                    Apply
                  </button>
                </div>
                <button className="bg-black text-white w-full h-12 rounded-full mt-4 active:scale-90">
                  Go To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
