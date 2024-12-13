import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import menubar from "../../public/images/menubar.svg";
import search from "../../public/images/search.svg";
import cart from "../../public/images/cart.svg";
import signup from "../../public/images/signup.svg";
import downarrow from "../../public/images/downarrow.svg";
import Link from "next/link";

export const Header2 = () => {
  return (
    // `<div className="container mx-auto">
    //   <div className="h-12 flex mt-4 mb-4 justify-between items-center">
    //     <div className="flex gap-4">
    //       <div className="flex gap-4">
    //         <Image src={menubar} alt="logo" className=" md:hidden" />
    //         <Image src={logo} alt="logo" />
    //       </div>

    //       <div className="hidden md:flex gap-4">
    //         <div className="flex">
    //           <p>Shop</p> <Image src={downarrow} alt="logo" />
    //         </div>
    //         <div>
    //           <p>On Sale</p>
    //         </div>
    //         <div>
    //           <p>New Arrivals</p>
    //         </div>
    //         <div>
    //           <p>Brands</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex gap-4">
    //       <div className="hidden md:flex gap-4 bg-gray-200 w-[300px] py-2 px-4">
    //         <Image src={search} alt="logo"/>
    //         <p className="hidden rounded-xl md:block opacity-35">Search for products...</p>
    //       </div>
    //       <Image src={search} alt="logo" className="md:hidden" />
    //       <Image src={cart} alt="logo" />
    //       <Image src={signup} alt="logo" />
    //     </div>
    //   </div>
    // </div>`
      <div className="px-4 sm:px-8 lg:px-16 min-h-[64px] sm:min-h-[96px]">
        <div className="flex min-h-[96px] items-center justify-between gap-4">
          <div className="flex gap-3">
            <div className="sm:hidden"><Image src={menubar} alt="logo" /> </div>
            <Image src={logo} alt="logo" />
          </div>

          <div className="hidden sm:flex gap-3">
            <div className="flex">
              <p>Shop</p><Image className="" src={downarrow} alt="logo"/>
            </div>
            <div>
              <p>On Sale</p>
            </div>
            <div>
              <p>New Arrivals</p>
            </div>
            <div>
              <p>Brands</p>
            </div>
          </div>
          <div className="flex-1 hidden sm:block  rounded-ful max-w-[577px] bg-[#d3d3d3] rounded-full">
            <div className="flex items-center opacity-3 h-10 gap-2 pl-4">
              <Image src={search} alt="logo" className="opacity-35"/>
              <input type="text" placeholder="Search for products..." className="hidden sm:block flex-1 bg-[#d3d3d3] rounded-full w-0"/>
            </div>
          </div>

        <div className="flex gap-4">
          <Image src={search} alt="logo" className="block sm:hidden" />
          <Image src={cart} alt="logo" />
          <Image src={signup} alt="logo" />
        </div>
      </div>
    </div>
  );
};
