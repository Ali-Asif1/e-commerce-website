"use client";

import Image from "next/image";
import logo from "../../public/images/logo.png";
import menubar from "../../public/images/menubar.svg";
import search from "../../public/images/search.svg";
import cart from "../../public/images/cart.svg";
import signup from "../../public/images/signup.svg";
import downarrow from "../../public/images/downarrow.svg";
import Link from "next/link";
import { useState } from "react";

export const Header2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopMenu, setShopMenu] = useState(false);

  return (
    <section className="second-header">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16 min-h-[64px] sm:min-h-[96px]">
        <div className="flex min-h-[96px] items-center justify-between gap-4">
          <div className="flex gap-3">
            <div className="md:hidden cursor-pointer">
             <Image
                src={menubar}
                alt="logo"
                onClick={() => setMenuOpen(!menuOpen)} className="relative"
                priority
              />
              {menuOpen ? (
                <div className="absolute w-[92%] mt-4 max-h-full bg-white rounded-lg z-10 duration-200 flex flex-col gap-6 font-semibold p-5">
                  <div className="space-y-2">
                    <Link href={""}>Shop</Link>
                    <hr className="border-2"/>
                  </div >
                  <div className="space-y-2">
                    <Link href={""}>On Sale</Link>
                    <hr className=" border-2"/>
                  </div>
                  <div className="space-y-2">
                    <Link href={""}>New Arrivals</Link>
                    <hr className=" border-2"/>
                  </div>
                  <div>
                    <Link href={""}>Brands</Link>
                  </div>
                </div>
              ) : null}
            </div>
            <Link href={'/'}><Image src={logo} alt="logo" priority /></Link>
          </div>

          <div className="hidden md:flex gap-4">
            <div className="flex relative">
              <Link href="">Shop</Link>
              <Image src={downarrow} priority alt="logo" onClick={() => setShopMenu(!shopMenu)} className="cursor-pointer"/>
                {shopMenu ? <div className="absolute w-24 h-9 top-[22px] left-10 bg-gray-200 rounded-lg z-10 duration-300 px-2 py-1">
                  <h1 className=" text-gray-700">Men</h1>
                </div>:null }
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
          <div className="flex-1 hidden md:block  rounded-ful max-w-[577px] bg-gray-200 rounded-full">
            <div className="flex items-center opacity-3 h-10 gap-3 pl-[18px]">
              <Image src={search} priority alt="logo" className="opacity-35" />
              <input
                type="text"
                placeholder="Search for products..."
                className="hidden md:block flex-1 bg-gray-200 rounded-full w-0 outline-none pl-1"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Image src={search}  priority alt="logo" className="block md:hidden" />
            <Image src={cart}  priority alt="logo" />
            <Image src={signup}  priority alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};
