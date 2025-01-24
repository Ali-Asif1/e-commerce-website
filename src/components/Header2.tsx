'use client'

import Image from "next/image";
import logo from "../../public/images/logo.png";
import menubar from "../../public/images/menubar.svg";
import search from "../../public/images/search.svg";
import cart from "../../public/images/cart.svg";
import signup from "../../public/images/signup.svg";
import downarrow from "../../public/images/downarrow.svg";
import Link from "next/link";
import { useState } from "react";
import { useAppSelector } from "@/app/redux/hooks";


export const Header2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopMenu, setShopMenu] = useState(false);

 const items = useAppSelector(state => state.cart.items)

  return (
    <section className="second-header">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16 min-h-[64px] sm:min-h-[96px]">
        <div className="flex min-h-[96px] items-center justify-between gap-4 border-b-2 border-gray-200">
          <div className="flex gap-3">
            <div className="md:hidden cursor-pointer">
             <Image
                src={menubar}
                alt="logo"
                onClick={() => setMenuOpen(!menuOpen)} className="relative"
                priority
              />
              {menuOpen ? (
                <div className="absolute w-[92%] mt-4 max-h-full bg-gray-200 rounded-lg z-10 duration-200 flex flex-col gap-6 font-semibold p-5">
                  <div className="space-y-2">
                    <Link href={"/"}>Home</Link>
                    <hr className="border border-gray-300"/>
                  </div >
                  <div className="space-y-2">
                    <Link href={"/product"}>Product</Link>
                    <hr className="border border-gray-300"/>
                  </div>
                  <div className="space-y-2">
                    <Link href={"/NewArrivals"}>New Arrivals</Link>
                    <hr className="border border-gray-300"/>
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
            <div>
              <Link href={'/'}>Home</Link>
            </div>
            <div className="flex relative">
              <Link href="/">Categories</Link>
              <Image src={downarrow} priority alt="logo" onClick={() => setShopMenu(!shopMenu)} className="cursor-pointer"/>
                {shopMenu ? <div className="absolute w-28 top-6 left-[90px] text-sm shadow-2xl bg-white border border-gray-300 rounded-lg z-10 duration-300 px-2 py-2 space-y-2">
                  <Link href={''}><h1 className=" text-gray-700">Shirt</h1></Link>
                  <Link href={''}><h1 className=" text-gray-700">T-Shirt</h1></Link>
                  <Link href={''}><h1 className=" text-gray-700">Jeans</h1></Link>
                  <Link href={''}><h1 className=" text-gray-700">Hoddie</h1></Link>
                </div>:null }
            </div>
            <div>
              <Link href={'/product'}>Products</Link>
            </div>
            <div>
              <p>Brands</p>
            </div>
          </div>
          <div className="flex-1 hidden lg:block  rounded-ful max-w-[577px] bg-gray-200 rounded-full">
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
            <div className="relative"><Link href={'/cart'}><Image src={cart}  priority alt="logo" /></Link>
            <span className="absolute bottom-[14px] left-5 text-sm">{items.length}</span>
            </div>
            <Image src={signup}  priority alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};
