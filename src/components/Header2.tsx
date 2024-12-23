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
    <section className="second-header">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16 min-h-[64px] sm:min-h-[96px]">
        <div className="flex min-h-[96px] items-center justify-between gap-4">
          <div className="flex gap-3">
            <div className="md:hidden"><Image src={menubar} alt="logo" /> </div>
            <Image src={logo} alt="logo" />
          </div>

          <div className="hidden md:flex gap-3">
            <div className="flex">
              <Link href="/shop">Shop</Link>
              <Image className="" src={downarrow} alt="logo"/>
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
          <div className="flex-1 hidden md:block  rounded-ful max-w-[577px] bg-gray-300 rounded-full">
            <div className="flex items-center opacity-3 h-10 gap-3 pl-[18px]">
              <Image src={search} alt="logo" className="opacity-35"/>
              <input type="text" placeholder="Search for products..." className="hidden md:block flex-1 bg-gray-300 rounded-full w-0 outline-none pl-1"/>
            </div>
          </div>

        <div className="flex gap-4">
          <Image src={search} alt="logo" className="block md:hidden" />
          <Image src={cart} alt="logo" />
          <Image src={signup} alt="logo" />
        </div>
      </div>
    </div>
  </section>
  );
};
